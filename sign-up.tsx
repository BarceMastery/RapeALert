import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateInputs = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Validation Error", "Please fill all fields.");
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email.");
      return false;
    }
    if (password.length < 8) {
      Alert.alert("Validation Error", "Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      Alert.alert("Sign Up Success", "You have created an account successfully.");
      // Navigate to the login page after successful signup
      router.push("/"); // Assuming your login page is at '/login'
    }
  };

  return (
    <View style={styles.container}>
      <FontAwesome
        name="user-plus"
        size={80}
        color="#5C6BC0"
        style={styles.icon}
      />
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        autoCapitalize="none"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C5CAE9", // Light soft blue background
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#5C6BC0", // Muted blue title color
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#5C6BC0", // Soft blue border for input fields
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#FFFFFF", // White background for input fields
  },
  button: {
    backgroundColor: "#5C6BC0", // Muted blue button background
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF", // White text for button
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    color: "#7986CB", // Muted blue link text
    fontWeight: "600",
    marginTop: 10,
  },
});

export default SignUp;
