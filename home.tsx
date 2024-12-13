import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert } from "react-native";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";


export default function HomePage() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        // Request foreground permissions
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied.");
          Alert.alert("Permission Denied", "Please enable location services to use this feature.");
          return;
        }

        // Fetch current position with highest accuracy
        let currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });

        setLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 1, // Adjust delta for zoom level
          longitudeDelta: 1,
        });
      } catch (error) {
        console.error("Error fetching location:", error);
        setErrorMsg("Failed to fetch location. Please try again later.");
      }
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5C6BC0" />
      <ScrollView style={styles.container}>
        {/* Google Maps Section */}
        <View style={styles.mapSection}>
          <Text style={styles.sectionTitle}>LIVE TRACKING MAP</Text>
          {location ? (
            <MapView
              style={styles.map}
              initialRegion={location}
              showsUserLocation={true} // Highlights user's current location on the map
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title="You are here"
                description="This is your current location."
              />
            </MapView>
          ) : (
            <Text style={styles.loadingText}>Fetching your location...</Text>
          )}
        </View>

        {/* Create Alerts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CREATE ALERTS</Text>
          <Text style={styles.sectionDescription}>
            Create your emergency alerts to manage your emergency events by tracking members. Set alerts to manage your
            difficult time.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/set-alerts")}>
              <Text style={styles.buttonText}>SET ALERTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/my-alerts")}>
              <Text style={styles.buttonTextSecondary}>MY ALERTS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SOS Alerts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SOS ALERTS</Text>
          <Text style={styles.sectionDescription}>
            Send emergency SOS alert messages to your circle members to get help quickly.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/add-alerts")}>
              <Text style={styles.buttonText}>ADD ALERTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/sos-alerts")}>
              <Text style={styles.buttonTextSecondary}>SOS ALERTS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Near-By Places Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NEAR-BY PLACES</Text>
          <Text style={styles.sectionDescription}>
            Quickly search for nearby places during emergencies to save time.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/place")}>
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        {/* Direct-Dialing Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DIRECT-DIALING</Text>
          <Text style={styles.sectionDescription}>
            Instantly call emergency services for immediate help during critical situations.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/dial")}>
            <Text style={styles.buttonText}>DIAL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5CAE9",
  },
  section: {
    backgroundColor: "#FFFFFF",
    margin: 15,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#5C6BC0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    margin: 5,
    shadowColor: "#5C6BC0",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#5C6BC0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    margin: 5,
  },
  buttonTextSecondary: {
    color: "#5C6BC0",
    fontSize: 14,
    fontWeight: "bold",
  },
  mapSection: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#6A6A6A",
  },
});
