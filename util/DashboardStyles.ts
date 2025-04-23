import { StyleSheet, Dimensions } from 'react-native';

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
            margin: 10,
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
    });
};

export default GlobalStyles;
