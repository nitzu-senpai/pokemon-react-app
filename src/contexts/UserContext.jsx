import { createContext,useState } from "react";

const FavouriteContext =createContext({})
export const FavouriteProvider =({children})=>{
    const [favList,setFavList]=useState(new Set())
    return(
        <FavouriteContext.Provider value={[favList,setFavList]}>
            {children}
        </FavouriteContext.Provider>
    )
}


export default FavouriteContext;