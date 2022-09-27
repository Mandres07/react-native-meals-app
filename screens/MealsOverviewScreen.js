import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
// import { useRoute } from '@react-navigation/native';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
   // const route = useRoute(); => alternative using useRoute hook
   const categoryId = route.params.categoryId;
   const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

   useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
      navigation.setOptions({
         title: categoryTitle
      });
   }, [categoryId, navigation]);

   function pressHandler(id) {
      navigation.navigate('MealDetail', { id });
   }

   function renderMealItem(itemData) {
      const { id, title, imageUrl, duration, complexity, affordability } = itemData.item;
      return <MealItem
         title={title}
         imageUrl={imageUrl}
         duration={duration}
         complexity={complexity}
         affordability={affordability}
         onPress={() => pressHandler(id)}
      />;
   }

   return (
      <View style={styles.container}>
         <FlatList
            data={meals}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16
   }
});

export default MealsOverviewScreen;