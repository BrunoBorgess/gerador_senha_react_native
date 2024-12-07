import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/password'
import { Tabs } from 'expo-router';

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='home'
            component={Home}
            />
            
            <Tab.Screen
            name='passwords'
            component={Passwords}
            />
        </Tab.Navigator>
    )
}