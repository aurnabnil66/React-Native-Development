import React, { useEffect } from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import UserStyle from '../Styles/UserStyle';

function UserDetails() {
  const route = useRoute();
  const {showCalculations} = route.params || {};
  const {userName} = route.params || {};
//   useEffect(()=>{
//     console.log(route.params);
//   })
  return (
    <View style={UserStyle.Container}>
      <View>
        <View style={UserStyle.CalculationBox}>

            {/* need to update */}
         <View style={{flexDirection:'row'}}>
         <Text style={UserStyle.CalculationHeading}>Calculations of</Text>
          <Text style={UserStyle.CalculationHeadingUserName}>{userName}</Text>
         </View>
      { showCalculations?.length > 0 &&
           <ScrollView showsVerticalScrollIndicator={false}> 
           {Array.isArray(showCalculations) &&
           showCalculations.map((calculation, index) => (
             <Text style={UserStyle.CalculationBoxText} key={index}>
               {calculation}
             </Text>
           ))}
           </ScrollView>
      }
        </View>
      </View>
    </View>
  );
}

export default UserDetails;
