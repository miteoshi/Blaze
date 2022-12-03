import { createContext, ReactNode, useContext,useState } from "react";

//components
import {MyCart} from '../components/MyCart'
type CartContextProps = {
    children: ReactNode
}

type Cart = {
    id:number
    quantity:number
}

type CartContextFunctions = {
    openCart: () => void
    closeCart: () => void
    cartQuantity:number
    cartItems: Cart[]
    getItemQuantity: (id:number) => number
    increaseCart: (id:number) => void
    decreaseCart: (id:number) => void
    removeFromCart:(id:number) => void
}
 
const CartContext = createContext({} as CartContextFunctions)

 export function useCartContext(){
    return useContext(CartContext)
 }

 
 export function CartProvider({children}:CartContextProps){
     const [cartItems,setCartItems] = useState<Cart[]>([])
     const[isOpen,setIsOpen] = useState<Boolean>(false)

     const getItemQuantity = (id:number) => {
        return cartItems.find(x => x.id == id)?.quantity || 0
     }

     const increaseCart = (id:number) => {
        setCartItems(currItems => {
            if(currItems.find(x => x.id == id) == null){
                return [...currItems, {id,quantity:1}]
            }else{
                return currItems.map(x => {
                    if(x.id == id){
                        return {...x, quantity:x.quantity + 1}
                    }
                    else{
                        return x
                    }
                })
            }
        })
     }

     const decreaseCart = (id:number) => {
        setCartItems((currItems) => {
          if (currItems.find((x) => x.id == id)?.quantity === 1) {
            return currItems.filter(x => x.id != id)
          } else {
            return currItems.map((x) => {
              if (x.id == id) {
                return { ...x, quantity: x.quantity - 1 };
              } else {
                return x;
              }
            });
          }
        });
     }

     const removeFromCart = (id:number) => {
        setCartItems((currItems) => {
            return currItems.filter(x => x.id != id)
        })
     }

     const cartQuantity = cartItems.reduce((prev,curr) => 
        prev + curr.quantity,0
     )


     const openCart = () => setIsOpen(true)

     const closeCart = () => setIsOpen(false)

    return (
      <CartContext.Provider
        value={{
          openCart,
          closeCart,
          cartQuantity,
          cartItems,
          getItemQuantity,
          increaseCart,
          decreaseCart,
          removeFromCart,
        }}
      >
        {children}
        <MyCart isOpen = {isOpen} />
      </CartContext.Provider>
    );
 }