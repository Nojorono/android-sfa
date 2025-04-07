import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "@/app/screen/HomeScreen";

export type DashboardStackParamList = {
    Dashboard: undefined;
};

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{ headerTitle: '' }}
            />
        </Stack.Navigator>
    );
};

export default DashboardNavigator;
