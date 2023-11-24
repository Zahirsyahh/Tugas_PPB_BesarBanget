import { Text, View } from "react-native";

const Header = ({ headerText, flexPosition }) => {
  const flexPositionStyle = flexPosition ? flexPosition : "center";
  return (
    <View
      style={{
        display: 'flex',
      marginTop: 16,
      marginBottom: 6,
      fontSize: 26,
      borderColor: '#4682B4',
      borderRadius: 25,
      backgroundColor: '#F5F5F5',
      padding: 15,
      color: '#4682B4',
      textAlign: "center",
      }}
    >
      <Text style={{ 
        marginRight: 8, 
        fontSize: 18, 
        fontWeight: "600",
        color: '#4682B4', 
        textAlign: 'center'
        }}>
        {headerText}
      </Text>
    </View>
  );
};

export default Header;
