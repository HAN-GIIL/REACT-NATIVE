import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: "cloud-rain",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Mist: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
    title: "Mist",
    subtitle: "Can't see anything",
  },
  Thunderstorm: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Drizzle: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Snow: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Atmosphere: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Clear: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
  Haze: {
    iconName: "cloud",
    gradient: ["#e8cbc0", "skyblue"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={[
        weatherOptions[condition].gradient[0],
        weatherOptions[condition].gradient[1],
      ]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Feather
          color="white"
          size={96}
          name={weatherOptions[condition].iconName}
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 50,
    color: "white",
    fontStyle: "italic",
    fontWeight: "100",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 60,
    fontWeight: "100",
    marginBottom: 10,
  },
  subTitle: {
    color: "white",
    fontSize: 40,
    fontWeight: "100",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
