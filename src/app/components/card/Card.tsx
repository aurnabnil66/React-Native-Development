import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import styles from './styles'

const Card = () => {
  return (
    <View style={{padding:20, backgroundColor:'white'}}>
        <Text style={{color:'black', textAlign:'center', paddingBottom:10}}>Card 1</Text>
    {/* buttons in react native */}
   {/* <Pressable><Text>This is Pressable</Text></Pressable> */}
   <TouchableOpacity style={styles.buttonStyle}><Text style={styles.buttonText}>TouchableOpacity</Text></TouchableOpacity>
   {/* <TouchableHighlight><Text>Touchable Highlight</Text></TouchableHighlight> */}

    </View>
  );
}

export default Card
