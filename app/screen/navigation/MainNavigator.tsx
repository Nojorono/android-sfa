import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DashboardNavigator from "./DashboardNavigator";

export type MainTabParamList = {
    Home: undefined;
    ProfileStack: undefined;
    ActivityStack: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName: keyof typeof Ionicons.glyphMap = 'alert-circle';

                if (route.name === 'Home') iconName = 'home';
                else if (route.name === 'ProfileStack') iconName = 'person';
                else if (route.name === 'ActivityStack') iconName = 'rocket';

                return <Ionicons name={iconName} size={22} color={color} />;
            },
            tabBarActiveTintColor: '#2F3193',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: 'white',
                paddingTop: 4,
                height: 60,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '700',
                marginBottom: 0,
            },
            headerShown: false,
        })}
    >
        {/*<Tab.Screen*/}
        {/*    name="ActivityStack"*/}
        {/*    component={ActivityNavigator}*/}
        {/*    options={{ title: 'Activity' }}*/}
        {/*/>*/}
        <Tab.Screen
            name="Home"
            component={DashboardNavigator}
            options={{ title: 'Home' }}
        />
        {/*<Tab.Screen*/}
        {/*    name="ProfileStack"*/}
        {/*    component={ProfileNavigator}*/}
        {/*    options={{ title: 'Profile' }}*/}
        {/*/>*/}
    </Tab.Navigator>
);

export default MainNavigator;
