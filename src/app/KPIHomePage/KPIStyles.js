import React from 'react';
import {StyleSheet} from 'react-native';

const KPIStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  HeaderDesign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: 2,
    marginLeft: 115,
  },
  LowerHeader: {
    flexDirection: 'row',
    padding: 15,
    right: 10,
    justifyContent: 'space-between',
  },
  OrganiztionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#949494',
  },
  UnitText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },
  vertical: {
    color: '#F84646',
    borderWidth: 1,
  },
  KPITopButton: {
    backgroundColor: '#4C4C4C',
    color: '#fff',
    height: 44,
    width: 84,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 14
  },
  KPITopButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  MappedButtonStyle: {
    height: 76,
    width: 111,
    borderRadius: 16,
    backgroundColor: '#4C4C4C',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 5,
  },
  MappedButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  MappedButtonNum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  CardStyle: {
    backgroundColor: '#F8F8F8',
    height: 140,
    width: 347,
    borderRadius: 10,
    marginTop: 12
  },
  CardHeading: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: '400',
    color: '#4C4C4C',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 4,
    justifyContent: 'space-between',
  },
  LineUpStyle:{
    color: '#22B14C',
    fontSize: 12,
    fontWeight: '700'
  },
  LineDownStyle:{
    color: '#EE1C24',
    fontSize: 12,
    fontWeight: '700'
  },
  NoProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#4C4C4C',
    textAlign: 'center',
    justifyContent: 'center'
  },
  NoProdText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: 2
  },
  HighProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#22B14C',
    textAlign: 'center',
    justifyContent: 'center'
  },
  HighProdText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: 2
  },
  NormalProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#DAB600',
    textAlign: 'center',
    justifyContent: 'center'
  },
  NormalProdText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: 2
  },
  LowProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#EE1C24',
    textAlign: 'center',
    justifyContent: 'center'
  },
  LowProdText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: 2
  },
});

export default KPIStyles;   
