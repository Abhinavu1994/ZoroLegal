import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker from 'react-native-document-picker';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const handleDocumentPicker = async () => {
  try {
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
const UselessTextInput = props => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={{backgroundColor: '#E5E5E5', flex: 1}}>
      <ScrollView>
        <View
          style={{
            height: 50,
            width: '100%',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              height: 50,
              width: '40%',

              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 12.1,
                width: 21.5,
                marginLeft: 20,
              }}
              source={require('../src/Vectoraerrow.png')}></Image>
          </TouchableOpacity>
          <View
            style={{
              height: 50,
              width: '60%',

              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, marginLeft: 10, color: '#3B414A'}}>
              Services
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins',
            color: '#3B414A',
            fontWeight: '600',
            fontSize: 28,
            marginLeft: 20,
            marginTop: 20,
          }}>
          Learners Driving License
        </Text>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 18,
            marginTop: 10,
            color: '#3B414A',
          }}>
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter Your Name"
          value={text}
          placeholderTextColor={'#3B414A'}
        />
        <Text style={{marginLeft: 20, fontSize: 18, color: '#3B414A'}}>
          Your City
        </Text>
        <LinearGradient
          colors={['#B7E7FF', '#F2F4F8', '#F2F4F8']}
          style={styles.input}>
          <TextInput
            // style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter Your City"
            keyboardType="ascii-capable"></TextInput>
        </LinearGradient>
        <Text style={{marginLeft: 20, fontSize: 18, color: '#3B414A'}}>
          Upload Documents
        </Text>
        <TouchableOpacity
          onPress={() => handleDocumentPicker()}
          style={{
            height: 40,
            width: '90%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignSelf: 'center',
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
            margin: 10,
            borderStyle: 'dashed',
            borderColor: '#EAEEF5',
          }}>
          <View
            style={{
              width: '60%',
              height: '100%',

              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 20, fontSize: 18}}>Choose A File</Text>
          </View>
          <View
            style={{
              width: '40%',
              // backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{height: 20, width: 30}}
              source={require('../src/folder.png')}></Image>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            //   backgroundColor: 'red',
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text style={{margin: 10, color: '#107BB7'}}>Pan Card</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{margin: 10, color: '#107BB7'}}>Id Card</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{margin: 10, color: '#107BB7'}}>Photo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notification')}
          style={{
            height: 55,
            width: '90%',
            backgroundColor: '#3B414A',
            justifyContent: 'center',
            borderRadius: 13,
            alignSelf: 'center',
            marginTop: 40,
            alignItems: 'center',
          }}>
          <Text style={{color: '#C8ECFC', fontSize: 26}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // color: '#3B414A',
    borderColor: '#EAEEF5',
  },
});
export default UselessTextInput;
// export default DocumentPicker;
