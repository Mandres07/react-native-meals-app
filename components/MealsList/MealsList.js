import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ meals }) => {
   const navigation = useNavigation();
   
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

export default MealsList;