
export function languageReducer(state,action){

    if(action.type === 'langChange'){
        return {
            name: action.newName,
            age : state.age
        }
    }
    else if(action.type === 'ageChange'){
         return {
            age: action.newAge,
            name : state.name
        }
    }

    throw new Error("Unknown action type");
    
}