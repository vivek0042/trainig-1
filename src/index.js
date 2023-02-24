import react,{Component} from 'react'

import ReactDOM, { render } from 'react-dom';

import Home  from '../src/pages/Home'

import Counter from '../src/pages/Counter'

import About from '../src/pages/About'

//for practical 5;-
// class index extends Component{
  // constructor(props){
  //   super(props)
      

  //   this.state={
  //     isLoggedIn:true
  //   }
  //   }
  //   change(){
  //     let message
  //     if(this.state.isLoggedIn){
  //      message=<div><Counter/></div>
  //     }
  //     else{
  //      message=<div><About/></div>
  //     }
  //   }

//   render(){
//     <button>click me</button>
//   return(
//     <div>
      
//       <button onClick={()=><Counter/>}>Click me</button>
//     </div>
      
//     )
//   }



// }

var change=()=>{
  return <About/>


}





// for practical 1-4
ReactDOM.render(
  
  <div className='v1'>
    <Home/>
    <button onClick={change}>change</button>
    
    
    {/* <h1>hello sir</h1> */}
  </div>,
  document.getElementById('root')
)