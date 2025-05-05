import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type InfoItem = {
    label: string;
    subtext: string;
};

type InfoCardProps = {
    title?: string;
    items?: InfoItem[];
};

const InfoCard: React.FC<InfoCardProps> = ({ title = 'Default Title', items = [] }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                {items.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <View style={styles.itemRow}>
                            <Text style={styles.itemLabel}>{item.label}</Text>
                            <Text style={styles.subItem}>{item.subtext}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        margin: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    edit: {
        color: '#007BFF',
        fontSize: 16,
    },
    content: {
        gap: 8,
    },
    itemContainer: {
        marginBottom: 8,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemLabel: {
        fontSize: 16,
        color: '#333',
    },
    subItem: {
        fontSize: 16,
        color: '#666',
    },
});

export default InfoCard;
