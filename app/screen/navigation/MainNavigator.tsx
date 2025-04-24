import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "@/app/screen/HomeScreen";
import {Text, View} from "react-native";
import {NavigatorScreenParams} from "@react-navigation/native";
import CallPlanNavigator, {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
import DashboardNavigator, {DashboardParamList} from "@/app/screen/navigation/DashboardNavigator";
import UtilizeNavigator, {UtilizeParamList} from "@/app/screen/navigation/UtilizeNavigator";
import JourneyEndNavigator, {JourneyEndParamList} from "@/app/screen/navigation/JourneyEndNavigator";
import VisitNavigator, {VisitParamList} from "@/app/screen/navigation/VisitNavigator";

export type MainTabParamList = {
    Home: undefined;
    CallPlanStack:NavigatorScreenParams<CallPlanParamList>;
    DashboardStack:NavigatorScreenParams<DashboardParamList>;
    UtilizeStack:NavigatorScreenParams<UtilizeParamList>;
    JourneyEndStack:NavigatorScreenParams<JourneyEndParamList>;
    VisitStack:NavigatorScreenParams<VisitParamList>;

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
                        <Text style={{fontSize:16}}>Sofia Latjuba</Text>
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
        <Stack.Screen
            name="UtilizeStack"
            component={UtilizeNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="JourneyEndStack"
            component={JourneyEndNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="VisitStack"
            component={VisitNavigator}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);



export default MainNavigator;
