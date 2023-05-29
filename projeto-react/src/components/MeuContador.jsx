import { useState } from "react"


export default function MeuContador() {
    
    const [Contador, setContador] = useState(0)

    
    function aumentar(){
        setContador(Contador + 1)
    }
    return (
        <div>
            <h1>Meu contador</h1>
            <h3>{Contador}</h3>
            <button onClick={aumentar}>aumentar</button>
        </div>
    )
}