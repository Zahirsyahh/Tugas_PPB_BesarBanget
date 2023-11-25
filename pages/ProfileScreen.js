import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Header from "../components/Header";

const AboutScreen = () => {
  const developer = {
    name: "Muhammad Zahirsyah Ibrahim",
    nim: "21120121140152",
    description:
      "Tugas Akhir Praktikum PPB 2023, Aplikasi List Hero & Map berbasis API Dazel Mobile Legends menggunakan React Native",
    imageUrl:
      "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2023/10/urutan-rank-ml-1.jpg",
  };

  return (
    <SafeAreaView style={styles.containerH}>
      <Header headerText={"About"} flexPosition={"center"} />
      <View style={styles.container}>
        <Image source={{ uri: developer.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{developer.name}</Text>
        <Text style={styles.nim}>{developer.nim}</Text>
        <Text style={styles.description}>{developer.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  containerH: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  nim: {
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default AboutScreen;
