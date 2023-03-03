import react from 'react'
import Title from './Title'

const List=()=>{

const arr=[{
        id:1,
        title:"vivek",
        description:"hii"
    },
    {
        id:2,
        title:"ganshayam",
        description:"hello",
    },
    {
        id:3,
        title:"srujan",
        description:"hi hello",

    }
]

    return(
        <>
            <Title arr={arr}/>  
        </>
    )
}    
export default List