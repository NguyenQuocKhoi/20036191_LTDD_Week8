import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Screen2({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setpassWord] = useState("");
  const [phone, setPhone] = useState("");
  const addUser = (userName, password, phone) => {
    fetch("https://6549fd95e182221f8d524817.mockapi.io/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password, phone }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
      
    navigation.navigate("Screen1");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img1}
          source={require("../assets/img/Rectangle 19.png")}
        ></Image>
        <Text style={styles.textH}>Welcome</Text>
        <Text style={styles.text1H}>By signing in you are agreeing our </Text>
        <TouchableOpacity>
          <Text style={styles.text2H}>Term and privacy policy</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.textI}>
          <TextInput
            style={styles.textIC}
            placeholder="   Username" onChangeText={setUserName}
          ></TextInput>
          <Image
            style={styles.imgC1}
            source={require("../assets/img/mail.png")}
          ></Image>
        </View>

        <View style={styles.textI}>
          <TextInput
            style={styles.textIC}
            placeholder="   Password" onChangeText={setpassWord}
          ></TextInput>
          <Image
            style={styles.imgC1}
            source={require("../assets/img/lock.png")}
          ></Image>
        </View>

        <View style={styles.textI}>
          <TextInput style={styles.textIC} placeholder="   Phone" onChangeText={setPhone}>

          </TextInput>
          <Image
            style={styles.imgC1}
            source={require("../assets/img/phone.png")}
          ></Image>
        </View>
      </View>

      <View style={{ marginTop: "20px" }}>
        <TouchableOpacity onPress={() => {addUser(username, password, phone), navigation.navigate('Screen1')}}>
          <View style={styles.btnLogin}>
            <Text style={styles.textBtnLogin}>Register</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity>
                <View style={styles.btnRegis}>
                    <Text style={styles.textBtnRegis}>Register</Text>
                </View>
            </TouchableOpacity> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img1: {
    width: "365px",
    height: "147px",
    resizeMode: "contain",
    marginTop: "20px",
  },

  textH: {
    fontSize: "21px",
    fontWeight: "400",
    fontFamily: "Trebuchet MS",
    textAlign: "center",
    marginTop: "10px",
  },

  text1H: {
    fontFamily: "Sakkal Majalla",
    fontSize: "16px",
    fontWeight: "400",
    color: "#6B5E5E",
    textAlign: "center",
    marginTop: "10px",
  },

  text2H: {
    fontFamily: "Sakkal Majalla",
    fontSize: "16px",
    fontWeight: "400",
    color: "#036BB9",
    textAlign: "center",
    marginTop: "10px",
  },

  textI: {
    width: "312px",
    height: "47px",
    borderWidth: "1px",
    borderRadius: "9px",
    borderColor: "#CCC9C9",
    backgroundColor: "#F9F9F9",
    alignSelf: "center",
    marginTop: "10px",
    alignItems: "center",
  },

  textIC: {
    width: "312px",
    height: "47px",
    fontFamily: "Trebuchet MS",
    // color: "#C4C4C4",
    fontSize: "15px",
    fontWeight: "400",
  },

  imgC1: {
    width: "24px",
    height: "24px",
    resizeMode: "contain",
    position: "absolute",
    marginTop: "12px",
    marginLeft: "250px",
  },

  btnLogin: {
    backgroundColor: "#0386D0",
    width: "151px",
    height: "45px",
    borderRadius: "27px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20px",
    alignSelf: "center",
  },

  textBtnLogin: {
    fontSize: "14px",
    color: "#FFFFFF",
    fontWeight: "400px",
  },

  btnRegis: {
    backgroundColor: "#FFFFFF",
    width: "151px",
    height: "45px",
    borderRadius: "27px",
    borderColor: "#036BB9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "2px",
    marginLeft: "10px",
  },

  textBtnRegis: {
    fontSize: "14px",
    color: "#0386D0",
    fontWeight: "400px",
  },
});
