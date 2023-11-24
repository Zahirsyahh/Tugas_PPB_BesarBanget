import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DetailHero from "./pages/DetailHero";
import SearchScreen from "./pages/SearchScreen";
import ListMap from "./pages/ListMap";

const bottomTabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailHero"
          component={DetailHero}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function MainNavigator() {
    return (
      <bottomTabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4682B4",
            borderWidth: 2,
            borderColor: "#b48e92",
            marginHorizontal: 16,
            borderRadius: 24,
            height: 64,
            marginBottom: 10,
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "lightblue" : "lightgray";
            } else if (route.name === "Maps") {
              iconName = "book";
              color = focused ? "lightblue" : "lightgray";
            } else if (route.name === "Search") {
              iconName = "search";
              color = focused ? "lightblue" : "lightgray";
            } else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "lightblue" : "lightgray";
            }
            return <Octicons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <bottomTabNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <bottomTabNavigator.Screen
          name="Maps"
          component={ListMap}
        />
        <bottomTabNavigator.Screen
          name="Search"
          component={SearchScreen}
        />
        <bottomTabNavigator.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </bottomTabNavigator.Navigator>
    );
  }
}
