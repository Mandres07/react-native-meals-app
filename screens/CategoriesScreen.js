import { FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
   // const navigation = useNavigation(); => alternative using useNavigation hook
   function pressHandler(id) {
      navigation.navigate('MealsOverview', { categoryId: id });
   }

   function renderCategoryItem(itemData) {
      return <CategoryGridTile
         title={itemData.item.title}
         color={itemData.item.color}
         onPress={() => pressHandler(itemData.item.id)}
      />;
   }

   return <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
   />;
};

export default CategoriesScreen;