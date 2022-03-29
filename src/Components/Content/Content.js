import { useState } from "react"
import "./Content.css"
import Form from "./Form/Form";
import Palette from "./Palette/Palette";
import Price from "./Price/Price";
import Summary from "./Summary/Summary";
import Type from "./Type/Type"

export default function Content()
{
    const [select, onSelect] = useState(1);
    return(
        <section className="content">
            {select === 1 && <Type pageSelector={onSelect}/>}
            {select === 2 && <Palette pageSelector={onSelect}/>}
            {select === 3 && <Price pageSelector={onSelect}/>}
            {select === 4 && <Form pageSelector={onSelect}/>}
            {select === 5 && <Summary pageSelector={onSelect}/>}
        </section>
    )
}