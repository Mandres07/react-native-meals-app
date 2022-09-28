import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
   ids: [],
   addFavorite: (id) => { },
   removeFavorite: (id) => { }
});

export default function FavoritesContextProvider({ children }) {
   const [favorites, setFavorites] = useState([]);

   function addFavorite(id) {
      setFavorites(prevState => [...prevState, id]);
   }

   function removeFavorite(id) {
      setFavorites(prevState => prevState.filter(item => item !== id));
   }
   
   const value = {
      ids: favorites,
      addFavorite,
      removeFavorite
   };

   return (
      <FavoritesContext.Provider value={value}>
         {children}
      </FavoritesContext.Provider>
   );
}
