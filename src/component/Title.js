import react from 'react';
import Home from "../pages/Home";



//this is for task 2:

// const Title = props => {
//     return <h1>Hello {props.name}</h1>
// }  

// this is for task 3:

const Title = props => {
   const {name,title,Desctription} = props
   return <div>
            <h1>{title}</h1>
            <h2>{Desctription}</h2>
           </div> 

}
export default Title