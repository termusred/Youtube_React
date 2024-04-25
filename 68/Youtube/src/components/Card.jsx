import { useState } from "react"
import "../styles/card.css"
import axios from 'axios';

const Card = () => {
    const [product , setProduct] = useState([])
    function Click() {
        axios.get("https://fakestoreapi.com/products")
            .then((data) => setProduct(data.data))
    }
    return (
        <div className="Container">
            {product.map((el , ind) => {
                return(
                <div className="card" key={ind}>
                    <img src={el.image} alt="" className="CardImg"/>
                    <div className="cardTitle">{el.title}</div>
                    <div className="cardDescription">{el.description}</div>
                </div>
                )
            })}
            <button onClick={Click}>Add</button>
        </div>
    )
}

export default Card