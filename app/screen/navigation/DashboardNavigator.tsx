import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from "react-native";
import DashboardScreen from "@/app/screen/menu/dashboard/DashboardScreen";

export type DashboardParamList = {
    Dashboard: undefined;
    ReportAwal:undefined;
    ReportAkhir:undefined;
};
const Stack = createStackNavigator<DashboardParamList>();

const CallPlanNavigator = () => (
    <Stack.Navigator
        initialRouteName="Dashboard"
    >
        <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
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
    </Stack.Navigator>
);

export default CallPlanNavigator;
