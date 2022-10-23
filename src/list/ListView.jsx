
//Componente de presentacion = como se van a mostrar los datos, presentan datos.
function ListView({elements, funcFilterItems}) {
    return(
        //Esto es lo mas comun para poder mostrar un arreglo de string
        <div>
            <input type="text" onChange={ ev => funcFilterItems(ev.target.value) } />
            <ul>
            {
                elements.map((nombre, index) => nombre && <li key={index}> {nombre} </li>)
            }
            </ul>
        </div>
    );
}

export default ListView;