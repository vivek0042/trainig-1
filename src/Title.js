import react from 'react'
// import List from './List'

const Title=(props)=>{
      const { arr } = props;
    
      return (
        <ul>
          {arr.map((object) => (
            <li key={object.id}>
              <h2>{object.title}</h2>
              <p>{object.description}</p>
            </li>  
            
          ))}
        </ul>
      );
    }
    
    
export default Title