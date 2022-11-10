const Card = (props) => {
    return (
        <div>
            <div>{props.titulo}</div>
            <div>{props.descricao}</div>
        </div>
    )
}

export default Card;