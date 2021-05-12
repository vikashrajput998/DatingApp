import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');
function LoginPage (props) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('./Assets/Dbk.jpeg')}
          style={{flex: 1}}>
          <View
            style={{
              width,
              height: height * 0.08,
              // backgroundColor: 'pink',
              alignContent: 'center',
              marginTop: height * 0.03,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                padding: 5,
                color: 'black',
                alignSelf: 'flex-start',
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: 50,
              }}>
              Login
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('signUp')}>
              <View
                style={{
                  width: width * 0.62,
                  alignItems: 'center',
                  height: height * 0.1,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    alignSelf: 'flex-end',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 35,
                    color: 'gray',
                  }}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: height * 0.015,
              width: width * 0.55,
              height: height * 0.24,
              // backgroundColor: 'pink',
              alignSelf: 'center',
              justifyContent: 'center',
              shadowColor: '#F0F4C3',
              shadowOffset: {width: 20, height: 10},
              shadowOpacity: 10,
              elevation: 3,
            }}>
            <ImageBackground
              source={require('./Assets/hrtt.png')}
              style={{
                width: width * 0.52,
                height: height * 0.22,
                alignSelf: 'center',
              }}></ImageBackground>
          </View>
          <View
            style={{
              marginTop: 10,
              width: width * 0.85,
              height: height * 0.385,
              // backgroundColor: '#4D4D4D',
              alignSelf: 'center',
              borderTopColor: 'black',
              borderTopWidth: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 10,
            }}>
            <View
              style={{
                marginTop: 20,
                width: width * 0.8,
                height: height * 0.09,
                // backgroundColor: 'pink',
                alignSelf: 'center',
                justifyContent: 'center',
                borderBottomWidth: 5,
                borderBottomColor: 'black',
                borderLeftWidth: 5,
                borderLeftColor: 'black',
                borderRightWidth: 5,
                borderRightColor: 'black',
                borderRadius: 20,
              }}>
              <TextInput
                style={{
                  marginTop: 1,
                  alignSelf: 'center',
                  width: width * 0.7,
                  height: height * 0.07,
                  borderBottomColor: '#F0F4',
                  borderBottomWidth: 4,
                }}
                placeholder="Enter Your Email"
                placeholderTextColor="black"
              />
            </View>
            <View
              style={{
                marginTop: 20,
                width: width * 0.8,
                height: height * 0.09,
                // backgroundColor: 'pink',
                alignSelf: 'center',
                justifyContent: 'center',
                borderBottomWidth: 5,
                borderBottomColor: 'black',
                borderLeftWidth: 5,
                borderLeftColor: 'black',
                borderRightWidth: 5,
                borderRightColor: 'black',
                borderRadius: 20,
              }}>
              <TextInput
                style={{
                  marginTop: 1,
                  alignSelf: 'center',
                  width: width * 0.7,
                  height: height * 0.07,
                  borderBottomColor: '#F0F4',
                  borderBottomWidth: 4,
                }}
                placeholder="Enter Your Password"
                placeholderTextColor="black"
              />
            </View>
            <View
              style={{
                marginTop: 20,
                width: width * 0.8,
                height: height * 0.09,
                // backgroundColor: 'pink',
                alignSelf: 'center',
                justifyContent: 'center',
                borderBottomWidth: 5,
                borderBottomColor: 'black',
                borderLeftWidth: 5,
                borderLeftColor: 'black',
                borderRightWidth: 5,
                borderRightColor: 'black',
                borderRadius: 20,
              }}>
              <TextInput
                style={{
                  marginTop: 1,
                  alignSelf: 'center',
                  width: width * 0.7,
                  height: height * 0.07,
                  borderBottomColor: '#F0F4',
                  borderBottomWidth: 4,
                }}
                placeholder="Confirm Password"
                placeholderTextColor="black"
              />
            </View>
          </View>
          <View
            style={{
              padding: 5,
              marginTop: 10,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: width * 0.9,
              height: height * 0.09,
              //    backgroundColor: 'pink',
              //   flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('details')}
              style={{
                //   marginLeft: 1,
                padding: 10,
                backgroundColor: '#F0F4C3',
                height: height * 0.07,
                width: width * 0.85,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.04,
                borderWidth: 2,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  
}
export default LoginPage;
