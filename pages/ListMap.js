import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";

const MapListScreen = () => {
    const maps = [
        {
            id: 1,
            name: "Western Expanse",
            imageUrl:
                "https://static.wikia.nocookie.net/mobile-legends/images/c/ca/Western_Expanse_Map.jpg/revision/latest/scale-to-width-down/200?cb=20180520141747",
        },
        {
            id: 2,
            name: "Imperial Sanctuary",
            imageUrl:
                "https://static.wikia.nocookie.net/mobile-legends/images/4/48/Imperial_Sanctuary_Map.png/revision/latest/scale-to-width-down/200?cb=20211218083912",
        },
        {
            id: 3,
            name: "Sanctum Island",
            imageUrl:
                "https://static.wikia.nocookie.net/mobile-legends/images/f/f5/Sanctum_Island_Map.png/revision/latest/scale-to-width-down/200?cb=20211218083909",
        },
        {
            id: 4,
            name: "Brawl Map",
            imageUrl:
                "https://static.wikia.nocookie.net/mobile-legends/images/2/22/Brawl_Map.png/revision/latest/scale-to-width-down/200?cb=20211220062506",
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header headerText={"Map List"} flexPosition={"center"} />
            {maps.map((map) => (
                <View key={map.id} style={styles.mapContainer}>
                    <Image source={{ uri: map.imageUrl }} style={styles.mapImage} />
                    <Text style={styles.mapName}>{map.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "center",
        backgroundColor: '#F5F5F5'
    },
    mapContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    mapName: {
        fontSize: 18,
        marginBottom: 10,
        padding: 5,
        color: '#4682B4',
        fontWeight: '500',
    },
    mapImage: {
        width: 220,
        height: 180,
        resizeMode: "cover",
        borderRadius: 10,
    },
});

export default MapListScreen;
