import { createContext , useContext } from "react";

// creating a context object
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addTodo: ()=>{},
    updateTodo: (id , todo)=>{},
    deleteTodo: (id )=>{},
    toggleComplete:(id, )=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider