'use client';
import { useState } from 'react';
import type {MouseEventHandler} from 'react'
import { RandomFox } from '@/components/RandomFox'
import { v4 as uuidv4 } from 'uuid';
const random = ():number =>{
  return Math.floor(Math.random() *123)+1;
}
const idGenerator =():string=>{
  return uuidv4();
  
}
type ImageItems = {
  id:string,
  url:string
}
export default function Page() {
  const [images,setImages] = useState<ImageItems[]>([]);
  
  const addNewFox:MouseEventHandler<HTMLButtonElement>=():void=>{
    const newItem:ImageItems = {id:idGenerator(),url:`https://randomfox.ca/images/${random()}.jpg`};
    setImages([...images,newItem]);
  }
  return (
    <main className="flex min-h-screen flex-col items-center">
        <h1 className='font-bold text-orange-700  text-4xl text-center font-sans my-3'>Galería</h1>
        <button className=' w-36 h-10 bg-lightBrown rounded-sm text-white hover:bg-cream my-3' onClick={addNewFox}>Ver más Fotos</button>
        <section className='w-full flex flex-col justify-center items-center'>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2'>
            <img width={300} className='rounded-md shadow-md shadow-blue-100' src="https://images.pexels.com/photos/208976/pexels-photo-208976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="zorro" />
            {images.map((item)=>{
              return(
                <div key={item.id} className='p-4'>
                  <RandomFox image={item.url}/>
                </div>
              )
            })}
            </div>
        </section>
        
    </main>
  )
}
