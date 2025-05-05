import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import GlobalStyles from "@/util/GlobalStyles";
import {VisitParamList} from "@/app/screen/navigation/VisitNavigator";
import {navigateToStack} from "@/util/helper";
import {VALID_ROUTE_NAMES} from "@/config/routes";
import Toast from "react-native-toast-message";

type NavigationProp = StackNavigationProp<VisitParamList, 'Visit'>;
export default function VisitScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [inputValue, setInputValue] = useState('');
    const menuItems = [
        {title: "Pelanggan Dalam Rute", icon: 'speedometer-outline', navigation: 'in_route', flag: true},
        {title: "Pelanggan Luar Rute", icon: 'cart-outline', navigation: 'out_route', flag: false},
        {title: "Summary Kunjungan", icon: 'cart-outline', navigation: 'Summary', flag: true},
        {title: "Pelanggan Baru", icon: 'cart-outline', navigation: 'new_route', flag: false},
    ];

    // Split menu items into chunks of 2 for each row
    const chunkSize = 3;
    const rows = [];
    for (let i = 0; i < menuItems.length; i += chunkSize) {
        rows.push(menuItems.slice(i, i + chunkSize));
    }
    const handleMenuClick =(nav: any) => {
        if (VALID_ROUTE_NAMES.includes(nav)) {
            navigation.navigate(nav);
        } else {
            Toast.show({
                type: 'error',
                text1: 'Navigation Error',
                text2: `Screen "${nav}" does not exist.`,
                autoHide:true
            });
        }
    }

    return (
        <View style={styles.container}>
            {/* User profile section */}
            <View style={styles.profileSection}>
                <Text style={styles.profileText}>LPGKV-LPGKEVIN</Text>
                <Text style={styles.profileSubtext}>LPG SKITAKLA</Text>
            </View>
            <Toast/>
            {/* Navigation menu */}
            <ScrollView contentContainerStyle={styles.menuContainer}>
                <View style={styles.activitiesHeader}>
                    <Text style={styles.activitiesHeaderText}>Kunjungan &gt; Menu</Text>
                </View>
                {rows.map((rowItems, rowIndex) => (
                    <View key={rowIndex} style={styles.menuRow}>
                        {rowItems.map((item, index) => {
                            const isEnabled = item.flag !== false;
                            return isEnabled ? (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.menuItemContainer}
                                    onPress={() => {
                                        handleMenuClick(item.navigation)
                                    }}
                                >
                                    <MenuItem title={item.title} subItems={item.icon}/>
                                </TouchableOpacity>
                            ) : (
                                <View key={index} style={[styles.menuItemContainer, {opacity: 0.5}]}>
                                    <MenuItem title={item.title} subItems={'close-circle-outline'} disabled/>
                                </View>
                            );
                        })}

                        {/* Fill empty items if row isn't full */}
                        {Array.from({length: 3 - rowItems.length}).map((_, i) => (
                            <View key={`empty-${i}`} style={styles.emptyMenuItem}/>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const MenuItem = ({
                      title,
                      subItems,
                      disabled = false,
                  }: {
    title: string;
    subItems: any;
    disabled?: boolean;
}) => {
    const styles = GlobalStyles();
    return (
        <View style={styles.menuItem}>
            <Text style={[styles.menuTitle, disabled && {color: '#aaa'}]}>{title}</Text>
            <View style={styles.subMenuItem}>
                <Ionicons
                    name={subItems}
                    size={20}
                    color={disabled ? '#aaa' : '#555'}
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
    menuItemContainer: {
        flex: 1,  // This ensures equal width for all items
        minWidth: 0, // Important for text truncation if needed
        paddingHorizontal: 4
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
        marginHorizontal: 4,
        marginBottom: 4,
        padding: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
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
});

