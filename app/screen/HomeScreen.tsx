import React from 'react';
import {Alert, StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useLoadingStore} from "@/store/useLoadingStore";
import Toast from "react-native-toast-message";
import {useAuthStore} from "@/store/useAuthStore";
import Ionicons from '@expo/vector-icons/Ionicons';
import {NavigationProp, StackActions, useNavigation} from "@react-navigation/native";
import {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
import {BlurView} from "expo-blur";
import {navigateToStack} from "@/util/helper";
import GlobalStyles from "@/util/GlobalStyles";

function HomeScreen() {
    const navigation = useNavigation<NavigationProp<CallPlanParamList>>();
    const {setLoading} = useLoadingStore();
    const {clearAuth} = useAuthStore();
    const styles = GlobalStyles()
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
        {title: "Utilize", icon: 'settings-outline', navigation: {stack: 'UtilizeStack', screen: 'Utilize'}},
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

    const handleMenuClick = (stack:any ,nav:any) => {
        navigateToStack(navigation, stack, nav)
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
            </BlurView>


            {/* Navigation menu */}
            <View style={styles.activitiesHeader}>
                <Text style={styles.activitiesHeaderText}>Activities</Text>
            </View>
            <ScrollView contentContainerStyle={styles.menuContainer}>
                {rows.map((rowItems, rowIndex) => (
                    <View key={rowIndex} style={styles.menuRow}>
                        {rowItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.menuItemContainer}
                                onPress={() => {
                                    handleMenuClick(item.navigation.stack, item.navigation.screen)
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


export default HomeScreen;

