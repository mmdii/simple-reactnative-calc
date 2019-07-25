import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';



class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render(){
    return (
      <View  style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" />
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation:{
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',

  },
  row: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText:{
    fontSize: 24,
    color: 'white'
  }
})

export default App;
