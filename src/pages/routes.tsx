import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { Home } from './home'
import { Passwords } from './password'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                headerShown: false,
            }}
            />
            <Tab.Screen
            name="passwords"
            component={Passwords}
            options={{
                headerShown: false
            }}
            />
        </Tab.Navigator>
    )
}