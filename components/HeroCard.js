import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeroCard = ({ hero }) => {
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate('DetailHero', {hero});
    };

    const placeholderImage =
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/689827e2-f006-498a-a1e5-2c70425a2719/dee9s93-ce89942b-d758-4296-aacd-64df565f16e3.png/v1/fill/w_1280,h_1280/mobile_legends_mythic_rank_icon_vector_by_masnera_dee9s93-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4OTgyN2UyLWYwMDYtNDk4YS1hMWU1LTJjNzA0MjVhMjcxOVwvZGVlOXM5My1jZTg5OTQyYi1kNzU4LTQyOTYtYWFjZC02NGRmNTY1ZjE2ZTMucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjg5ODI3ZTItZjAwNi00OThhLWExZTUtMmM3MDQyNWEyNzE5XC9tYXNuZXJhLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.XrwTKbXfiBxbkoJDFgiGwv-eM0yKHmdikdOrbmwrdfs";

    return (
        <TouchableOpacity onPress={pressHandler}>
            <View style={styles.card}>
                <Image
                    source={{ uri: placeholderImage }}
                    style={styles.photo}
                    onError={(error) => console.error("Image load error:", error.nativeEvent.error)}
                />
                <View style={styles.cardContent}>
                    <Text style={styles.heroName}>{hero.hero_name}</Text>
                    {/* Other details */}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#4682B4",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
        padding: 15,
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
    },
    heroName: {
        fontSize: 18,
        marginBottom: 5,
        color: '#F5F5F5',
    },
});

export default HeroCard;
