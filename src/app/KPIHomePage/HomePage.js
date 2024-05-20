import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import MenuOutline from '../../Images/MenuOutline';
import NotifyBell from '../../Images/NotifyBell';
import KPIStyles from './KPIStyles';
import Vector from '../../Images/Vector';
import GreenUpArrow from '../../Images/GreenUpArrow';
import RedDownArrow from '../../Images/RedDownArrow';

function HomePage() {
  // mapped buttons
  const MappedButtons = [
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
    {text: 'Efficiency', num: 999},
  ];

  const cardRow1 = [
    {
      date: '01 Jan 2022',
      hour: '1st Hr.',
      productivityStart: 'Productivity in',
      productivityNum: 20,
      productivityEnd: 'Line',
      lineText: 'Line-',
      lineUp: 99,
      lineDown: 99,
      noProdText: 'No Prod-',
      noProdNum: 99,
      highProdText: 'High-',
      highProdNum: 99,
      normalProdText: 'Normal-',
      normalProdNum: 99,
      lowProdText: 'Low-',
      lowProdNum: 99,
      kanban: 'Kanban',
      requisition: 'Requisition',
      newText: 'New-',
      newNum: 99,
      warningText: 'Warning',
      warningNum: 99,
      dangerText: 'Danger',
      dangerNum: 99,
    },
    {
      date: '01 Jan 2022',
      hour: '1st Hr.',
      productivityStart: 'Productivity in',
      productivityNum: 20,
      productivityEnd: 'Line',
      lineText: 'Line-',
      lineUp: 99,
      lineDown: 99,
      noProdText: 'No Prod-',
      noProdNum: 99,
      highProdText: 'High-',
      highProdNum: 99,
      normalProdText: 'Normal-',
      normalProdNum: 99,
      lowProdText: 'Low-',
      lowProdNum: 99,
      kanban: 'Kanban',
      requisition: 'Requisition',
      newText: 'New-',
      newNum: 99,
      warningText: 'Warning',
      warningNum: 99,
      dangerText: 'Danger',
      dangerNum: 99,
    },
    {
      date: '01 Jan 2022',
      hour: '1st Hr.',
      productivityStart: 'Productivity in',
      productivityNum: 20,
      productivityEnd: 'Line',
      lineText: 'Line-',
      lineUp: 99,
      lineDown: 99,
      noProdText: 'No Prod-',
      noProdNum: 99,
      highProdText: 'High-',
      highProdNum: 99,
      normalProdText: 'Normal-',
      normalProdNum: 99,
      lowProdText: 'Low-',
      lowProdNum: 99,
      kanban: 'Kanban',
      requisition: 'Requisition',
      newText: 'New-',
      newNum: 99,
      warningText: 'Warning',
      warningNum: 99,
      dangerText: 'Danger',
      dangerNum: 99,
    },
  ];

  return (
    <View style={KPIStyles.Container}>
      <View style={KPIStyles.HeaderDesign}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MenuOutline />
          <Text style={KPIStyles.HeaderText}>Home</Text>
        </View>
        <View>
          <NotifyBell />
        </View>
      </View>

      <View style={KPIStyles.LowerHeader}>
        <View style={{flexDirection: 'column'}}>
          <Text style={KPIStyles.OrganiztionText}>Organization</Text>
          <Text style={KPIStyles.UnitText}>
            4A<Text style={KPIStyles.vertical}> | </Text>Unit 1
          </Text>
        </View>
        <View>
          <TouchableOpacity style={KPIStyles.KPITopButton}>
            <Vector />
            <Text style={KPIStyles.KPITopButtonText}>KPI</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{height: 300}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          numColumns={3}
          data={MappedButtons}
          renderItem={({item}) => (
            <TouchableOpacity style={KPIStyles.MappedButtonStyle}>
              <Text style={KPIStyles.MappedButtonText}>{item.text}</Text>
              <Text style={KPIStyles.MappedButtonNum}>{item.num}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 15}}
        data={cardRow1}
        renderItem={({item}) => (
          <View style={KPIStyles.CardStyle}>
            <View style={KPIStyles.CardHeading}>
              <Text>{item.date}</Text>
              <Text>{item.hour}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{item.productivityStart}</Text>
              <Text style={{marginRight: 22}}>{item.productivityNum}</Text>
              <Text style={{marginRight: 22}}>{item.productivityEnd}</Text>
              <GreenUpArrow />
              <Text style={KPIStyles.LineUpStyle}>{item.lineText}</Text>
              <Text>{item.lineUp}</Text>
              <RedDownArrow />
              <Text style={KPIStyles.LineDownStyle}>{item.lineText}</Text>
              <Text>{item.lineDown}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={KPIStyles.NoProdBox}>
                <Text style={KPIStyles.NoProdText}>{item.noProdText}</Text>
                <Text style={KPIStyles.NoProdText}>{item.noProdNum}</Text>
              </View>
              <View style={KPIStyles.HighProdBox}>
                <Text style={KPIStyles.HighProdText}>{item.highProdText}</Text>
                <Text style={KPIStyles.HighProdText}>{item.highProdNum}</Text>
              </View>
              <View style={KPIStyles.NormalProdBox}>
                <Text style={KPIStyles.NormalProdText}>{item.normalProdText}</Text>
                <Text style={KPIStyles.NormalProdText}>{item.normalProdNum}</Text>
              </View>
              <View style={KPIStyles.LowProdBox}>
                <Text style={KPIStyles.LowProdText}>{item.lowProdText}</Text>
                <Text style={KPIStyles.LowProdText}>{item.lowProdNum}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default HomePage;
