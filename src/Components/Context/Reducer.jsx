 const Reducer = (state,action) => {
    // console.log(state);
    console.log(action);
    if(action.type==="ADD"){
        const existProductInCart=state.cartData.some((product) =>product.id ===action.payload.id)
        // console.log(existProductInCart);

        if(existProductInCart){
            const updateCartProduct=state.cartData.map((product) =>{
                // console.log(product);
           return product.id === action.payload.id ? {...product,qty:product.qty+1}:product              
        })
        console.log(updateCartProduct);
       return {
        ...state,
        cartData:updateCartProduct
       }
    }else{
      
        return {
            cartData:[...state.cartData,{...action.payload,qty:1}]
        }
      }   
    }

    if(action.type==="DELETE"){
        return {
           
            cartData:state.cartData.filter((item) =>{
              return item.id!==action.payload
            })
        }
    }

    if(action.type==="INCREMENT"){
        return {
            cartData:state.cartData.filter((item) =>{
              return item.id ===action.payload ? (item.qty+=1):item
            })
        }
    }

    // if(action.type==="DECREMENT"){
    //     return {
    //         cartData:state.cartData.filter((item) =>{
    //             return item.id ===action.payload ? (item.qty-=1):item
    //         })
    //     }
    // }
    if (action.type === "DECREMENT") {
        return {
            cartData: state.cartData.map(item => {
                if (item.id === action.payload && item.qty > 1) {
                    return { ...item, qty: item.qty - 1 };
                } else {
                    return item;
                }
            })
        };
    }
}


export default Reducer;