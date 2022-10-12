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

const Order = props => {
  return (
    <SafeAreaView style={{backgroundColor: '#47455A', flex: 1}}>
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
              tintColor: '#ffff',
            }}
            source={require('../src/Vectoraerrow.png')}></Image>
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            width: '65%',

            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, marginLeft: 10, color: '#ffff'}}>
            Order Details
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={['#B7E7FF', '#F5FAD6', '#ffff']}
        style={{
          height: 368,
          width: '90%',
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 29,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 20,
            opacity: 0.5,
          }}>
          Order Name
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 5,
            fontWeight: '600',
          }}>
          Private limited company registration
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 20,
            opacity: 0.5,
          }}>
          Order Date
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 5,
          }}>
          04 Oct,2022
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 20,
            opacity: 0.5,
          }}>
          Order Status
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#107BB7',
            marginLeft: 20,
            marginTop: 5,
          }}>
          In progress
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 20,
            opacity: 0.5,
          }}>
          Amout
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 5,
          }}>
          INR 7999.00
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 20,
            opacity: 0.5,
          }}>
          Payment Status
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'red',
            marginLeft: 20,
            marginTop: 5,
          }}>
          Pending
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 20,
            opacity: 0.5,
          }}>
          Payment Method
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#47455A',
            marginLeft: 20,
            marginTop: 5,
          }}>
          Master Card
        </Text>
      </LinearGradient>
      <View
        style={{
          height: 166,
          width: '90%',
          backgroundColor: '#ffff',
          alignSelf: 'center',
          borderRadius: 26,
          position: 'relative',
          marginTop: 10,
        }}>
        <View
          style={{
            height: 40,
            width: '90%',

            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '50%'}}>
            <Text style={{opacity: 0.5, fontSize: 14}}>Applicant Name</Text>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 14, fontWeight: '600', marginRight: 10}}>
              Allix Woolley
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 40,
            width: '90%',

            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '50%'}}>
            <Text style={{opacity: 0.5, fontSize: 14}}>City</Text>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 14, fontWeight: '600', marginRight: 10}}>
              Torrento
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 40,
            width: '90%',

            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '50%'}}>
            <Text style={{opacity: 0.5, fontSize: 14}}>Document Upload</Text>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 14, fontWeight: '600', marginRight: 10}}>
              Pancard
            </Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <LinearGradient
            colors={['#B7E7FF', '#ffff']}
            style={{
              height: 55,
              width: '80%',

              justifyContent: 'center',
              borderRadius: 13,
              alignSelf: 'center',
              borderWidth: 0.5,
              borderColor: '#F2F4F8',
              marginTop: 40,
              alignItems: 'center',
            }}>
            <Text style={{color: '#3B414A', fontSize: 26}}>Back To Home</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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

export default Order;
