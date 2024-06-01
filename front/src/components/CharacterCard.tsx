import React from 'react'
import { Person } from '../types'
import Link from 'next/link'
import Image from 'next/image'

const CharacterCard = ({ character}: { character: Person }) => {
  return (
    <Link href={`/people/${character._id}`} className='transform hover:scale-105 transition duration-30'>
        <div className='bg-black bg-opacity-50 text-white flex flex-col items-center justify-center gap-4 p-12 rounded-2xl'>
        <h1 className='text-2xl font-bold'>{character.name}</h1>
        <Image src="/images/chart.png" alt={character.name} width={200} height={270}/>
        <div className="flex flex-row gap-4 text-white text-opacity-60">
        <p>{character.eye_color.toUpperCase()}</p>
        <p>{character.birth_year.toUpperCase()}</p>
        <p>{character.skin_color.toUpperCase()}</p>
        </div>
    </div>
    </Link>
  )
}

export default CharacterCard