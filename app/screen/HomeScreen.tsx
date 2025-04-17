import React from 'react';
import {Alert, StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useLoadingStore} from "@/app/store/useLoadingStore";
import Toast from "react-native-toast-message";
import {useAuthStore} from "@/app/store/useAuthStore";
import Ionicons from '@expo/vector-icons/Ionicons';
import {NavigationProp, StackActions, useNavigation} from "@react-navigation/native";
import {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
import {BlurView} from "expo-blur";
import {navigateToStack} from "@/app/util/helper";

function HomeScreen() {
    const navigation = useNavigation<NavigationProp<CallPlanParamList>>();
    const {setLoading} = useLoadingStore();
    const {clearAuth} = useAuthStore();
    const menuItems = [
        {title: "Dashboard", icon: 'speedometer-outline', navigation: {stack: 'DashboardStack', screen: 'Dashboard'}},
        {title: "Call Plan", icon: 'cart-outline', navigation: {stack: 'CallPlanStack', screen: 'CallPlan'}},
        {title: "Inventory", icon: 'cube-outline', navigation: {stack: 'InventoryStack', screen: 'Inventory'}},
        {title: "Sales", icon: 'cash-outline', navigation: {stack: 'SalesStack', screen: 'Sales'}},
        {title: "Customers", icon: 'people-outline', navigation: {stack: 'CustomersStack', screen: 'Customers'}},
        {title: "Reports", icon: 'document-text-outline', navigation: {stack: 'ReportsStack', screen: 'Reports'}},
        {title: "Analytics", icon: 'stats-chart-outline', navigation: {stack: 'AnalyticsStack', screen: 'Analytics'}},
        {title: "Messages", icon: 'chatbubbles-outline', navigation: {stack: 'MessagesStack', screen: 'Messages'}},
        {title: "Calendar", icon: 'calendar-outline', navigation: {stack: 'CalendarStack', screen: 'Calendar'}},
        {title: "Tasks", icon: 'checkbox-outline', navigation: {stack: 'TasksStack', screen: 'Tasks'}},
        {title: "Documents", icon: 'folder-outline', navigation: {stack: 'DocumentsStack', screen: 'Documents'}},
        {title: "Settings", icon: 'settings-outline', navigation: {stack: 'SettingsStack', screen: 'Settings'}},
        {
            title: "Notifications",
            icon: 'notifications-outline',
            navigation: {stack: 'NotificationsStack', screen: 'Notifications'}
        },
        {title: "Help Center", icon: 'help-circle-outline', navigation: {stack: 'HelpStack', screen: 'HelpCenter'}},
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

    const handleMenuClick = () => {

    }
    return (

        <View style={styles.container}>
            <View style={{zIndex:10}}>
                <Toast topOffset={1}/>
            </View>
            {/* User profile section */}
            <BlurView
                intensity={80} // 0-100
                tint="extraLight" // 'dark' | 'light' | 'default'
                style={styles.profileSection}
            >
                <Text style={styles.profileText}>LPGKV-LPGKEVIN</Text>
                <Text style={styles.profileSubtext}>LPG SKITAKLA</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Text>logout</Text>
                </TouchableOpacity>
            </BlurView>


            {/* Navigation menu */}
            <ScrollView contentContainerStyle={styles.menuContainer}>
                <View style={styles.activitiesHeader}>
                    <Text style={styles.activitiesHeaderText}>Activities</Text>
                </View>
                {rows.map((rowItems, rowIndex) => (
                    <View key={rowIndex} style={styles.menuRow}>
                        {rowItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.menuItemContainer}
                                onPress={() => {
                                    // navigation.dispatch(StackActions.push('CallPlanStack', {
                                    //     screen: 'CallPlan',
                                    // }));
                                        navigateToStack(navigation, item.navigation.stack, item.navigation.screen)
                                }}
                            >
                                <MenuItem
                                    title={item.title}
                                    subItems={item.icon}
                                />
                            </TouchableOpacity>
                        ))}
                        {/* Add empty views to maintain 3-item layout */}
                        {Array.from({length: 3 - rowItems.length}).map((_, i) => (
                            <View key={`empty-${i}`} style={styles.emptyMenuItem}/>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

// Reusable menu item component
const MenuItem = ({title, subItems}: { title: string; subItems: any }) => {
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
        backdropFilter: 'blur(30px)',
        borderRadius: 10,
        marginBottom: 30,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: '#eee',
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
        gap: 5,
    },
    menuItemContainer: {
        flex: 1,  // This ensures equal width for all items
        minWidth: 0, // Important for text truncation if needed
        paddingHorizontal: 4
    },
    menuItem: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    emptyMenuItem: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 14,
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

