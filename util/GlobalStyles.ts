import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const GlobalStyles = () => {
    return StyleSheet.create({
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
            paddingVertical: 15,
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
            borderTopLeftRadius: 5,     // Rounded top-left corner
            borderTopRightRadius: 5,    // Rounded top-right corner
            paddingVertical: 4,
            paddingHorizontal: 16,
            marginBottom: 10,
        },
        newsHeader: {
            backgroundColor: '#002761', // Purple-blue background
            borderTopLeftRadius: 5,     // Rounded top-left corner
            borderTopRightRadius: 5,    // Rounded top-right corner
            paddingVertical: 12,
            paddingHorizontal: 16,
            marginBottom: 16,
        },
        activitiesHeaderText: {
            color: '#3b4554',
            fontSize: 15,
            fontWeight: '600',
        },
        newsHeaderText: {
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
        },
    });
};

export default GlobalStyles;
