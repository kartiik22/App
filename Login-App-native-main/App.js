// App.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      <Navbar />
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName={token ? "Home" : "Login"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

export default App;