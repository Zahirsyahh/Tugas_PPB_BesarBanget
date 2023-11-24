import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DetailHero = ({ route }) => {
  const { hero } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hero.hero_name}</Text>
      <Text style={styles.description}>{hero.hero_role}</Text>
      <Text style={styles.spec}>Specialty: {hero.hero_specially}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  spec: {
    fontSize: 16,
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetailHero;
