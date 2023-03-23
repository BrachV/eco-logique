import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import type { StackNavigationOptions } from '@react-navigation/stack';

// Screens
import HomeScreen from './pages/AccueilScreen';
import PreviewScreen from './pages/PrevisionScreen';
import SettingsScreen from './pages/SettingsScreen';
import FaqScreen from './pages/FaqScreen';

// Screen names
const homeName = "Home";
const previewName = "Preview";
const faqName = "FAQ";
const settingsName = "Settings";

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: '#40903f',
                tabBarInactiveTintColor: '#000000',
                tabBarLabelStyle: [
                    {
                        fontSize: 16,
                        margin: 0,
                        padding: 0,
                    }
                ],
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;
                    let rn = route.name;
        
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === previewName) {
                        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                        

                    } else if (rn === faqName) {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';

                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';

                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                })}>
                
            
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={previewName} component={PreviewScreen} />
                <Tab.Screen name={faqName} component={FaqScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}