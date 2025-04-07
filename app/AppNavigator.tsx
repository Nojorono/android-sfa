import React, { useEffect } from 'react';
import { loadAuthState, useAuthStore } from './store/useAuthStore';
import AuthNavigator from './screen/navigation/AuthNavigator';
import { StatusBar } from 'react-native';
import { useLoadingStore } from './store/useLoadingStore';
import MainNavigator from "@/app/screen/navigation/MainNavigator";

const AppNavigator = () => {
    const { isAuthenticated } = useAuthStore();
    const { setLoading } = useLoadingStore();

    useEffect(() => {
        const initializeAuthState = async () => {

            try{
                setLoading(true);
                await loadAuthState(useAuthStore.setState);
            }catch (e){
                console.error(e);
            }finally {
                setLoading(false);
            }

        };

        initializeAuthState();
    }, [setLoading]);
    return (
        <>
            <StatusBar
                barStyle={ 'light-content'}
                backgroundColor={'#fff'}
            />
            {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
        </>
    );
};

export default AppNavigator;
