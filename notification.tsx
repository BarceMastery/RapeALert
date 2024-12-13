import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const NotificationScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("received"); // State to toggle between Sent and Received

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Icon */}
        <TouchableOpacity
          onPress={() => router.push("/dashboard/(tabs)/home")}
          style={styles.backButtonContainer}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Header Text */}
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      {/* Tab Buttons */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "received" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("received")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "received" && styles.activeTabButtonText,
            ]}
          >
            Received
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "sent" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("sent")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "sent" && styles.activeTabButtonText,
            ]}
          >
            Sent
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView contentContainerStyle={styles.tabContent}>
        {activeTab === "received" ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No received notifications</Text>
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No sent notifications</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

NotificationScreen.options = {
  headerShown: false, // Hide default header
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa", // Light gray background for a modern feel
  },
  header: {
    backgroundColor: "#5C6BC0", // Matching header color
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  backButtonContainer: {
    padding: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 26,
    fontWeight: "600",
    color: "#FFFFFF", // White text for the header
    letterSpacing: 1.5,
    textAlign: "left",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff", // Tab bar white background
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd", // Light border to separate the tabs
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  tabButtonText: {
    fontSize: 16,
    color: "#555", // Default text color for tabs
  },
  activeTabButton: {
    borderBottomWidth: 3,
    borderBottomColor: "#5C6BC0", // Active tab underline color
  },
  activeTabButtonText: {
    fontWeight: "bold",
    color: "#5C6BC0", // Active tab text color
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
  emptyState: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#888", // Subtle gray for empty state
    textAlign: "center",
  },
});

export default NotificationScreen;
