import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView } from "react-native";
import axios from "axios";
import HeroCard from "../components/HeroCard";
import Header from "../components/Header";

function SearchScreen() {
  const [heroData, setHeroData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get('https://api.dazelpro.com/mobile-legends/hero');
        if (response.data && response.data.hero && Array.isArray(response.data.hero)) {
          setHeroData(response.data.hero);
        } else {
          console.error('Invalid hero data in the response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  const filteredHeroes = heroData.filter(
    (hero) =>
      hero.hero_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Search Hero"} flexPosition={"center"} />
      <TextInput
        style={styles.input}
        placeholder="Search Hero"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredHeroes.map((hero) => (
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default SearchScreen
