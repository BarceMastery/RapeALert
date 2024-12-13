import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SupportPage = () => {
  const handleEmailSupport = () => {
    // Add email support logic here
  };

  const handleCallSupport = () => {
    // Add call support logic here
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5C6BC0" />
      <ScrollView style={styles.container}>
        {/* Email Support Section */}
        <View style={styles.section}>
          <Ionicons name="mail-outline" size={50} color="#5C6BC0" style={styles.icon} />
          <Text style={styles.sectionTitle}>Email Support</Text>
          <Text style={styles.sectionDescription}>
            Reach out to us through email for any issues or inquiries. Our team will respond promptly.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleEmailSupport}>
            <Text style={styles.buttonText}>EMAIL US</Text>
          </TouchableOpacity>
        </View>

        {/* Call Support Section */}
        <View style={styles.section}>
          <Ionicons name="call-outline" size={50} color="#5C6BC0" style={styles.icon} />
          <Text style={styles.sectionTitle}>Call Support</Text>
          <Text style={styles.sectionDescription}>
            Need urgent help? Give us a call, and our support team will assist you right away.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleCallSupport}>
            <Text style={styles.buttonText}>CALL US</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5CAE9", // Light blue background
  },
  title: {
    color: "#FFFFFF", // White text for header
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#FFFFFF", // White background for sections
    margin: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    alignItems: "center", // Centered content
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5C6BC0", // Deep blue for titles
    marginTop: 10,
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#6A6A6A", // Muted gray for descriptions
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#5C6BC0", // Deep blue button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#5C6BC0",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF", // White text for button
    fontSize: 14,
    fontWeight: "bold",
  },
  icon: {
    marginBottom: 10,
  },
});

export default SupportPage;
