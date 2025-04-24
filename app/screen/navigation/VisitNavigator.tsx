import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CallPlanScreen from "@/app/screen/menu/callplan/CallPlanScreen";
import {Text, View} from "react-native";
import JourneyEndScreen from "@/app/screen/menu/journey_end/JourneyEndScreen";
import VisitScreen from "@/app/screen/menu/visit/VisitScreen";

export type VisitParamList = {
    Visit: undefined;
};
const Stack = createStackNavigator<VisitParamList>();

const VisitNavigator = () => (
    <Stack.Navigator
        initialRouteName="Visit"
    >
        <Stack.Screen
            name="Visit"
            component={VisitScreen}
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

export default VisitNavigator;
