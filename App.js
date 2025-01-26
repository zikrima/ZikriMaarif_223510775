import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native';
import { Card } from 'react-native-elements';

// Membuat stack navigator
const Stack = createStackNavigator();

// Halaman pertama
function HomeScreen({ navigation }) {
  return (
    <Card>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Selamat datang di halaman utama!</Text>
      <Button
        title="Ke Halaman Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </Card>
  );
}

// Halaman kedua (Detail)
function DetailScreen() {
  return (
    <Card>
      <Text style={{ fontSize: 20 }}>Ini adalah halaman detail.</Text>
    </Card>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
