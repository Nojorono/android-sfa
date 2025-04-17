import {useNavigation} from "@react-navigation/native";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {DashboardParamList} from "@/app/screen/navigation/DashboardNavigator";
import {CircularProgress} from 'react-native-circular-progress';

type NavigationProp = StackNavigationProp<DashboardParamList, 'Dashboard'>;

export default function DashboardScreen() {
        const cardData = [
            {title: 'Project Completion', value: 75, color: '#4CAF50'},
            {title: 'Tasks Done', value: 60, color: '#2196F3'},
            {title: 'Goals Achieved', value: 90, color: '#FF9800'}
        ];

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
                        <Text style={styles.activitiesHeaderText}>Activity &gt; Dashboard</Text>
                    </View>

                        {cardData.map((card, index) => (
                            <View key={index} style={styles.card}>
                                <Text style={styles.cardTitle}>{card.title}</Text>

                                <CircularProgress
                                    size={120}
                                    width={12}
                                    fill={card.value}
                                    tintColor={card.color}
                                    backgroundColor="#e0e0e0"
                                    rotation={0}
                                    lineCap="round"
                                >
                                    {() => (
                                        <Text style={[styles.progressText, {color: card.color}]}>
                                            {card.value}%
                                        </Text>
                                    )}
                                </CircularProgress>

                                <Text style={styles.cardFooter}>{card.value}/100 completed</Text>
                            </View>
                        ))}

                </ScrollView>
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
        card: {
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            margin:10,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
        },
        cardTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 12,
        },
        progressText: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        cardFooter: {
            marginTop: 12,
            fontSize: 14,
            color: '#757575',
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
        menuContainer: {
            flexDirection: 'column',
            gap: 16,
            borderWidth: 0.1,
            borderRadius: 5,
        },
    })
