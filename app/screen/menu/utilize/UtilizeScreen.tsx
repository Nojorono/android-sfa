import React from 'react';
import {Alert, StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
import {UtilizeParamList} from "@/app/screen/navigation/UtilizeNavigator";
import {navigateToStack} from "@/util/helper";
import Toast from "react-native-toast-message";
import {useLoadingStore} from "@/store/useLoadingStore";
import {useAuthStore} from "@/store/useAuthStore";
import DashboardStyles from "@/util/DashboardStyles";
import GlobalStyles from "@/util/GlobalStyles";

type NavigationProp = StackNavigationProp<UtilizeParamList, 'Utilize'>;
export default function UtilizeScreen() {

    const styles = GlobalStyles()
    const {setLoading} = useLoadingStore();
    const {clearAuth} = useAuthStore();
    const navigation = useNavigation<NavigationProp>();
    const menuItems = [
        { title: "Utilize", icon: 'speedometer-outline' },
        { title: "Sync", icon: 'cart-outline' },
        { title: "Logout", icon: 'cart-outline' },
    ];

    // Split menu items into chunks of 2 for each row
    const chunkSize = 3;
    const rows = [];
    for (let i = 0; i < menuItems.length; i += chunkSize) {
        rows.push(menuItems.slice(i, i + chunkSize));
    }

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

    const handleMenuClick = (stack:any) => {
        console.log(stack);
        if(stack === "Logout") {
            handleLogout()
        }
    }
    return (
        <View style={styles.container}>
            {/* User profile section */}
            <View style={styles.profileSection}>
                <Text style={styles.profileText}>LPGKV-LPGKEVIN</Text>
                <Text style={styles.profileSubtext}>LPG SKITAKLA</Text>
            </View>

            {/* Navigation menu */}
            <ScrollView contentContainerStyle={styles.menuContainer}>
                <View style={styles.activitiesHeader}>
                    <Text style={styles.activitiesHeaderText}>Utilize &gt; Menu</Text>
                </View>
                {rows.map((rowItems, rowIndex) => (
                    <View key={rowIndex} style={styles.menuRow}>
                        {rowItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.menuItemContainer}
                                onPress={() => {
                                    handleMenuClick(item.title)
                                }}
                            >
                                <MenuItem
                                    title={item.title}
                                    subItems={item.icon}
                                />
                            </TouchableOpacity>
                        ))}
                        {/* Add empty view if odd number of items to maintain layout */}
                        {rowItems.length < chunkSize && (
                            <View style={styles.emptyMenuItem} />
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

// Reusable menu item component
const MenuItem = ({ title, subItems }: { title: string; subItems: any }) => {
    const styles = GlobalStyles()
    return (
        <View style={styles.menuItem}>
            <Text style={styles.menuTitle}>{title}</Text>
            <View style={styles.subMenuItem}>
                <Ionicons
                    name={subItems}
                    size={20}
                    color="#555"
                    style={styles.icon}
                />
            </View>
        </View>
    );
};
