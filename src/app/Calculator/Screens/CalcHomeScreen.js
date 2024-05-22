import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import CalcHomeStyle from '../Styles/CalcHomeStyle';
import {useRoute} from '@react-navigation/native';
import UserDetails from './UserDetails';

function CalcHome({navigation}) {
  const route = useRoute(); // hook to access route object
  const {userName} = route.params || {};
  // If route.params is undefined or null, the {} object ensures that userName is assigned an empty object as its default value
  const [display, setDisplay] = useState(0);
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const [calculations, setCalculations] = useState([]);

  const PressNum = value => {
    setDisplay(display === '0' ? value : display + value);
    // if 0 is pressed it shows 0, else 0 is appended to the display
  };

  const PressOperator = operation => {
    setOperand(parseFloat(display)); // current display value converted to a integer number
    setOperator(operation); // sets the operator to the pressed operation
    setDisplay('0'); // resets the display to 0 to prepare for the next number input
  };

  //  neeeed to update
  const calculate = () => {
    const num = parseFloat(display);
    let result;
    switch (operator) {
      case '+':
        result = operand + num;
        setDisplay(result.toString());
        break;
      case '-':
        result = operand - num;
        setDisplay(result.toString());
        break;
      case '*':
        result = operand * num;
        setDisplay(result.toString());
        break;
      case '/':
        result = operand / num;
        setDisplay(result.toString());
        break;
      default:
        result = num;
    }
    const calculationArray = `${operand} ${operator} ${num} = ${result}`;
    setCalculations(prevCalculations => [
      ...prevCalculations,
      calculationArray,
    ]);
    // spread elements of prevCalculations and append calculationArray at the end of the array
  };

  const ClearDisplay = () => {
    setDisplay('0');
    setOperand(null);
    setOperator(null);
  };

  return (
    <View style={CalcHomeStyle.Container}>
      <View>
        <TouchableOpacity
          style={CalcHomeStyle.UserButtonsStyle}
          onPress={() => {
            navigation.push('UserDetails', { showCalculations: calculations, userName:userName });
          }}>
          <Text style={CalcHomeStyle.UserButtonText}>{userName}</Text>
        </TouchableOpacity>
      </View>

      <View style={CalcHomeStyle.ClacDisplay}>
        <Text style={CalcHomeStyle.CalcDisplayText}>{display}</Text>
      </View>

      <View style={CalcHomeStyle.ButtonPosition}>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('7')}>
          <Text style={CalcHomeStyle.CalcButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('8')}>
          <Text style={CalcHomeStyle.CalcButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('9')}>
          <Text style={CalcHomeStyle.CalcButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressOperator('/')}>
          <Text style={CalcHomeStyle.CalcButtonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={CalcHomeStyle.ButtonPosition}>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('4')}>
          <Text style={CalcHomeStyle.CalcButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('5')}>
          <Text style={CalcHomeStyle.CalcButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('6')}>
          <Text style={CalcHomeStyle.CalcButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressOperator('*')}>
          <Text style={CalcHomeStyle.CalcButtonText}>x</Text>
        </TouchableOpacity>
      </View>


      <View style={CalcHomeStyle.ButtonPosition}>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('1')}>
          <Text style={CalcHomeStyle.CalcButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('2')}>
          <Text style={CalcHomeStyle.CalcButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressNum('3')}>
          <Text style={CalcHomeStyle.CalcButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressOperator('-')}>
          <Text style={CalcHomeStyle.CalcButtonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={CalcHomeStyle.ButtonPosition}>
        <TouchableOpacity
          style={CalcHomeStyle.ZeroButtonStyle}
          onPress={() => PressNum('0')}>
          <Text style={CalcHomeStyle.ZeroButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => PressOperator('+')}>
          <Text style={CalcHomeStyle.CalcButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CalcHomeStyle.ClacButtonsStyle}
          onPress={() => calculate('=')}>
          <Text style={CalcHomeStyle.CalcButtonText}>=</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={CalcHomeStyle.CButtonStyle}
          onPress={() => ClearDisplay()}>
          <Text style={CalcHomeStyle.CButtonText}>C</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('SignIn');
          }}
          style={CalcHomeStyle.GoBackButton}>
          <Text style={CalcHomeStyle.GoBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CalcHome;