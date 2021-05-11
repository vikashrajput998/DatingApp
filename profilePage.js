import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');
class profilePage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./Assets/Dbk.jpeg')}
        style={{height, width}}>
        <View
          style={{
            marginTop: height * 0.04,
            width: width * 1,
            height: height * 0.06,
            alignItems: 'center',
            flexDirection: 'row',
            //   justifyContent: 'center',
            //    backgroundColor: 'orange',
          }}>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', padding: 5}}
              onPress={() => this.props.navigation.goBack()}>
              <AntIcon name="arrowleft" style={{fontSize: height * 0.05}} />
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
                color: 'black',
              }}>
              Profile
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.95,
            height: height * 0.22,
            backgroundColor: 'white',
            // justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            flexDirection:'row'
          }}>
            <View style={{
              width: width * 0.45,
              height: height * 0.2,
              backgroundColor:'pink'
            }}></View>
          <View
            style={{
              marginLeft: 10,
              width: width * 0.45,
              height: height * 0.2,
              backgroundColor: 'pink',
              borderRadius: 100,
              borderWidth: 4,
              alignSelf: 'flex-end',
              justifyContent: 'center',
            }}>
            <EntypoIcon
              name="images"
              style={{fontSize: height * 0.15, alignSelf: 'auto'}}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: width * 0.95,
            height: height * 0.7,
            backgroundColor: '#DCEDC8',
            alignSelf: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderWidth: 5,
          }}>
          <View
            style={{
              marginTop: 20,
              width: width * 0.95,
              height: height * 0.09,
              // backgroundColor: 'pink',
              alignSelf: 'center',
              borderBottomColor: 'black',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderBottomWidth: 5,
              borderRightWidth: 5,
              borderLeftWidth: 5,
            }}>
            <View
              style={{
                marginTop: 5,
                width: width * 0.8,
                height: height * 0.075,
                // backgroundColor:'white',
                borderBottomWidth: 2,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  padding: 15,
                  width: width * 0.75,
                  height: height * 0.07,
                  //  backgroundColor: 'yellow',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'red',
                }}>
                Amit Kumar
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              width: width * 0.95,
              height: height * 0.17,
              // backgroundColor: 'pink',
              alignSelf: 'center',
              borderBottomColor: 'black',
              borderRadius: 25,
              borderWidth: 5,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 5,
                width: width * 0.2,
                height: height * 0.03,
                // backgroundColor: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Details :
            </Text>
            <View
              style={{
                marginTop: 5,
                width: width * 0.87,
                height: height * 0.112,
                // backgroundColor: 'white',
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  padding: 5,
                  width: width * 0.86,
                  height: height * 0.095,
                  //  backgroundColor: 'yellow',
                  textAlign: 'justify',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#33691E',
                }}>
                It work on professional IT company in India.
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              width: width * 0.95,
              height: height * 0.09,
              // backgroundColor: 'pink',
              alignSelf: 'center',
              alignItems: 'center',
              // borderWidth: 3,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: width * 0.42,
                height: height * 0.07,
                backgroundColor: '#B3E5FC',
                alignItems: 'center',
                // justifyContent: 'center',
                marginLeft: 14,
                borderTopLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderWidth: 5,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  padding: 5,
                  marginLeft: 5,
                  width: width * 0.23,
                  height: height * 0.05,
                  // backgroundColor: 'yellow',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Like
              </Text>
              <AntIcon name="like1" style={{fontSize: height * 0.04}} />
            </View>
            <View
              style={{
                width: width * 0.42,
                height: height * 0.07,
                backgroundColor: '#B3E5FC',
                alignItems: 'center',
                // justifyContent: 'center',
                marginLeft: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderWidth: 5,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  padding: 5,
                  marginLeft: 5,
                  width: width * 0.29,
                  height: height * 0.05,
                  // backgroundColor: 'yellow',
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Dislike
              </Text>
              <AntIcon name="dislike1" style={{fontSize: height * 0.04}} />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              width: width * 0.95,
              height: height * 0.18,
              backgroundColor: '#c1e1c5',
              alignSelf: 'center',
              // alignItems: 'center',
              borderWidth: 3,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginLeft: 5,
                marginTop: 5,
                width: width * 0.9,
                height: height * 0.06,
                // backgroundColor: 'white',
                fontWeight: 'bold',
                fontSize: 40,
                // color:'green'
              }}>
              Want to approach :
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  width: width * 0.42,
                  height: height * 0.07,
                  backgroundColor: '#7bdcb5',
                  alignItems: 'center',
                  marginLeft: 14,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderWidth: 5,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 1,
                    width: width * 0.4,
                    height: height * 0.05,
                    // backgroundColor: 'yellow',
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Yes
                </Text>
              </View>
              <View
                style={{
                  width: width * 0.42,
                  height: height * 0.07,
                  backgroundColor: '#7bdcb5',
                  alignItems: 'center',
                  marginLeft: 15,
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15,
                  borderWidth: 5,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 5,
                    width: width * 0.4,
                    height: height * 0.05,
                    // backgroundColor: 'yellow',
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  No
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default profilePage;
