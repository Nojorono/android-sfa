import React from 'react';
import {Alert, Text, TouchableOpacity, View} from "react-native";
import {useLoadingStore} from "@/app/store/useLoadingStore";
import Toast from "react-native-toast-message";
import {useAuthStore} from "@/app/store/useAuthStore";

function HomeScreen() {
    const { setLoading } = useLoadingStore();
    const {clearAuth} = useAuthStore();


    const handleLogout = () => {
        Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "Logout",
                onPress: () => {
                    setLoading(true);
                    clearAuth();
                    Toast.show({
                        type: "success",
                        text1: "Success",
                        text2: "Logout Successful",
                    });
                    setTimeout(() => setLoading(false), 1000);
                },
            },
        ]);
    };
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity style={{
                backgroundColor: "blue",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 8,
                alignItems: 'center',
                marginTop: 10,}} onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;