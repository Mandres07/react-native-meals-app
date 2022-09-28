import { useLayoutEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
   const favoritesContext = useContext(FavoritesContext);
   const mealId = route.params.id;
   const meal = MEALS.find(meal => meal.id === mealId);
   const isFavorite = favoritesContext.ids.includes(mealId);

   function toggleFavoriteMealHandler() {
      if(isFavorite){
         return favoritesContext.removeFavorite(mealId)
      }
      return favoritesContext.addFavorite(mealId);
   }

   useLayoutEffect(() => {
      navigation.setOptions({
         title: meal.title,
         headerRight: () => {
            return <IconButton
               icon={isFavorite ? 'star' : 'star-outline'}
               color='white'
               onPress={toggleFavoriteMealHandler}
            />;
         }
      });
   }, [mealId, navigation, toggleFavoriteMealHandler]);

   return (
      <ScrollView style={styles.container}>
         <Image source={{ uri: meal.imageUrl }} style={styles.image} />
         <Text style={styles.title}>{meal.title}</Text>
         <MealDetails
            textStyle={styles.detailText}
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
         />
         <View style={styles.list}>
            <View style={styles.listContainer}>
               <Subtitle>Ingredients</Subtitle>
               <List data={meal.ingredients} />
               <Subtitle>Steps</Subtitle>
               <List data={meal.steps} />
            </View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      marginBottom: 32
   },
   image: {
      width: '100%',
      height: 300
   },
   title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white'
   },
   detailText: {
      color: 'white'
   },
   list: {
      alignItems: 'center'
   },
   listContainer: {
      width: '80%'
   }
});

export default MealDetailScreen;