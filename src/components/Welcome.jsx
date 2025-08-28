import { useReducer }  from 'react'
import { languageReducer } from '../reducer/App';

const initialState = {
    name: 'React',
    age: 0
}

function Welcome() {

  const [state, dispatch] = useReducer(languageReducer, initialState) ;

  function handleNameChange(e){
    dispatch({newName: e.target.value,type: 'langChange'})
  }

  function handleAgeChange(e){
     dispatch({ newAge: e.target.value, type: "ageChange" });
  }
  return (
    <div className="flex gap-3 flex-col">
      <label>Name</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleNameChange}
      />
      <br></br>
      <h1>Your language {state.name}</h1>
      <label>age</label>
      <input
        type="number"
        className="w-full p-2 border border-gray-300 rounded"
        onChange={handleAgeChange}
      />
      <h1>Your age {state.age}</h1>
    </div>
  );
}

export default Welcome