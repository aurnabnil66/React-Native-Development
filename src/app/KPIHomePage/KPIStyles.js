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
    //backgroundColor: '#9b59b6',
    height: 140,
    width: 347,
    borderRadius: 10,
    marginTop: 12,
    padding: 12
  },
  CardHeading: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    marginTop: -5,
    justifyContent: 'space-between',
  },
  CardHeadingText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4C4C4C',
  },
  HorizontalLine: {
    height: 1,
    width: 315,
    backgroundColor: '#CECECE',
    alignSelf: 'center',
    marginTop: 3
  },
  ProductivityText: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '400',
    color: '#373737',
  },
  ProductivityNum: {
    marginRight: 22,
    marginTop: 3,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#373737',
    left: 3
  },
  ProductivityLine: {
    marginRight: 32,
    right: 22,
    marginTop: 3,
    fontSize: 14,
    fontWeight: '400',
    color: '#373737',
    right: 16
  },
  LineUpStyle:{
    color: '#22B14C',
    fontSize: 14,
    fontWeight: '700'
  },
  LineUpNum: {
    color: '#22B14C',
    right: 5,
    fontSize: 14,
    fontWeight: '700',
  },
  LineVertical: {
    fontSize: 14, 
    fontWeight: '400',
    left: 9
  },
  LineDownStyle:{
    color: '#EE1C24',
    fontSize: 14,
    fontWeight: '700',
    left: 2
  },
  LineDownNum: {
    color: '#EE1C24',
    right: 5,
    fontSize: 14,
    fontWeight: '700',
    left: 2
  },
  NoProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#4C4C4C',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3,
    opacity:0.3,
  },
  NoProdText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#4C4C4C',
    marginTop: 2
  },
  HighProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#22B14C',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  HighProdText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#22B14C',
    marginTop: 2
  },
  NormalProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#DAB600',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  NormalProdText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#DAB600',
    marginTop: 2
  },
  LowProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#EE1C24',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  LowProdText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#EE1C24',
    marginTop: 2
  },
  NewProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#4C4C4C',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  NewProdText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#4C4C4C',
    marginTop: 2
  },
  WarningProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#DAB600',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  WarningProdText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#DAB600',
    marginTop: 2
  },
  LowProdBox2: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#EE1C24',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  BlankProdBox: {
    flexDirection: 'row',
    height: 23,
    width: 78,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    opacity:0.3,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3
  },
  kanbanText: {
    color: '#373737', 
    fontSize: 14, 
    fontWeight: '400',
    marginTop: 2
  },
  secondVerticalLine:{
    fontSize: 14, 
    fontWeight: '400',
    marginRight: 220,
    left: 4,
    marginTop: 2
  },
  RequisitionText: {
    color: '#373737', 
    fontSize: 14, 
    fontWeight: '400',
    right: 212,
    marginTop: 2
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontSize: 16,
    color: '#4C4C4C'
  },
  checkboxHorizontal:{
    height: 1,
    width: 345,
    backgroundColor: '#CECECE',
    alignSelf: 'center',
    marginTop: 3
  },
  BackButton: {
    width: 218,
    height: 59,
    backgroundColor: '#4C4C4C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 60
  },
  BackButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 6,
  },
});

export default KPIStyles;   
