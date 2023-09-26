import { Fox } from "@/Data/species";
function Card({fox}):JSX.Element {
    return(
        <section className="w-full bg-slate-300 rounded-lg shadow-sm shadow-slate-600 mb-3 p-3">
            <h3 className="font-bold text-lg">{fox.nombre}</h3>
            <h4 className="font-light text-lg">{fox.nombreCientifico}</h4>
            <h4 className="font-normal text-md"><b>Habitat: </b>{fox.habitat} </h4>
            <h4 className="font-normal text-md"><b>Alimentación</b>{fox.alimentacion}</h4>
            <p className="font-normal text-md"><b>Descripcion</b><br /> {fox.descripcion}</p>
        </section>
    )
}
export default Card;