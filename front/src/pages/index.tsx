import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { Planet } from '../types';
import BaseCard from '../components/BaseCard'; // Assuming you will use it to display each planet
import Intro from '../components/Intro';
import Films from '@/components/Films';
import Character from '@/components/Character';
import People from '@/components/People';
import Footer from '@/components/Footer';
import Planets from '@/components/Planets';

const Index = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/planets');
        setPlanets(response.data.data); // Adjust according to the actual structure of your response
      } catch (error) {
        console.error('Failed to fetch planets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return <div className='h-screen bg-white'>Loading...</div>; // Replace with a Skeleton component if needed
  }

  return (
    <div className="flex flex-col">
      <Intro />
      <div id="FILMS">
      <Films/>
      </div>
      <Character/>
      <div id="CHARACTER">
      <People/>
      </div>
      <Planets/>
      <Footer/>
    </div>
  );
};

export default Index;
