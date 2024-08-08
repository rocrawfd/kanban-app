import { Image, Text, TouchableOpacity, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthModal from "@/components/AuthModal";

export default function Index() {

  function logIn (){
    
  }

  return (
    <View style={styles.container}>
      <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/5065/5065589.png"}} style={styles.image}/>
      <Text style={styles.titleText}>Kanban</Text>
      <Text style={styles.introText}>Organise your life</Text>
      <Image source={{uri: "https://content.kumospace.com/hubfs/What-Is-a-Kanban-Board-and-How-to-Use-It-Effectively-in-%202023.jpg"}} style={styles.manImage}/>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>{logIn}}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.btnText, { color: "darkcyan" }]}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Continue without logging in <Text style={[styles.bottomText, {fontSize: 15, textDecorationLine: "underline"}]}>here...</Text>
        </Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "cornflowerblue",
    paddingTop: 10,
  },
  titleText: { 
    color: "white",
    fontWeight: "600",
    fontSize: 80,
    bottom: 100,
    shadowColor: "black",
    shadowOpacity: 100,
    shadowRadius: 6
  },
  image: {
    width: 200, 
    height: 200,
    top: 50
  },
  introText: { 
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    paddingBottom: 20,
    bottom: 20
  },
  manImage: {
    height: 150,
    width: 350,
    borderRadius: 15,
    bottom: 20
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 50
  },
  button: {
    borderRadius: 10,
    width: 350,
    height: 50,
    shadowColor: "black",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9
  },
  btnText: {
    fontWeight: "600",
    fontSize: 20,
    color: "cornflowerblue"
  },
  bottomText: {
    top: 10,
    color: "white"
  }
});
