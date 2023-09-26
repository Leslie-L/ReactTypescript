'use client';
import Image from 'next/image';
import { useState } from 'react';
import type {MouseEventHandler} from 'react'

export default function Home() {
  
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row  items-center justify-between bg-white">
        <section className='pt-4 w-full md:w-1/2 md:h-full  flex flex-col justify-center items-center '>
          <img
            className='drop-shadow-lg rounded-md w-4/5 h-72 md:h-auto md:w-3/5' 
            src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </section>
        <section className='px-3 md:w-1/2 md:h-fulflex flex-col justify-center items-center'>
          <h1 className='font-bold text-orange-700  text-4xl text-center font-sans my-3'>PROTEGE A LOS ZORROS</h1>
          <p className='font-regular font-sans text-black px-3'>
            Los zorros, esas enigmáticas criaturas del mundo salvaje, despiertan la curiosidad y la admiración de amantes de la naturaleza en todo el globo. Con su astucia, adaptabilidad y elegancia, los zorros se han convertido en verdaderos maestros de la supervivencia en diversos entornos, desde bosques frondosos hasta desiertos implacables y tundras heladas. <br/>En este rincón virtual, te invitamos a adentrarte en el fascinante mundo de los zorros, explorando sus diferentes especies, descubriendo sus hábitos y misterios, y sumergiéndote en una galería de imágenes que capturan su belleza y gracia en la naturaleza. Bienvenido a un viaje de descubrimiento, donde conocerás a los astutos habitantes de la noche y a los campeones de la adaptación: los maravillosos zorros.
          </p>
        </section>
        
    </main>
  )
}
