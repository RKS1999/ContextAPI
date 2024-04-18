import React, { useReducer } from 'react'
import { Context } from '../Context/ContextCreate';
import Reducer from './Reducer';


const intialState = {
    cartData: [],
  };
const ContextState = ({ children }) => {
    
      const [state, dispatch] = useReducer(Reducer, intialState);

      const addProduct= (item)=>{
          // console.log(item);
          dispatch({type:"ADD",payload:item})
       }

      const deleteProduct = (id) => {
        dispatch({type:"DELETE",payload:id})
      }
      const increment = (id) => {
        dispatch({type:"INCREMENT",payload:id})
      }
      const decrement = (id) => {
        dispatch({type:"DECREMENT",payload:id})
      }


  return (
    <Context.Provider
      value={{ ...state, addProduct, deleteProduct,increment,decrement}}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextState