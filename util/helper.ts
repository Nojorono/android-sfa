import { StackActions, NavigationProp } from '@react-navigation/native';
import { MainTabParamList } from '@/app/screen/navigation/MainNavigator';
import Toast from "react-native-toast-message"; // adjust path as needed


function isValidStackRoute(route: string): route is keyof MainTabParamList {
    return ['DashboardStack', 'CallPlanStack', "UtilizeStack", "JourneyEndStack", "VisitStack"].includes(route);
}

export function navigateToStack(
    navigation: NavigationProp<any>,
    stack: string,
    screenParams: any
) {
    if (isValidStackRoute(stack)) {
        navigation.dispatch(StackActions.push(stack, {screen: screenParams}));
    } else {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: `Page Not Found`,
        });
    }
}
