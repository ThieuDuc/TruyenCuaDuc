import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Trangchu from './src/pages/HomePage/Trangchu';
import Search from './src/pages/Searchs/Search';
import Library from './src/pages/Library/Library';
import Account from './src/pages/Acount/Account';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            // screenOptions={{ headerShown: false }}
            activeColor="#e91e63"
            inactiveColor="#ffffff"
            labelStyle={{ fontSize: 12 }}
            barStyle={{
                backgroundColor: "#111111"
            }}
            initialRouteName='Home'
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: 'Truyện Tranh',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="palette-advanced" color={color} size={26} />
                    ),
                }}
                component={Trangchu} />
            <Tab.Screen
                name="Search"
                options={{
                    tabBarLabel: 'Tìm Kiếm',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="card-search" color={color} size={26} />
                    ),
                }}
                component={Search} />
            <Tab.Screen
                name="Library"
                options={{
                    tabBarLabel: 'Tủ sách',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book" color={color} size={26} />
                    ),
                }}
                component={Library} />
            <Tab.Screen
                name="Account"
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
                component={Account} />
        </Tab.Navigator>
    );
}