// components/CustomModalInput.tsx

import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    visible: boolean;
    onClose: () => void;
    value: string;
    onChange: (text: string) => void;
    onSubmit: () => void;
    title: string;
};

export default function CustomModalInput({ visible, onClose, value, onChange, onSubmit ,title}: Props) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>×</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here..."
                            value={value}
                            onChangeText={onChange}
                        />
                        <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '85%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        marginVertical:15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
    },
    submitButton: {
        backgroundColor: '#28a745',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    submitText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 10,
        padding: 8,
        zIndex: 1,
    },
    closeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#999',
    },
});
