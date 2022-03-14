import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, TextInput, View, Button } from "react-native";
import CustomDrawer from "./CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import ClassesInstruments from "../Vue/ClassesInstruments";
import TypesInstruments from "../Vue/TypesInstruments";
import Accueil from "../Vue/Accueil";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#ff8800",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Accueil"
        component={Accueil}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Inscription"
        component={TypesInstruments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-add-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Instrument"
        component={ClassesInstruments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="musical-notes-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Elèves"
        component={TypesInstruments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Emprunt"
        component={TypesInstruments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="swap-horizontal-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cours"
        component={TypesInstruments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="today-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Professeur"
        component={TypesInstruments}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="school-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    textAlign: "center",
  },
});

export default MyDrawer;
