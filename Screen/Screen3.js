
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native';

export default function Screen3() {
  return (
    <View style={styles.container}>
        <View>
            
            <Text style={styles.textH}>List Note</Text>

        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  textH:{
    fontSize:'30px',
    fontWeight:'400',
    fontFamily:'Trebuchet MS',
    textAlign:'center',
    marginTop:'10px',

  },



});
