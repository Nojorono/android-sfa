import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import GlobalStyles from "@/util/GlobalStyles";
import {VisitParamList} from "@/app/screen/navigation/VisitNavigator";
import InfoCard from "@/components/SummaryReturComponent";

type NavigationProp = StackNavigationProp<VisitParamList, 'Summary'>;
export default function SummaryReturn() {
    const navigation = useNavigation<NavigationProp>();
    const [inputValue, setInputValue] = useState('');
    const handleMenuClick =(navigation: string) => {


    }

    return (
        <View style={styles.container}>
            {/* Navigation menu */}
            <ScrollView contentContainerStyle={styles.menuContainer}>
                <View style={styles.activitiesHeader}>
                    <Text style={styles.activitiesHeaderText}>Kunjungan &gt; Summary &gt; Retur</Text>
                </View>
                <InfoCard
                    title="User Info"
                    items={[
                        { label: 'Email', subtext: 'john@example.com' },
                        { label: 'Phone', subtext: '+628123456789' },
                        { label: 'City', subtext: 'Jakarta' },
                    ]}
                />
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

