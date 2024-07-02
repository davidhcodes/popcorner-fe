import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import LoginPage from "./login";
// import two from "./two";
import TabTwoScreen from "./two";

import UserInfo from "./UserInfo";
import SignUp from "./SignUp";
import Interests from "./Interests";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"],
//   color: string,
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabTwoScreen"
        options={{ title: "Two" }}
        initialParams={{ isLoggedIn, user }}
      >
        {/* Pass props as children */}
        {(props) => (
          <TabTwoScreen {...props} isLoggedIn={isLoggedIn} user={user} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="LoginPage"
        options={{ title: "Login" }}
        initialParams={{ isLoggedIn, setIsLoggedIn, setUser }}
      >
        {(props) => (
          <LoginPage
            {...props}
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="UserInfo"
        options={{ title: "User profile" }}
        initialParams={{ isLoggedIn, user }}
      >
        {/* Pass props as children */}
        {(props) => <UserInfo {...props} isLoggedIn={isLoggedIn} user={user} />}
      </Tab.Screen>
      <Tab.Screen
        name="SignUp"
        options={{ title: "Create a user" }}
        initialParams={{ setIsLoggedIn, user, setUser }}
      >
        {(props) => (
          <SignUp
            {...props}
            setIsLoggedIn={setIsLoggedIn}
            user={user}
            setUser={setUser}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Interests"
        options={{ title: "Select interests" }}
        initialParams={{ isLoggedIn, user, setUser }}
      >
        {(props) => (
          <Interests
            {...props}
            isLoggedIn={isLoggedIn}
            user={user}
            setUser={setUser}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
