import React, {useState, useEffect} from 'react'
import CharacterCard from '@/components/CharacterCard'
import axiosInstance from '@/utils/axiosInstance'
import {Person} from '@/types'

const Index = () => {
    const [people, setPeople] = useState<Person[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axiosInstance.get('/people')
                console.log(response.data.data)
                setPeople(response.data.data)
            } catch (error) {
                console.error('Failed to fetch people:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPeople()
    }, [])

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
    {
            people.map((person) => (
                <CharacterCard key={person._id} character={person} />
            ))
    }

    </div>
  )
}

export default Index