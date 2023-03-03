import react ,{Component}from 'react'
import "../component/Title"
import Title from '../component/Title'

class Home extends Component{
// task 3:-making state for the title.js
    constructor(){
        super()
        this.State={
          title:"Greetings from Tatvasoft",
          Description:"please complete your task"
        }}
    render(){
        return (
        <div>
          <h1>this is home page</h1>
          {/* <h1>{this.State.title}</h1>     */}
          <Title name="virat" title={this.State.title} Description={this.State.Description}/>
          {/* <Title name="srujan"/>    //this is for task2:-
          <Title name="hardik"/> */}
        </div>
        ); 
          
    }
}

export default Home;

