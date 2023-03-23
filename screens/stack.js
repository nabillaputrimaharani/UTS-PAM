import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home'
import Buat from './buat-tiket'
import Tiket from './konfirmasi-tiket'
import Pesanan from './pesanan-saya';
const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  };
  render(){
    return (
      
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Buat" component={Buat}/>
          <Stack.Screen name="Tiket" component={Tiket}/>
          <Stack.Screen name="Pesanan" component={Pesanan}/>
        </Stack.Navigator>

    )
  }
}

export default App;