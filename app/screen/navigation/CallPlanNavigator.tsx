import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CallPlanScreen from "@/app/screen/menu/CallPlan/CallPlanScreen";
import {Text, View} from "react-native";

export type CallPlanParamList = {
    CallPlan: undefined;
    ReportKas:undefined;
    ReportBtb:undefined;
};
const Stack = createStackNavigator<CallPlanParamList>();

const CallPlanNavigator = () => (
    <Stack.Navigator
        initialRouteName="CallPlan"
        // screenOptions={{
        //     headerShown: false
        // }}
    >
        <Stack.Screen
            name="CallPlan"
            component={CallPlanScreen}
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
        {/*<Stack.Screen*/}
        {/*    name="ReportKas"*/}
        {/*    component={CallPlanScreen}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*    name="ReportBtb"*/}
        {/*    component={CallPlanScreen}*/}
        {/*/>*/}
    </Stack.Navigator>
);

export default CallPlanNavigator;
