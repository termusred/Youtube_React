import "../styles/card.css"

const Card = ({data}) => {
    return (
        <div className="Container">
            {data.map((el , ind) => {
                return(
                <div className="card" key={ind}>
                    <img src={el.image} alt="" className="CardImg"/>
                    <div className="cardTitle">{el.title}</div>
                    <div className="cardDescription">{el.description}</div>
                </div>
                )
            })}
        </div>
    )
}

export default Card