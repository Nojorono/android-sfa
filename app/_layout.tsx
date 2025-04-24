import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import 'react-native-reanimated';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import AppNavigator from "@/app/AppNavigator";
import Toast from "react-native-toast-message";
import {getDatabaseInstance} from "@/app/config/db";
import {useLoadingStore} from "@/store/useLoadingStore";
import {BackgroundFetchStatus} from "expo-background-fetch";
import {OfflineProvider} from "@/app/context/OfflineProvider";
import {defaultDatabaseDirectory, SQLiteProvider} from "expo-sqlite";
import {useFonts} from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const BACKGROUND_FETCH_TASK = 'SYNC_ACTIVITIES_TASK';

// Define the background fetch task at the top level
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    try {
        const now = Date.now();
        console.log(`Got background fetch call at ${new Date(now).toISOString()}`); // Log for debugging
        Toast.show({type: "info", text1: "Got background fetch call", text2: `${new Date(now).toISOString()}`});

        const db = getDatabaseInstance();
        if (!db) {
            console.error('Database instance is null or undefined.');
            return BackgroundFetch.BackgroundFetchResult.Failed;
        }

        console.log('Starting syncActivitiesInBatches...');
        // await syncActivitiesInBatches(db);
        console.log('syncActivitiesInBatches completed successfully.');

        return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error: any) {
        Toast.show({type: "error", text1: "Error syncing activities", text2: `${error.message}`});
        console.error('Error during background fetch task:', error);
        return BackgroundFetch.BackgroundFetchResult.Failed;
    }
});

export default function RootLayout() {
    const {isLoading} = useLoadingStore();
    // const { isOnline, isWifi } = useOffline();
    const [isRegistered, setIsRegistered] = useState(false);
    const [status, setStatus] = useState<BackgroundFetchStatus | null>(null);
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <OfflineProvider>
            <SQLiteProvider databaseName='SofiaOffline.db' assetSource={{assetId: require('../assets/SofiaOffline.db')}}
                            directory={defaultDatabaseDirectory}>
                <ThemeProvider value={DefaultTheme}>
                    <AppNavigator/>
                    <StatusBar style="auto"/>
                </ThemeProvider>
            </SQLiteProvider>
        </OfflineProvider>

    );
}
