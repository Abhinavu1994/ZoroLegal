import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  placeholderText,
} from 'react-native';

const UselessTextInput = props => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
            width: '35%',

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
            width: '65%',

            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, marginLeft: 10, color: '#3B414A'}}>
            Card Details
          </Text>
        </View>
      </View>

      <Text
        style={{marginLeft: 20, fontSize: 18, marginTop: 10, color: '#3B414A'}}>
        Card Holders Name
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Name"
        value={text}
      />
      <Text style={{marginLeft: 20, fontSize: 18, color: '#3B414A'}}>
        Card Number
      </Text>
      <LinearGradient
        colors={['#CCEEF9', '#F1F9DA', '#F2F4F8']}
        style={styles.input}>
        <TextInput
          style={{
            color: '#3B414A',
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 16,
            lineHeight: 15,
            flex: 2,
          }}
          // style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="0000/0000/0000/0000"
          keyboardType="numeric"
          maxLength={16}></TextInput>
      </LinearGradient>

      <View></View>
      {/* <View>
        <Text style={{marginLeft: 20, fontSize: 18, color: '#3B414A'}}>
           Expiry Date
        </Text>
      </View> */}

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Order')}
        style={{
          height: 70,
          width: '90%',
          backgroundColor: '#3B414A',
          justifyContent: 'center',
          borderRadius: 20,
          alignSelf: 'center',

          marginTop: 40,
          alignItems: 'center',
        }}>
        <Text style={{color: '#C8ECFC', fontSize: 26}}>Submit</Text>
      </TouchableOpacity>
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
    color: '#3B414A',
    borderColor: '#EAEEF5',
  },
});

export default UselessTextInput;
