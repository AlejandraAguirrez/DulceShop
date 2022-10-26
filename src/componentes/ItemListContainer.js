const ItemListContainer = (props) => {
    let mensaje
    if (props.texto) {
        mensaje = "consulta por promociones"
    } else {
        mensaje = "consulta por todas nuestras variedades"
    }
    return (
        <>
        <div className="alert alert-warning container-sm  border-start-0 rounded-pill" role="alert">
        {props.contenido} - {mensaje}
        </div>
        </>
    )
}

export default ItemListContainer;