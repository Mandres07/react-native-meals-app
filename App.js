import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <>
         <StatusBar style='light' />
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
               headerStyle: { backgroundColor: '#351401' },
               headerTintColor: 'white',
               contentStyle: { backgroundColor: '#493225' }
            }}>
               <Stack.Screen
                  name='MealsCategories'
                  options={{ title: 'Categories' }}
                  component={CategoriesScreen}
               />
               <Stack.Screen
                  name='MealsOverview'
                  // options={({ route, navigation }) => {
                  //    const catId = route.params.categoryId;
                  //    return { title: catId }
                  // }} => one way of adding dynamic title 
                  component={MealsOverviewScreen}
               />
               <Stack.Screen
                  name='MealDetail'
                  component={MealDetailScreen}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}
