import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue 
{

    basket: Basket | null;
    setBasket: (basket: Basket) => void;
    removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function useStoreContext() {
    const context = useContext(StoreContext);

    if (context === undefined){
        throw Error('Oops - we do not seem to be inside the provider');
    }
    
    return context;
}

export function StoreProvider({children}: PropsWithChildren<any>)
{
    const [basket, setBasket] = useState<Basket | null>(null);

    function removeItem(productId: number, quantity: number) {
        
        if (!basket) return;
        const items = [...basket.items];
    }
}