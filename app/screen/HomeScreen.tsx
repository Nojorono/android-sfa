import React, {useState} from 'react';
import {Alert, StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useLoadingStore} from "@/store/useLoadingStore";
import Toast from "react-native-toast-message";
import {useAuthStore} from "@/store/useAuthStore";
import Ionicons from '@expo/vector-icons/Ionicons';
import {NavigationProp, StackActions, useNavigation} from "@react-navigation/native";
import {CallPlanParamList} from "@/app/screen/navigation/CallPlanNavigator";
import {BlurView} from "expo-blur";
import {navigateToStack} from "@/util/helper";
import GlobalStyles from "@/util/GlobalStyles";
import CustomModal from "@/components/CustomModal";
import ImageCarousel from "@/components/ImageCorousel";

function HomeScreen() {
    const navigation = useNavigation<NavigationProp<CallPlanParamList>>();
    const {setLoading} = useLoadingStore();
    const {clearAuth} = useAuthStore();
    const styles = GlobalStyles()
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const menuItems = [
        {
            title: "Dashboard",
            icon: 'speedometer-outline',
            navigation: {stack: 'DashboardStack', screen: 'Dashboard'},
            flag: true
        },
        {
            title: "Call Plan",
            icon: 'cart-outline',
            navigation: {stack: 'CallPlanStack', screen: 'CallPlan'},
            flag: true
        },
        {
            title: "Perjalanan",
            icon: 'cube-outline',
            navigation: {stack: 'JourneyStartStack', screen: 'JourneyStart'},
            flag: true
        },
        {title: "Sales", icon: 'cash-outline', navigation: {stack: 'SalesStack', screen: 'Sales'}, flag: true},
        {
            title: "Customers",
            icon: 'people-outline',
            navigation: {stack: 'CustomersStack', screen: 'Customers'},
            flag: false
        },
        {
            title: "Reports",
            icon: 'document-text-outline',
            navigation: {stack: 'ReportsStack', screen: 'Reports'},
            flag: false
        },
        {
            title: "Analytics",
            icon: 'stats-chart-outline',
            navigation: {stack: 'AnalyticsStack', screen: 'Analytics'},
            flag: true
        },
        {
            title: "Messages",
            icon: 'chatbubbles-outline',
            navigation: {stack: 'MessagesStack', screen: 'Messages'},
            flag: true
        },
        {
            title: "Calendar",
            icon: 'calendar-outline',
            navigation: {stack: 'CalendarStack', screen: 'Calendar'},
            flag: true
        },
        {title: "Tasks", icon: 'checkbox-outline', navigation: {stack: 'TasksStack', screen: 'Tasks'}, flag: true},
        {
            title: "Akhiri Perjalanan",
            icon: 'folder-outline',
            navigation: {stack: 'JourneyEndStack', screen: 'JourneyEnd'}, flag: true
        },
        {
            title: "Utilize",
            icon: 'settings-outline',
            navigation: {stack: 'UtilizeStack', screen: 'Utilize'},
            flag: true
        },
        {
            title: "Notifications",
            icon: 'notifications-outline',
            navigation: {stack: 'NotificationsStack', screen: 'Notifications'}, flag: true
        },
        {
            title: "Help Center",
            icon: 'help-circle-outline',
            navigation: {stack: 'HelpStack', screen: 'HelpCenter'},
            flag: false
        },
    ];

    // Split menu items into chunks of 2 for each row
    const chunkSize = 3;
    const rows = [];
    for (let i = 0; i < menuItems.length; i += chunkSize) {
        rows.push(menuItems.slice(i, i + chunkSize));
    }

    const handleSubmitModal = () => {
        console.log('Submitted:', inputValue);
        setModalVisible(false);
        setInputValue('');
    };

    const handleMenuClick = (stack: any, nav: any) => {
        if (nav === 'JourneyStart') {
            setModalVisible(true)
            setModalTitle('Mulai Perjalanan')
        } else {
            navigateToStack(navigation, stack, nav)
        }

    }
    return (

        <View style={styles.container}>
            <View style={{zIndex: 10}}>
                <Toast topOffset={1}/>
            </View>
            {/* User profile section */}
            <BlurView
                intensity={80} // 0-100
                tint="extraLight" // 'dark' | 'light' | 'default'
                style={styles.profileSection}
            >
                <Text style={styles.profileText}>LPGKV-LPGKEVIN</Text>
                <Text style={styles.profileSubtext}>LPG SKITAKLA</Text>
            </BlurView>


            {/* Navigation menu */}
            <View style={styles.newsHeader}>
                <Text style={styles.newsHeaderText}>Berita Harian</Text>
            </View>
            <ImageCarousel/>
            <View style={styles.activitiesHeader}>
                <Text style={styles.activitiesHeaderText}>Activities</Text>
            </View>
            <CustomModal
                title={modalTitle}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                value={inputValue}
                onChange={setInputValue}
                onSubmit={handleSubmitModal}
            />
            <ScrollView contentContainerStyle={styles.menuContainer}>
                {rows.map((rowItems, rowIndex) => (
                    <View key={rowIndex} style={styles.menuRow}>
                        {rowItems.map((item, index) => {
                            const isEnabled = item.flag !== false;
                            return isEnabled ? (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.menuItemContainer}
                                    onPress={() =>
                                        handleMenuClick(item.navigation.stack, item.navigation.screen)
                                    }
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
}

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


export default HomeScreen;

