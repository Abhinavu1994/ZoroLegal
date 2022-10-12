import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  isDarkMode,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const App = props => {
  const [rtoService, setrtoService] = useState(false);
  const slides = [
    {
      key: 1,
      title: 'Title 1',

      image: require('../src/groupmain.png'),

      image1: require('../src/girl.png'),
      image2: require('../src/logo.png'),
    },
    {
      key: 2,
      title: 'Title 2',

      image: require('../src/groupmain.png'),
      image1: require('../src/girl.png'),
      image2: require('../src/logo.png'),
    },
    {
      key: 3,
      title: 'Rocket guy',

      image: require('../src/groupmain.png'),
      image1: require('../src/girl.png'),
      image2: require('../src/logo.png'),
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View style={{marginTop: 20, height: 200}}>
        <LinearGradient
          colors={['#B7E7FF', '#FAFFAE', 'transparent']}
          style={styles.linearGradient}>
          <ImageBackground
            source={require('../src/girl.png')}
            resizeMode="contain"
            style={{
              height: 250,
              width: '100%',
              marginLeft: 40,
              marginTop: -41,
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
                marginTop: 10,
                marginLeft: -20,
              }}>
              Changing How People
            </Text>
            <Text
              style={{
                width: '70%',
                fontSize: 20,
                resizeMode: 'contain',
                marginTop: 10,
                marginLeft: -20,
                fontWeight: '800',
              }}>
              get legal help
            </Text>
            <Text
              style={{
                width: '70%',
                fontSize: 15,
                resizeMode: 'contain',
                marginTop: 10,
                marginLeft: -20,
              }}>
              We bring together huge network of brillient professionals
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
        style={{backgroundColor: '#E5E5E5', height: '100%', width: '100%'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              height: 60,
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 60,
                width: '70%',

                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View>
                <Image
                  style={{
                    width: 37,
                    height: 37,
                    marginLeft: 24,
                    // marginTop: 10,
                    alignSelf: 'flex-start',

                    resizeMode: 'contain',
                  }}
                  source={require('../src/account.png')}></Image>
              </View>
              <Image
                style={{marginLeft: -15, marginBottom: 20}}
                source={require('../src/Ellipse145.png')}></Image>
              <View>
                <Text style={{fontSize: 20, marginLeft: -10, color: '#3B414A'}}>
                  Alix Woolley
                </Text>
                <Text
                  style={{
                    fontSize: 15,

                    color: '#A6ABB3',
                  }}>
                  @alixwoolley
                </Text>
              </View>
              <Image style={{}} source={require('../src/hand.png')}></Image>
            </View>
            <View
              style={{
                height: 60,
                width: '30%',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 20,
                }}
                source={require('../src/vector.png')}></Image>
            </View>
          </View>
          <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            showDoneButton={false}
            showNextButton={false}
          />

          <Text style={styles.text}>Popular Services</Text>
          <View style={styles.mainview}>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../src/Groups1.png')}
                />
              </View>
              <Text style={styles.ServiceText}>Pan Card</Text>
            </View>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../src/Groups2.png')}></Image>
              </View>
              <Text style={styles.ServiceText}>Passport</Text>
            </View>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 35, width: 25}}
                  source={require('../src/Groups3.png')}></Image>
              </View>
              <Text style={styles.ServiceText}>Driving License</Text>
            </View>
          </View>
          <View style={styles.mainview}>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../src/Groups4.png')}
                />
              </View>
              <Text style={styles.ServiceText}>Gst Filling</Text>
            </View>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../src/Groups5.png')}></Image>
              </View>
              <Text style={styles.ServiceText}>Itr Filling</Text>
            </View>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../src/Groups6.png')}></Image>
              </View>
              <Text style={styles.ServiceText}>MSME</Text>
            </View>
          </View>
          <View style={styles.mainview}>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 30, width: 25}}
                  source={require('../src/Groups7.png')}
                />
              </View>
              <Text style={styles.ServiceText}>FSSAI</Text>
            </View>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../src/Groups8.png')}></Image>
              </View>
              <Text style={styles.ServiceText}>Company</Text>
            </View>
            <View style={styles.child}>
              <View style={styles.baby}>
                <Image
                  style={{height: 30, width: 25}}
                  source={require('../src/Groups9.png')}></Image>
              </View>
              <Text style={styles.ServiceText}>Lawyer Reg.</Text>
            </View>
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
                  source={require('../src/buttons/Groupos1.png')}></Image>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  color: '#3B414A',
                }}>
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
                source={require('../src/buttons/corner.png')}></Image>
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
            <TouchableOpacity
              onPress={() => setrtoService(!rtoService)}
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
                  source={require('../src/buttons/truck.png')}></Image>
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
            </TouchableOpacity>
            <View
              style={{
                height: 80,
                width: '20%',

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  tintColor: rtoService ? 'white:' : 'white',
                }}
                source={
                  rtoService
                    ? require('../src/buttons/Vector1.png')
                    : require('../src/buttons/corner.png')
                }></Image>
            </View>
          </View>
          {rtoService ? (
            <>
              <View style={styles.mainview}>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../src/Grouprto1.png')}
                    />
                  </View>
                  <Text style={styles.ServiceText}>Driving License</Text>
                </View>
                <View style={styles.child}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Chart')}
                    style={styles.baby}>
                    <Image
                      style={{height: 20, width: 30}}
                      source={require('../src/Grouprto2.png')}></Image>
                  </TouchableOpacity>
                  <Text style={styles.ServiceText}>
                    Learner Driving License
                  </Text>
                </View>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 30, width: 20}}
                      source={require('../src/Grouprto3.png')}></Image>
                  </View>
                  <Text style={styles.ServiceText}>
                    Commercial Driving License
                  </Text>
                </View>
              </View>
              <View style={styles.mainview}>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 30, width: 20}}
                      source={require('../src/Grouprto4.png')}
                    />
                  </View>
                  <Text style={styles.ServiceText}>
                    International Driving License
                  </Text>
                </View>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../src/Grouprto5.png')}></Image>
                  </View>
                  <Text style={styles.ServiceText}>
                    Registration Of Vehicles
                  </Text>
                </View>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../src/Grouprto6.png')}></Image>
                  </View>
                  <Text style={styles.ServiceText}>
                    Re-Registration of Vehicles
                  </Text>
                </View>
              </View>
              <View style={styles.mainview}>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../src/Grouprto7.png')}
                    />
                  </View>
                  <Text style={styles.ServiceText}>Road Tax Payment</Text>
                </View>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../src/Grouprto8.png')}></Image>
                  </View>
                  <Text style={styles.ServiceText}>Audio Tax Payment</Text>
                </View>
                <View style={styles.child}>
                  <View style={styles.baby}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../src/Grouprto9.png')}></Image>
                  </View>
                  <Text style={styles.ServiceText}>
                    Fitness Certificate For Commercial
                  </Text>
                </View>
              </View>
            </>
          ) : null}
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
                  source={require('../src/buttons/Group1.png')}></Image>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  color: '#3B414A',
                }}>
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
                source={require('../src/buttons/corner.png')}></Image>
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
                  source={require('../src/buttons/Group2.png')}></Image>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  color: '#3B414A',
                }}>
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
                source={require('../src/buttons/corner.png')}></Image>
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
                  source={require('../src/buttons/Group3.png')}></Image>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  color: '#3B414A',
                }}>
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
                source={require('../src/buttons/corner.png')}></Image>
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
                  source={require('../src/buttons/Group4.png')}></Image>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 20,
                  fontFamily: 'Poppins',
                  color: '#3B414A',
                }}>
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
                source={require('../src/buttons/corner.png')}></Image>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    height: 100,
    width: '100%',
    marginTop: 10,

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
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
  child: {
    width: '33.33%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',

    resizeMode: 'contain',
  },
  baby: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#E9ECF2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  ServiceText: {
    marginTop: 10,
    color: '#3B414A',
    textAlign: 'center',
  },
});

export default App;
