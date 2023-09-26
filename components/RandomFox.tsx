import { useEffect, useRef, useState } from "react"
import type {ImgHTMLAttributes} from 'react'
import gray from '@/Images/Solid_grey.svg'
type LazyImageProps = {image:string}
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props =LazyImageProps  & ImageNative

export const RandomFox = ({image,...imProps}:Props):JSX.Element =>{
    const node = useRef<HTMLImageElement>(null)
    const [src,setSrc]= useState("https://upload.wikimedia.org/wikipedia/commons/8/86/Solid_grey.svg");

    useEffect(()=>{
        //nuevo observador
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                   setSrc(image)
                }
            })
        })
        //observe node
        if(node.current)
            observer.observe(node.current)
        //desconectar
        return ()=>{
            observer.disconnect()
        }
    },[image])
     

    // eslint-disable-next-line @next/next/no-img-element
    return <img ref={node}  src={src} width={300} className='rounded-md shadow-md shadow-blue-100' alt='new fox image' {...imProps}  />
}