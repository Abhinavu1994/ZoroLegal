import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Imagestyle,
  TextStyle,
  isDarkMode,
  Button,
  ImageBackground,
  s,
} from 'react-native';

const App = () => {
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something\n cool',
      image: require('../DemoProject/src/groupmain.png'),

      image1: require('../DemoProject/src/girl.png'),
      image2: require('../DemoProject/src/logo.png'),
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../DemoProject/src/groupmain.png'),
      image1: require('../DemoProject/src/girl.png'),
      image2: require('../DemoProject/src/logo.png'),
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'Changing how people get legal help.\nWe bring together huge network of brilliant professionals',
      image: require('../DemoProject/src/groupmain.png'),
      image1: require('../DemoProject/src/girl.png'),
      image2: require('../DemoProject/src/logo.png'),
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View style={{marginTop: 20, height: 200}}>
        <LinearGradient
          colors={['#B7E7FF', '#FAFFAE']}
          style={styles.linearGradient}>
          <ImageBackground
            source={require('../DemoProject/src/girl.png')}
            resizeMode="contain"
            style={{
              height: 250,
              width: '100%',
              marginLeft: 40,
              marginTop: -40,
            }}>
            <Image
              source={item.image2}
              style={{
                height: 60,
                width: 100,
                resizeMode: 'contain',
                marginTop: 30,
                marginLeft: -20,
              }}
            />
            <Text
              style={{
                width: '70%',
                fontSize: 20,
                resizeMode: 'contain',
                marginTop: 30,
              }}>
              {item.text}
            </Text>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />

      <ScrollView
        style={{backgroundColor: '#ffff', height: '100%', width: '100%'}}>
        <View>
          <Image
            style={{
              width: 37,
              height: 37,
              marginLeft: 24,
              marginTop: 13,
              resizeMode: 'contain',
            }}
            source={require('../DemoProject/src/account.png')}></Image>
          <Image
            style={{marginLeft: 40, marginTop: -50}}
            source={require('../DemoProject/src/Ellipse145.png')}></Image>
          <Image
            style={{marginTop: -10, marginLeft: 150}}
            source={require('../DemoProject/src/hand.png')}></Image>
          <Text style={{fontSize: 15, marginLeft: 70, marginTop: -20}}>
            Alix Woolley
          </Text>
          <Text
            style={{
              fontSize: 10,
              marginLeft: 70,
              color: 'gray',
              marginTop: 5,
            }}>
            @alixwoolley
          </Text>
          <Image
            style={{
              width: 30,
              height: 30,
              alignSelf: 'flex-end',
              marginTop: -30,
              margin: 10,
            }}
            source={require('../DemoProject/src/vector.png')}></Image>

          <AppIntroSlider renderItem={_renderItem} data={slides} />

          <Text style={styles.text}>Popular Services</Text>
          <View style={styles.imgview}>
            <Image source={require('../DemoProject/src/Groups1.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
          </View>
          <View style={styles.imgview}>
            <Image source={require('../DemoProject/src/Groups1.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
          </View>
          <View style={styles.imgview}>
            <Image source={require('../DemoProject/src/Groups1.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
          </View>
          <Text style={styles.text}>Our Services</Text>
          <View
            style={{
              height: 80,
              width: '90%',
              backgroundColor: '#F2F4F8',
              borderRadius: 20,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 80,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: '#F5B205',
                  borderRadius: 15,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../DemoProject/src/buttons/Groupos1.png')}></Image>
              </View>
              <Text
                style={{marginLeft: 20, fontSize: 20, fontFamily: 'Poppins'}}>
                Individual Services
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../DemoProject/src/buttons/corner.png')}></Image>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: '90%',
              backgroundColor: '#3B414A',
              borderRadius: 20,
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 80,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: '#C8ECFC',
                  borderRadius: 15,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../DemoProject/src/buttons/truck.png')}></Image>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  color: '#ffff',
                }}>
                RTO Services
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 20, width: 20, resizeMode: 'contain'}}
                source={require('../DemoProject/src/buttons/Vector1.png')}></Image>
            </View>
          </View>

          <View style={styles.imgview}>
            <Image source={require('../DemoProject/src/Groups1.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
          </View>
          <View style={styles.imgview}>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
          </View>
          <View style={styles.imgview}>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
            <Image source={require('../DemoProject/src/Groups3.png')}></Image>
          </View>
          <View style={styles.services}>
            <View
              style={{
                height: 80,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: '#107BB7',
                  borderRadius: 15,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../DemoProject/src/buttons/Group1.png')}></Image>
              </View>
              <Text
                style={{marginLeft: 20, fontSize: 20, fontFamily: 'Poppins'}}>
                Finencial Services
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../DemoProject/src/buttons/corner.png')}></Image>
            </View>
          </View>
          <View style={styles.services}>
            <View
              style={{
                height: 80,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: '#1E6F48',
                  borderRadius: 15,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../DemoProject/src/buttons/Group2.png')}></Image>
              </View>
              <Text
                style={{marginLeft: 20, fontSize: 20, fontFamily: 'Poppins'}}>
                Registrations Services
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../DemoProject/src/buttons/corner.png')}></Image>
            </View>
          </View>
          <View style={styles.services}>
            <View
              style={{
                height: 80,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: '#DD4D2D',
                  borderRadius: 15,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../DemoProject/src/buttons/Group3.png')}></Image>
              </View>
              <Text
                style={{marginLeft: 20, fontSize: 20, fontFamily: 'Poppins'}}>
                Legal Services
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../DemoProject/src/buttons/corner.png')}></Image>
            </View>
          </View>
          <View style={styles.services}>
            <View
              style={{
                height: 80,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  backgroundColor: '#71D2FC',
                  borderRadius: 15,
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../DemoProject/src/buttons/Group4.png')}></Image>
              </View>
              <Text
                style={{marginLeft: 20, fontSize: 20, fontFamily: 'Poppins'}}>
                Realestate Services
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../DemoProject/src/buttons/corner.png')}></Image>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    height: 100,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  linearGradient: {
    flex: 1,
    height: 250,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  text: {
    height: 28,
    width: 153,
    marginTop: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 20,
    color: '#3B414A',
  },
  services: {
    height: 80,
    width: '90%',
    backgroundColor: '#F2F4F8',
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default App;
