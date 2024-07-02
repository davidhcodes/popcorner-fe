import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useCallback, useState } from "react";
import EditScreenInfo from "@/components/EditScreenInfo";

function Interests() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}> This is our interests page </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainTitle: {
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 50,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20, // Increased margin between boxes
    width: "80%", // Shortened width
  },
  submitButton: {
    backgroundColor: "purple",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "80%",
    marginVertical: 10,
    color: "white",
  },
  submitButtonText: {
    color: "white",
  },
  successText: {
    color: "green",
    marginTop: 10,
    fontSize: 17,
  },
});

export default Interests;
