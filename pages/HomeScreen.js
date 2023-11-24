import React from "react";
import { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity, SafeAreaView,ScrollView,} from "react-native";
import axios from "axios";
import HeroCard from "../components/HeroCard";
import Header from "../components/Header";
import { dataAss } from "../data/dataAss";
import { dataFighter } from "../data/dataFighter";

function HomeScreen() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get(
          'https://api.dazelpro.com/mobile-legends/hero'
        );
        // Check if the response contains hero data
        if (response.data && response.data.hero && Array.isArray(response.data.hero)) {
          setHeroData(response.data.hero);
        } else {
          console.error('Invalid hero data in the response:', response.data);
        }
      } catch (error) {
        // Handle errors
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"All Hero"} flexPosition={"center"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {heroData.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  TopPlayers: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 6,
    fontSize: 26,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor: '#4682B4',
    padding: 15,
    color: '#F5F5F5',
    textAlign: "center",
  },
  TopTeams: {
    fontSize: 26,
  },
});

export default HomeScreen;
