/** @format */

import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ImageBackground 
          source={require("./assets/background.png")} 
          resizeMode="cover" 
          style={styles.backgroundImage}>
          
          <Image
            source={require("./assets/lifewardlogo.png")}
            style={styles.image}
          />
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.textButton}> Get Started</Text>
            </TouchableOpacity>
            <StatusBar style='auto' />
        </ImageBackground>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#693096",
  },
  buttonStyle: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,

  },
  textButton: {
    color: "#693096",
    fontSize: 32,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});
