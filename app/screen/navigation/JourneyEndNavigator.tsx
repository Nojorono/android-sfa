import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from "react-native";
import JourneyEndScreen from "@/app/screen/menu/journey_end/JourneyEndScreen";

export type JourneyEndParamList = {
    JourneyEnd: undefined;
};
const Stack = createStackNavigator<JourneyEndParamList>();

const CallPlanNavigator = () => (
    <Stack.Navigator
        initialRouteName="JourneyEnd"
    >
        <Stack.Screen
            name="JourneyEnd"
            component={JourneyEndScreen}
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
