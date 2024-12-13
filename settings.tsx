import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, StatusBar } from "react-native";
import { useRouter } from "expo-router";

const SettingsPage = () => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const router = useRouter();

  const toggleLocation = () => setIsLocationEnabled((prevState) => !prevState);

  const handleSaveSettings = () => {
    // Logic to save settings can be added here
    router.push("/dashboard/home"); // Navigate to the Home page
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5C6BC0" />
     

      <View style={styles.container}>
        {/* Enable/Disable Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enable Location</Text>
          <Text style={styles.sectionDescription}>
            Toggle the switch to enable or disable location services for this app.
          </Text>

          {/* Location Switch */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              {isLocationEnabled ? "Location Enabled" : "Location Disabled"}
            </Text>
            <Switch
              value={isLocationEnabled}
              onValueChange={toggleLocation}
              trackColor={{ false: "#C5CAE9", true: "#5C6BC0" }}
              thumbColor={isLocationEnabled ? "#FFFFFF" : "#BDBDBD"}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#C5CAE9", // Soft light blue background
  },
  section: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5C6BC0",
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#6A6A6A",
    marginBottom: 20,
    lineHeight: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchLabel: {
    fontSize: 16,
    color: "#5C6BC0",
  },
});

export default SettingsPage;
