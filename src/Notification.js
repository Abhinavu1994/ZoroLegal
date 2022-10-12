import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        }}>
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
            <Text style={{fontSize: 20, marginLeft: 5, color: '#3B414A'}}>
              Payments
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 200,
            height: 40,
            marginLeft: 20,
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 24}}>Payment </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Method</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 67,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: '#3B414A',
          }}>
          <View
            style={{
              width: '60%',
              height: 67,
              justifyContent: 'center',
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Pay With Card
            </Text>

            <View
              style={{
                height: 67,
                width: '30%',
                borderRadius: 20,
                marginLeft: -10,
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 30, width: 40, resizeMode: 'contain'}}
                source={require('../src/payment/Grouppwc.png')}></Image>
            </View>
          </View>
          <View
            style={{
              width: '40%',

              height: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{height: 30, width: 30, marginRight: 20}}
              source={require('../src/payment/Grouppwc1.png')}></Image>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 67,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            // backgroundColor: 'white',
            borderColor: '#EAEEF5',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <View
            style={{
              width: '60%',
              height: 67,
              justifyContent: 'center',
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              Pay With Wallet
            </Text>

            <View
              style={{
                height: 67,
                width: '30%',
                borderRadius: 20,
                marginLeft: 0,
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 30, width: 40, resizeMode: 'contain'}}
                source={require('../src/payment/Grouppww.png')}></Image>
            </View>
          </View>
          <View
            style={{
              width: '40%',

              height: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginRight: 20,
              }}
              source={require('../src/payment/Grouppwc1.png')}></Image>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 67,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: ' white',
            borderColor: '#EAEEF5',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <View
            style={{
              width: '60%',
              height: 67,
              justifyContent: 'center',
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              Pay With UPI
            </Text>

            <View
              style={{
                height: 67,
                width: '30%',
                borderRadius: 20,
                marginLeft: -20,
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                source={require('../src/payment/Grouppwu.png')}></Image>
            </View>
          </View>
          <View
            style={{
              width: '40%',

              height: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{height: 30, width: 30, marginRight: 20}}
              source={require('../src/payment/Grouppwc1.png')}></Image>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 50,
            marginLeft: 20,
            alignContent: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'red',
            marginTop: 20,
          }}>
          <View
            style={{
              alignContent: 'flex-start',
              // backgroundColor: 'green',
              width: '60%',
            }}>
            <Text style={{fontSize: 20}}>Add New</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Payment Method
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor: 'green',
              width: '40%',
            }}>
            <Image
              style={{height: 32, width: 32, marginRight: 20}}
              source={require('../src/payment/Groupp+.png')}></Image>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 50,
            marginLeft: 20,
            alignContent: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'red',
            marginTop: 20,
          }}>
          <View
            style={{
              alignContent: 'flex-start',
              // backgroundColor: 'green',
              width: '60%',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 21, opacity: 0.5, color: '#3B414A'}}>
              Total
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor: 'green',
              width: '40%',
            }}>
            <Text style={{fontSize: 21, marginRight: 20}}>$35.00</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={{
            width: '90%',
            height: 55,
            backgroundColor: '#3B414A',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, color: 'white', fontFamily: 'poppins'}}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
