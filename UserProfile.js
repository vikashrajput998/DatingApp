import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');

function UserProfile(props) {
  return (
    <ImageBackground
      source={require('./Assets/Dbk.jpeg')}
      style={{height, width}}>
      <View
        style={{
          marginTop: -20,
          width,
          height: height * 0.5,
          backgroundColor: 'rgba(22,23,23,0.5)',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          shadowColor: 'rgba(22,23,23,0.9)',
          shadowOffset: {height: 15},
          shadowOpacity: 5,
          elevation: 3,
        }}>
        <View
          style={{
            marginTop: height * 0.07,
            width: width * 1,
            height: height * 0.06,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', padding: 5}}
              onPress={() => props.navigation.goBack()}>
              <AntIcon
                name="arrowleft"
                style={{fontSize: height * 0.05, color: 'white'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              //  backgroundColor: 'pink',
              width: width * 0.8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: 'white',
              }}>
              All Details
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.95,
            height: height * 0.2,
            // backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // flexDirection: 'row',
          }}>
          <View
            style={{
              //   marginTop: 10,
              width: width * 0.4,
              height: height * 0.18,
              //   backgroundColor: 'pink',
              borderRadius: 100,
              borderWidth: 4,
              borderColor: 'white',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.3,
                height: height * 0.13,
                alignSelf: 'center',
              }}
              source={require('./Assets/prf.png')}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.85,
            height: height * 0.05,
            //  backgroundColor: 'pink',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: width * 0.8,
              height: height * 0.05,
              //    backgroundColor: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              color: 'red',
            }}>
            Vikas Kumar
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.89,
            height: height * 0.1,
            // backgroundColor: 'pink',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: width * 0.88,
              height: height * 0.1,
            //   backgroundColor: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              color: 'green',
            }}>
            It work on professional IT company in India.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
export default UserProfile;
