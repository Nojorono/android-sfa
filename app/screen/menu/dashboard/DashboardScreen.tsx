import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {DashboardParamList} from "@/app/screen/navigation/DashboardNavigator";
import {CircularProgress} from 'react-native-circular-progress';
import DashboardStyles from "@/util/DashboardStyles";

type NavigationProp = StackNavigationProp<DashboardParamList, 'Dashboard'>;

export default function DashboardScreen() {
    const styles = DashboardStyles()
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

