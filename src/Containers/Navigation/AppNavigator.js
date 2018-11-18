import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Constants as C } from '../../Config';
import { TemplateScreen } from '../../Screens';

const routeConfig = {
  [C.SCREENS.TEMPLATE]: {
    screen: TemplateScreen,
    navigationOptions: () => ({
      title: 'Welcome to React Native',
    }),
  },
};

const navigatorConfig = {
  initialRouteName: C.SCREENS.TEMPLATE,
};

const AppNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default createAppContainer(AppNavigator);
