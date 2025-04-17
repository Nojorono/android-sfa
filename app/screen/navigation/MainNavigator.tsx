import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "@/app/screen/HomeScreen";
import {Text, View} from "react-native";
import {NavigatorScreenParams} from "@react-navigation/native";
import CallPlanNavigator, {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
import DashboardNavigator, {DashboardParamList} from "@/app/screen/navigation/DashboardNavigator";

export type MainTabParamList = {
    Home: undefined;
    CallPlanStack:NavigatorScreenParams<CallPlanParamList>;
    DashboardStack:NavigatorScreenParams<DashboardParamList>;

};
const Stack = createStackNavigator<MainTabParamList>();

const MainNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerTitle: () => (
                    <View style={{
                        width:'100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{fontSize:16}}>Sofia</Text>
                        <Text style={{fontSize:16, color:'#666'}}>25 Nov 2023</Text>
                    </View>
                ),
            }}
            />
        <Stack.Screen
            name="CallPlanStack"
            component={CallPlanNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="DashboardStack"
            component={DashboardNavigator}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);



export default MainNavigator;
