function CardUsuario( {nome, curso} ) {

    return (
        <div className="card">
            <hr />
            <h2>{nome}</h2>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default CardUsuario