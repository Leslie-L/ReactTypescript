import { Fox, foxes } from "@/Data/species"
import Card from "@/components/Cards"
export default function Especies() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <h1 className="font-bold text-orange-700  text-4xl text-center font-sans my-3">Especies de Zorros</h1>
        {foxes.map((fox:Fox)=>{
            return <Card key={fox.nombreCientifico} fox={fox} />
        })}
       </main>
    )
}