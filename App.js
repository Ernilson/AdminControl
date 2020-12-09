import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/pages/Home';
import Boletim from './src/pages/Boletim';
import Cantina from './src/pages/Cantina';
import Lista_Suplicas from './src/pages/Lista_Suplicas';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />        
        <Tab.Screen name="Boletim" component={Boletim} />
        <Tab.Screen name="Lista_Suplicas" component={Lista_Suplicas} />
        <Tab.Screen name="Cantina" component={Cantina} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


