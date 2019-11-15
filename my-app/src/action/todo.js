//action type
export const COMPLETE_TODO = "COMPLETE_TODO"

//action creators
export function complete({complete, id}){
    return { type: COMPLETE_TODO, complete, id};
}

//create data using reducer. 

//for asynchronous, redux-thunk libraries or react-saga libraries you use

export function addTodo2(text) {  
    return (dispatch) => {
      return fetch("api/add.json").then(
          res => res.json().then(data => dispatch(addTodo(data.status)))
      );
    };
  }