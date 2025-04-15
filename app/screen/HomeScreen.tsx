import React from 'react';
import {Alert, StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useLoadingStore} from "@/app/store/useLoadingStore";
import Toast from "react-native-toast-message";
import {useAuthStore} from "@/app/store/useAuthStore";
import Ionicons from '@expo/vector-icons/Ionicons';
import {NavigationProp, StackActions, useNavigation} from "@react-navigation/native";
import {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
function HomeScreen() {
    const navigation = useNavigation<NavigationProp<CallPlanParamList>>();
    const {setLoading} = useLoadingStore();
    const {clearAuth} = useAuthStore();
    const menuItems = [
        { title: "Dashboard", icon: 'speedometer-outline' },
        { title: "Call Plan", icon: 'cart-outline' },
        { title: "Inventory", icon: 'cube-outline' },
        { title: "Sales", icon: 'cash-outline' },
        { title: "Customers", icon: 'people-outline' },
        { title: "Reports", icon: 'document-text-outline' },
        { title: "Analytics", icon: 'stats-chart-outline' },
        { title: "Messages", icon: 'chatbubbles-outline' },
        { title: "Calendar", icon: 'calendar-outline' },
        { title: "Tasks", icon: 'checkbox-outline' },
        { title: "Documents", icon: 'folder-outline' },
        { title: "Settings", icon: 'settings-outline' },
        { title: "Notifications", icon: 'notifications-outline' },
        { title: "Help Center", icon: 'help-circle-outline' },
        { title: "Logout", icon: 'log-out-outline' }
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
                <Text style={styles.activitiesHeaderText}>Activities</Text>
            </View>
            {rows.map((rowItems, rowIndex) => (
                <View key={rowIndex} style={styles.menuRow}>
                    {rowItems.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => {
                            navigation.dispatch(StackActions.push('CallPlanStack', {
                                screen: 'CallPlan',
                            }));
                        }}>
                            <MenuItem
                                key={index}
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

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    time: {
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        color: '#666',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profileText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    profileSubtext: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#666',
    },
    menuContainer: {
        flexDirection: 'column',
        gap: 16,
        borderWidth: 0.1,
        borderRadius: 5,
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        minWidth: '28%',
    },
    menuItem: {
        flex: 1,  // This makes items in a row share equal width
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal:4,
        marginBottom:4,
        borderRadius: 5,
        padding: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        minWidth: '28%', // Ensures only 2 items fit per row (considering gap)
    },
    emptyMenuItem: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    subMenuItem: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 4,
        borderRadius: 4,
    },
    subMenuText: {
        fontSize: 14,
        color: '#555',
    },
    icon: {
        marginRight: 10,
        width: 24, // Fixed width for alignment
    },
    activitiesHeader: {
        backgroundColor: '#2F3193', // Purple-blue background
        borderTopLeftRadius: 5,     // Rounded top-left corner
        borderTopRightRadius: 5,    // Rounded top-right corner
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    activitiesHeaderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default HomeScreen;

