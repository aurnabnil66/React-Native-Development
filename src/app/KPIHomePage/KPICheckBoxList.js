import React from 'react';
import {useState} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import KPIStyles from './KPIStyles';
import CheckBox from '@react-native-community/checkbox';
import HomePage from './HomePage';

function CheckBoxList({navigation}) {

  const checkListItems = [
    {title: 'Average SMV'},
    {title: 'Efficiency'},
    {title: 'Achievement'},
    {title: 'Produce Minutes'},
    {title: 'Target Minutes'},
    {title: 'Hourly Target'},
    {title: 'Cumulative Target'},
    {title: 'Total Production'},
  ];
  return (
    <View style={KPIStyles.Container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={checkListItems}
        renderItem={({item}) => (
          <View style={KPIStyles.Container}>
            <View style={KPIStyles.checkboxContainer}>
              <CheckBox
                style={KPIStyles.checkbox}
              />
              <Text style={KPIStyles.label}>{item.title}</Text>
            </View>
            <View style={KPIStyles.checkboxHorizontal}></View>
          </View>
        )}></FlatList>
      
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('HomePage');
          }}
          style={KPIStyles.BackButton}>
          <Text style={KPIStyles.BackButtonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CheckBoxList;
