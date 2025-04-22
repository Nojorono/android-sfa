import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CallPlanScreen from "@/app/screen/menu/CallPlan/CallPlanScreen";
import {Text, View} from "react-native";
import UtilizeScreen from "@/app/screen/menu/utilize/UtilizeScreen";

export type UtilizeParamList = {
    Utilize: undefined;
    ReportKas:undefined;
    ReportBtb:undefined;
};
const Stack = createStackNavigator<UtilizeParamList>();

const UtilizeNavigator = () => (
    <Stack.Navigator
        initialRouteName="Utilize"
    >
        <Stack.Screen
            name="Utilize"
            component={UtilizeScreen}
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

export default UtilizeNavigator;
