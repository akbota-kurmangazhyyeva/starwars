import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { Planet } from '../../types';
import BaseCard from '../../components/BaseCard';

const Index = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get('/planets');
        setPlanets(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <div className="flex flex-col h-screen m-8">
      <div className="text-3xl font-bold text-center mb-8 text-gray-300">Planets</div>
      {loading ? (
        <div className="flex items-center justify-center h-full">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {planets.map((planet) => (
            <BaseCard key={planet._id} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
