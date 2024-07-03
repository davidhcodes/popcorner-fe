import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import ChatsScreen from "../../screens/ChatsScreen";
import CommunitiesScreen from "../../screens/CommunitiesScreen";
import CinemaScreen from "../../screens/CinemaScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import EventsScreen from "../../screens/EventsScreen";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" size={size} color="#141E46" />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: "Events near me",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="domino-mask"
              size={size}
              color="#AF47D2"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          tabBarLabel: "Communities",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account-group"
              size={size}
              color="#FF6969"
            />
          ),
        }}
      />
      <Tab.Screen
        name="EventsNearMe"
        component={CinemaScreen}
        options={{
          tabBarLabel: "Cinemas near me",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="map-marker"
              size={size}
              color="#141E46"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="chat" size={size} color="#BB2525" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
