import Link from "next/link"

export function Navigation() {
    return(
        <nav className="w-full h-12 bg-lightBrown shadow-sm shadow-neutral-800 grid place-content-center">
            <ul className="flex justify-betweentext-white p-2 gap-4 md:w-9/12 text-md text-white font-medium">
                <li><Link href={"/"}>Inicio</Link></li>
                <li><Link href={"/especies"}>Especies</Link></li>
                <li><Link href={"/gallery"}>Galería</Link></li>
            </ul>
        </nav>
    )
}