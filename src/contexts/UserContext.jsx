import { createContext,useState } from "react";

export const FavouriteContext =createContext()
export const FavouriteProvider =({children})=>{
    const [favList,setFavList]=useState(new Set())
    return(
        <FavouriteContext.Provider value={[favList,setFavList]}>
            {children}
        </FavouriteContext.Provider>
    )
}