import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
   return (
      <View style={styles.container}>
         <Pressable
            onPress={onPress}
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => pressed ? styles.buttonPressed : null}>
            <View style={styles.innerContainer}>
               <View>
                  <Image source={{ uri: imageUrl }} style={styles.image} />
                  <Text style={styles.title}>{title}</Text>
               </View>
               <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
         </Pressable>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      margin: 16,
      borderRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      backgroundColor: 'white',
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 5,
   },
   innerContainer: {
      borderRadius: 8,
      overflow: 'hidden'
   },
   buttonPressed: {
      opacity: 0.5
   },
   image: {
      width: '100%',
      height: 200,
   },
   title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      margin: 18
   }
});

export default MealItem;