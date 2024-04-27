import "../styles/section.css"
import db from "../db.json"
import Card from "./Card"

const Section = () => {
    return (
        <section>
            <Card data={db}/>
            <Card data={db}/>
            <Card data={db}/>
            <Card data={db}/>
            <Card data={db}/>
            <Card data={db}/>
            <Card data={db}/>
        </section>
    )
}

export default Section