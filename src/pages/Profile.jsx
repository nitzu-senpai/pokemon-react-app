import React,{useContext} from 'react'
import FavPoke from '../components/FavPoke'
import  FavouriteContext from '../contexts/UserContext'
const Profile = () => {
  const[favList]=useContext(FavouriteContext)
  return (
    <div>
      <h4>My Favourites ❤</h4>
      <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
      {
        [...favList].map((poke)=>{
          return(
            <FavPoke name={poke.name} id={poke.id} key={poke.id} exp={poke["base_experience"]}/>
          )
        })
      }
    </div>  
    </div>
  )
}

export default Profile