// import React, { useEffect, useState } from 'react'
import React, {useContext, useEffect, useRef} from "react"
import { context } from "../index"

const Row=()=>{

    const data = useContext(context)
   
    const customElement = useRef(null)

    useEffect(()=>{
        console.log(customElement.current)
    })

return(
    <div ref={customElement}>{data}</div>
)
}

const Home = () => {
    // const [a, setA] = useState(0)
    // // const increment = () => {
    // //     setA(a + 1);

    // // }
    // // const decrement = () => {
    // //     setA(a - 1);

    // // }

    // useEffect(()=>{
    //    console.log("showing effect") 
    // },[a])

    return (
        // <>
        //     <button onClick={()=>setA(a + 1)}>Add</button>
        //     <p>{a}</p>
        //     <button onClick={()=>setA(a - 1)}>Minus</button>
        // </>

        <>
        <Row/>
        
        </>
    )
}

export default Home