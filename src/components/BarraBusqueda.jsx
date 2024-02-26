export default function BarraBusqueda({filter, setFilter}){
    return(
        <>
            <input type="text" value={filter} placeholder="Buscar..." onChange={(e) => setFilter(e.target.value)} />
        </>
    )
}