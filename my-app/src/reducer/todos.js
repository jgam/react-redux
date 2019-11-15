import todoAction from '../action/index';  
import { COMPLETE_TODO } from '../action/todo';
const {ADD_TODO} = todoAction.todo;

const todo = (state, action) => {  
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false
      };
    case COMPLETE_TODO:
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        complete: !state.complete
      };
    default:
      return state;
  }
}


const todos = (state = [], action) => {  
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, todo(undefined, action)
      ];
    case COMPLETE_TODO:
      return state.map(t=> todo(t, action));
    default:
      return state;
  }
}

export default todos;