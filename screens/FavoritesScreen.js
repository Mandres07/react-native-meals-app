import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = (props) => {
   const favoritesContext = useContext(FavoritesContext);
   const favoritesMeals = MEALS.filter(item => favoritesContext.ids.includes(item.id));
   if (favoritesMeals.length === 0) {
      return (
         <View style={styles.rootContainer}>
            <Text style={styles.text}>
               You have not favorite meals yet.
            </Text>
         </View>
      );
   }
   return <MealsList meals={favoritesMeals} />;
};

const styles = StyleSheet.create({
   rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
   }
});

export default FavoritesScreen;