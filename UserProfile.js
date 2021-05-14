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
          height: height * 0.55,
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
              // backgroundColor: 'pink',
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
              Details
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.95,
            height: height * 0.17,
            // backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: width * 0.37,
              height: height * 0.16,
              //   backgroundColor: 'pink',
              borderRadius: 100,
              borderWidth: 4,
              borderColor: 'white',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: width * 0.28,
                height: height * 0.13,
                alignSelf: 'center',
              }}
              source={require('./Assets/prf.png')}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            width: width * 0.85,
            height: height * 0.04,
            // backgroundColor: 'pink',
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
            height: height * 0.08,
            // backgroundColor: 'pink',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              width: width * 0.89,
              height: height * 0.08,
              // backgroundColor: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
            }}>
            It work on professional IT company in India.
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            width: width * 0.98,
            height: height * 0.08,
            // backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('UserDetails')}>
            <View
              style={{
                marginLeft: 2,
                width: width * 0.32,
                height: height * 0.07,
                backgroundColor: 'rgba(220, 231, 117, 0.3)',
                borderWidth: 3,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  width: width * 0.32,
                  height: height * 0.04,
                  fontSize: 24,
                  fontWeight: 'bold',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Approach
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 2,
              width: width * 0.32,
              height: height * 0.07,
              backgroundColor: 'rgba(220, 231, 117, 0.3)',
              borderWidth: 3,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                width: width * 0.32,
                height: height * 0.04,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
              }}>
              Shortlist
            </Text>
          </View>
          <View
            style={{
              marginLeft: 2,
              width: width * 0.32,
              height: height * 0.07,
              backgroundColor: 'rgba(220, 231, 117, 0.3)',
              borderWidth: 3,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                width: width * 0.32,
                height: height * 0.04,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
              }}>
              Rejected
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          width: width * 0.95,
          height: height * 0.42,
          backgroundColor: 'rgba(220, 231, 117, 0.3)',
          alignSelf: 'center',
          alignItems: 'center',
          borderWidth: 3,
          borderRadius: 10,
        }}>
        <View
          style={{
            marginTop: 10,
            width: width * 0.9,
            height: height * 0.11,
            //  backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: 'rgba(22,23,23,0.9)',
            shadowOffset: {width: 2, height: 7},
            shadowOpacity: 3,
            elevation: 3,
          }}>
          <View
            style={{
              marginLeft: 7,
              width: width * 0.42,
              height: height * 0.09,
              backgroundColor: 'rgba(217, 217, 217, 0.7)',
              borderRadius: 10,
              borderWidth: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: width * 0.4,
                height: height * 0.033,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                // backgroundColor: 'white',
              }}>
              Caste :
            </Text>
            <Text
              style={{
                marginTop: 3,
                width: width * 0.4,
                height: height * 0.035,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Hindu
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              width: width * 0.42,
              height: height * 0.09,
              backgroundColor: 'rgba(217, 217, 217, 0.7)',
              borderRadius: 10,
              borderWidth: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: width * 0.4,
                height: height * 0.033,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Height :
            </Text>
            <Text
              style={{
                marginTop: 3,
                width: width * 0.4,
                height: height * 0.035,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              5.0 ft.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            width: width * 0.9,
            height: height * 0.11,
            // backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: 'rgba(22,23,23,0.9)',
            shadowOffset: {width: 2, height: 7},
            shadowOpacity: 3,
            elevation: 3,
          }}>
          <View
            style={{
              marginLeft: 7,
              width: width * 0.42,
              height: height * 0.09,
              backgroundColor: 'rgba(217, 217, 217, 0.7)',
              borderRadius: 10,
              borderWidth: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: width * 0.4,
                height: height * 0.033,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                // backgroundColor: 'white',
              }}>
              Caste :
            </Text>
            <Text
              style={{
                marginTop: 3,
                width: width * 0.4,
                height: height * 0.035,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Hindu
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              width: width * 0.42,
              height: height * 0.09,
              backgroundColor: 'rgba(217, 217, 217, 0.7)',
              borderRadius: 10,
              borderWidth: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: width * 0.4,
                height: height * 0.033,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Height :
            </Text>
            <Text
              style={{
                marginTop: 3,
                width: width * 0.4,
                height: height * 0.035,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              5.0 ft.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            width: width * 0.9,
            height: height * 0.11,
            // backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: 'rgba(22,23,23,0.9)',
            shadowOffset: {width: 2, height: 7},
            shadowOpacity: 3,
            elevation: 3,
          }}>
          <View
            style={{
              marginLeft: 7,
              width: width * 0.42,
              height: height * 0.09,
              backgroundColor: 'rgba(217, 217, 217, 0.7)',
              borderRadius: 10,
              borderWidth: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: width * 0.4,
                height: height * 0.033,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
                // backgroundColor: 'white',
              }}>
              Caste :
            </Text>
            <Text
              style={{
                marginTop: 3,
                width: width * 0.4,
                height: height * 0.035,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Hindu
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              width: width * 0.42,
              height: height * 0.09,
              backgroundColor: 'rgba(217, 217, 217, 0.7)',
              borderRadius: 10,
              borderWidth: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: width * 0.4,
                height: height * 0.033,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Height :
            </Text>
            <Text
              style={{
                marginTop: 3,
                width: width * 0.4,
                height: height * 0.035,
                fontSize: 25,
                fontWeight: 'bold',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              5.0 ft.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
export default UserProfile;
