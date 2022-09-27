import { View, Text, StyleSheet, Pressable, Dimensions, Platform } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
   return (
      <View style={styles.gridItem}>
         <Pressable
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            android_ripple={{ color: '#ccc' }} 
            onPress={onPress}>
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
               <Text style={styles.title}>{title}</Text>
            </View>
         </Pressable>
      </View>
   );
};

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
   gridItem: {
      flex: 1,
      margin: 16,
      height: height / 6,
      borderRadius: 8,
      elevation: 5,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
   },
   button: {
      flex: 1
   },
   buttonPressed: {
      opacity: 0.5
   },
   innerContainer: {
      flex: 1,
      padding: 16,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center'
   },
   title: {
      fontWeight: 'bold',
      fontSize: 18
   }
});

export default CategoryGridTile;