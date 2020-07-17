import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './src/components/constantes/utils';
import { SignInScreen } from './src/components/auth/SignIn';
import { RegisterScreen } from './src/components/auth/register';
import { ForgotScreen } from './src/components/auth/forgot';
import { SideMenu } from './src/components/sidemenu';
import { SplashScreen } from './src/components/splash';
import { ConversationScreen } from './navigation/tabs/home/conversation';
import { EditProductScreen } from './navigation/tabs/home/editProduct';
import { HomeScreen } from './navigation/tabs/home/home';
import { MessageScreen } from './navigation/tabs/message/message';
import { NotificationScreen } from './navigation/tabs/notification/notification';
import { ShowProductScreen } from './navigation/tabs/home/showProduct';
import { AddProductScreen } from './navigation/drawer/addProduct';
import { ParameterScreen } from './navigation/drawer/parametres';
import {  ProfileScreen } from './navigation/drawer/profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const mainStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const StackAuth = createStackNavigator();

function tabM() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => 
            <Image 
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
            style={{width:20, height:20}}
          />
        }}
        name="Home" component={HomeNav} />
        <Tab.Screen 
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: () => 
            <Image
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
            style={{width:20, height:20}}
            />
        }}
        name="Message" component={MessageNav} />
        <Tab.Screen 
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: () => 
            <Image
            source={IMAGE.ICON_MENU}
            resizeMode="contain"
            style={{width:20, height:20}}
            />
        }}
        name="Notification" component={NotificationNav} />
      </Tab.Navigator>
  )
}

  function HomeNav() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name = "Home"
            component = {HomeScreen}
            options = {
              {title: 'Home'}
            }
          />
           <Stack.Screen
            name = "ShowProduct"
            component = {ShowProductScreen}
            options = {
              {title: 'Show Product'}
            }
          />
           <Stack.Screen
            name = "Conversation"
            component = {ConversationScreen}
            options = {
              {title: 'Conversation'}
            }
          />
           <Stack.Screen
            name = "EditProduct"
            component = {EditProductScreen}
            options = {
              {title: 'Edit Product'}
            }
          />
        </Stack.Navigator>
    );
  }

  function AuthNav() {
    return (
        <StackAuth.Navigator 
          initialRouteName="Login" 
          screenOptions={{animationEnabled:false, headerShown: false}}
        >
          <StackAuth.Screen
            name = "Login"
            component = {SignInScreen}
          />
           <StackAuth.Screen
            name = "Register"
            component = {RegisterScreen}
            options = {
              {title: 'Register'}
            }
          />
          <StackAuth.Screen
            name = "Forgot"
            component = {ForgotScreen}
            options = {
              {title: 'Forgot'}
            }
          />
        </StackAuth.Navigator>
    );
  }
  
  function NotificationNav() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name = "Settings"
            component = {NotificationScreen}
            options = {
              {title: 'Settings'}
            }
          />
        </Stack.Navigator>
    );
  }

  function MessageNav() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name = "Message"
            component = {MessageScreen}
            options = {
              {title: 'Message'}
            }
          />
        </Stack.Navigator>
    );
  }

function profNav() {
  return (
    <mainStack.Navigator initialRouteName="Home">
      <mainStack.Screen
        name = "Home"
        component = {tabM}
        options = {
          {title: 'Home'}
        }
      />
      <mainStack.Screen
        name = "Profil"
        component = {ProfileScreen}
        options = {
          {title: 'Profil'}
        }
      />
      <mainStack.Screen
        name = "AddProduct"
        component = {AddProductScreen}
        options = {
          {title: 'Add Product'}
        }
      />
      <mainStack.Screen 
        name = "Parameter"
        component = {ParameterScreen}
        options = {
          {title: 'Parameter'}
        }
      />
    </mainStack.Navigator>
  );
}

function Draw() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <SideMenu {...props}/>}>
      <Drawer.Screen component={profNav} />
    </Drawer.Navigator>
  );
}

export function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        await fetch(
          "http://10.0.2.2:8080/api/users/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              email: data.email,
              password: data.password
            })
          }).then(res => res.json())
          .then(async (data) => {
            try {
              dispatch({ type: 'SIGN_IN', token: data.token });
            } catch (e) {
              console.log("error", e);
            }
          });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        await fetch(
          "http://10.0.2.2:8080/api/users/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              email: data.email,
              username: data.username,
              password: data.password,
              passwordConf: data.passwordConf
            })
          }).then(res => res.json())
          .then(async (data) => {
            try {
              dispatch({ type: 'SIGN_IN', token: data.token });
            } catch (e) {
              console.log("error", e);
            }
          });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown:false, 
            animationEnabled:false}}
        >
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            ) : state.userToken == null ? (
            <Stack.Screen
              name="SignIn"
              component={AuthNav}
              options={{
                title: 'Login',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
            ) : (
              <Stack.Screen name="Home" component={Draw} />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}