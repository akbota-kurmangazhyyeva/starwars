'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import CharacterCard from './CharacterCard';
import { Person } from '@/types';

const People: React.FC = () => {
  const [people, setpeople] = useState<Person[]>([]);
  const [filteredpeople, setFilteredpeople] = useState<Person[]>([]);
  const [searchFilteredpeople, setSearchFilteredpeople] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pageSize = 4;

  useEffect(() => {
    fetchpeople();
  }, []);

  const fetchpeople = async () => {
    try {
      const response = await axiosInstance.get('/people');
      console.log('response:', response.data.data);
      setpeople(response.data.data);
      setFilteredpeople(response.data.data.slice(0, pageSize));
    } catch (error) {
      console.error('Error fetching people:', error);
      setError('Error fetching people. See console for details.');
    }
  };

  const handleSearchChange = (person: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(person.target.value);
    filterpeople(person.target.value);
  };

  const handlePageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setFilteredpeople(people.slice(startIndex, endIndex));
};

  const filterpeople = (query: string) => {
    const filtered = people.filter(person =>
      person.name.toLowerCase().includes(query.toLowerCase()) ||
      person.birth_year.toLowerCase().includes(query.toLowerCase()) ||
      (person.homeworld && person.hair_color.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchFilteredpeople(filtered);
    setFilteredpeople(filtered.slice(0, pageSize)); // Limit to first page after filtering
  };

  const handleSearchPageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setFilteredpeople(searchFilteredpeople.slice(startIndex, endIndex));
  };

  return (
    <div className="bg-black-bg h-screen px-24 py-8 flex flex-col gap-4">
      <div className="text-3xl font-bold mb-8 flex justify-center items-center text-gray-300">Characters</div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Find your favorite character..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 bg-black-bg-search rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchQuery ? (
          filteredpeople.map((person: any, index) => (
            <CharacterCard key={`${person.person_id}-${index}`} character={person} />
          ))
        ) : (
          filteredpeople.map((person: any, index) => (
            <CharacterCard key={`${person.person_id}-${index}`}character={person} />
          ))
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {searchQuery ? (
          Array.from({ length: Math.ceil(searchFilteredpeople.length / pageSize) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleSearchPageChange(i + 1)}
              className="px-3 py-1 mx-1 rounded bg-black-bg-search text-white"
            >
              {i + 1}
            </button>
          ))
        ) : (
          Array.from({ length: Math.ceil(people.length / pageSize) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className="px-3 py-1 mx-1 rounded bg-black-bg-search text-white"
            >
              {i + 1}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default People;