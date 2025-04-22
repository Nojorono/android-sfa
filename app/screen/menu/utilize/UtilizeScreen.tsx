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

type NavigationProp = StackNavigationProp<UtilizeParamList, 'Utilize'>;
export default function UtilizeScreen() {
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
        minWidth: '25%',
    },
    menuItem: {
        flex: 1,  // This makes items in a row share equal width
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginHorizontal:4,
        marginBottom:4,
        padding: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        minWidth: '25%', // Ensures only 2 items fit per row (considering gap)
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
    menuItemContainer: {
        flex: 1,  // This ensures equal width for all items
        minWidth: 0, // Important for text truncation if needed
        paddingHorizontal: 4
    },
});

