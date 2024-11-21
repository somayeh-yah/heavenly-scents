import { createContext, useState } from "react"
import {productData} from "../productsData";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i=1 ; i < productData.length + 1 ; i++ ){
        cart[i] = 0;
    }
    return cart;
};
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [sizeOptions, setSizeOptions] = useState({});
    
    const addToCart = (itemId) => {
       setCartItems(prev => ({...prev,[itemId]:prev[itemId] +1 }));
    };

    const handelProdectSize = (itemId, size) => {
      setSizeOptions(prev => ({...prev, [itemId]:size}))
    }

   

      const totalItemsInCart = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
      const updateCartItemCount = (newItems, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: newItems}));
      }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1 }));
     };
 
     const calcTotalSum = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const product = productData.find((param) => param.id === parseInt(itemId));
            return product ? total + product.price * cartItems[itemId]: total;
        }, 0);
    };


     const contextValue = {cartItems, addToCart, removeFromCart, calcTotalSum,updateCartItemCount,  totalItemsInCart, sizeOptions, handelProdectSize}
     return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
}
