step 1:-
npm install @reduxjs/toolkit react-redux
install @reduxjs/toolkit and react-redux 
these both are different packages

step2:-
Create a Redux Store
Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
configureStore Always take a object

step3:-
Create a Redux State Slice

Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

Example:-

import { createSlice , nanoid } from '@reduxjs/toolkit'

to creating a slice first we have to import createSlice

now we set a initial value
const initialState = {
  value: 0,
}
it can be object that have one value key

const initialState = {}
it can be an object

const initialState = []
it can be an array

const initialState = {
  todo:[
    {

    }
  ]
}
it can also be like this

now we create reducers
before creating them a question occur on everyone mind what is reducers
simply you can say functionality
to update a state we need reducers

export const counterSlice = createSlice({
    name:todo, // it is compalsery
    initialState,// you can pass initial value here or you can declear a initial value here
    reducers:{
        // reducers mean functions(property name and function)
         increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    }

})


now you have to export them

export const {increment , decrement} = counterSlice.actions
export default counterSlice.reducer

createSlice mostly takes an object

choose a name wisely of createSlice because it show us on redux toolkit chrome extention

another Expample :-
export const counterSlice = createSlice({
    name:todo, // it is compalsery
    initialState,// you can pass initial value here or you can declear a initial value here
    reducers:{
       // addTodo: addTodo (if you create a function outside gives it referance)

       addTodo:(state , action)=>{} //it's a syntex you have two parameters here state and action

       state:- it's gives current state
       action:- to perform some functionality on state you need id's of that object you can get id from action
       removeTodo:(state ,action )=>{}


    }

})

now you have to export them

now you have to pass all reducers to store.js file

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

another example

import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer:todoReducer
})

