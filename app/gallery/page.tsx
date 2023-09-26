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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>hello world!</h1>
        <button className='w-20 h-10 bg-blue-500' onClick={addNewFox}>Add Fox</button>
        {images.map((item)=>{
          return(
            <div key={item.id} className='p-4'>
              <RandomFox image={item.url}/>
            </div>
          )
        })}
    </main>
  )
}
