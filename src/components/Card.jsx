import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Card( {result} ) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-fuchsia-300 sm:shadow-md rounded-lg sm:border sm:border-b-fuchsia-950 sm:m-2 transition-shadow duration-300'>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`} 
          width={500}
          height={300}
          alt={result.title || result.name || 'Poster'}
          className='sm:rounded-t-lg group-hover:opacity-94 transition-opacity duration-500'
        />
        <div className='p-2'>
            <h2 className='text-lg font-bold truncate text-center '>{result.title || result.name} - ({result.release_date || result.first_air_date}) </h2>
            <p className='line-clamp-2 text-md indent-3 text-justify'>{result.overview}</p>            
        </div>
        </Link>
    </div>
  )
}
