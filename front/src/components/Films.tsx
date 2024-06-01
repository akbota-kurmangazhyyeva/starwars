import React, { use } from 'react'
import {useState, useEffect} from 'react'
import axiosInstance from '../utils/axiosInstance'
import {Film} from '../types'
import FilmCarousel from './FilmCarousel'
import DraggableCarousel from './DraggableCarousel'

const Films = () => {
  const [films, setFilms] = useState<Film[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get('/films')
        console.log(response.data.data)
        setFilms(response.data.data)
      } catch (error) {
        console.error('Failed to fetch films:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFilms()
  }
  , []);
  return (
    <div className='bg-block2 bg-no-repeat bg-cover h-screen flex justify-center items-center'>
      <FilmCarousel films={films} />
    </div>
  )
}

export default Films