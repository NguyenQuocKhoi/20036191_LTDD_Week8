import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default function Screen3({ navigation, route }) {
  const user = route.params.user;
  const [data, setData] = useState([]);
  const [note, setNote] = useState("");
  const apiUrl = "https://6549fd95e182221f8d524817.mockapi.io/user";
  useEffect(() => {
    fetch(`${apiUrl}/${user.id}/note`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  const handleAddNote = async () => {
    fetch(`${apiUrl}/${user.id}/note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: note }),
    })
      .then((response) => response.json())
      .then((json) => {
        setData([...data, json]);
      })
      .catch((error) => console.error(error));
  };
  const handleEditNote = async (id) => {
    const response = await fetch(`${apiUrl}/${user.id}/note/${id}`).then(
      (response) => response.json()
    );
    const editNote = await response.name;
    setNote(editNote);
  };
  const handleDeleteNote = async (id) => {
    await fetch(`${apiUrl}/${user.id}/note/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textH}>List Note</Text>
      </View>

      <View style={styles.textI}>
        <TextInput
          style={styles.textIC}
          value={note}
          onChangeText={setNote}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={() => {
          handleAddNote();
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.textBtn}>Add Note</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.note1}>
              <Text style={styles.textNote}>{item.name}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => handleEditNote(item.id)}>
                  <Text style={styles.textEdit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteNote(item.id)}>
                  <Text style={styles.textDel}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{ marginBottom: "150px" }}
        onPress={() => {
          navigation.navigate("Screen1");
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.textBtn}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  textH: {
    fontSize: "30px",
    fontWeight: "400",
    fontFamily: "Trebuchet MS",
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

  btn: {
    marginTop: "10px",
    width: "312px",
    height: "47px",
    backgroundColor: "#0386D0",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  },

  textBtn: {
    fontSize: "20px",
    color: "#FFFFFF",
    fontWeight: "400px",
  },

  note1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  textNote: {
    fontSize: "20px",
    fontWeight: "400px",
    marginLeft: "25px",
  },
  textEdit: {
    fontSize: "20px",
    color: "blue",
    fontWeight: "400px",
    marginRight: "15px",
  },
  textDel: {
    fontSize: "20px",
    color: "red",
    fontWeight: "400px",
    marginRight: "25px",
  },
});
