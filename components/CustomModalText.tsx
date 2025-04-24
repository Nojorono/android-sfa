import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

type Props = {
    visible: boolean;
    onClose: () => void;
    onSubmit: () => void;
    description: string;
    title: string;
};

export default function CustomModalText({
                                             visible,
                                             onClose,
                                             description,
                                             onSubmit,
                                             title,
                                         }: Props) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>×</Text>
                    </TouchableOpacity>

                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.textBox}>
                        <Text style={styles.textDescription}>{description}</Text>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancel]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSubmit} style={[styles.button, styles.ok]}>
                            <Text style={[styles.buttonText, { color: '#fff' }]}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '85%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        elevation: 4,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 14,
        zIndex: 1,
    },
    closeText: {
        fontSize: 22,
        color: '#999',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 16,
    },
    textBox: {
        borderColor: '#ddd',
        padding: 12,
        justifyContent: 'center',
        marginBottom: 20,
    },
    textDescription: {
        fontSize: 14,
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    cancel: {
        backgroundColor: '#f0f0f0',
    },
    ok: {
        backgroundColor: '#007aff',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
    },
});