import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider } from 'react-native-paper';
import Home from "./src/screens/Home"
import History from "./src/screens/History"
import Bookmarks from "./src/screens/Bookmarks"
import Setting from "./src/screens/Settings"
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Drawer = createDrawerNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='History' component={History} />
          <Drawer.Screen name='Bookmarks' component={Bookmarks} />
          <Drawer.Screen name='Settings' component={Setting} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

