import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const {height, width} = Dimensions.get('window');
const DATA = [
  {
    name: 'Dinesh Chandra',
    age: 25,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Vikas Kumar',
    age: 21,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Happy Singh',
    age: 22,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Amit Kumar',
    age: 27,
    image: require('./Assets/prf.png'),
  },
  {
    name: 'Pawan Yadav',
    age: 24,
    image: require('./Assets/prf.png'),
  },
];

const details = (props) => {
  const Data = ({item, index}) => {
    console.log('item', item);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('profilePage')}>
        <View style={styles.item}>
          <Image style={{height: 105, width: 115}} source={item.image} />
          <View style={styles.viewType}>
            <Text style={styles.info}>Name:</Text>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.line}></View>
            <Text style={styles.info}>Age:</Text>
            <Text style={styles.ageType}>{item.age}</Text>
            <View style={styles.line}></View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
        }}>
        <View>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => props.navigation.goBack()}>
            <AntIcon name="bars" style={{fontSize: height * 0.05}} />
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
      <View style={{height: height * 0.87}}>
        <FlatList
          data={DATA}
          renderItem={Data}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#DCEDC8',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 5,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 5,
    elevation: 3,
    shadowRadius: 5,
  },
  title: {
    // backgroundColor: 'pink',
    width: width * 0.56,
    height: height * 0.04,
    fontSize: 22,
    textAlign: 'center',
    color: 'green',
  },
  viewType: {
    marginLeft: 5,
    // backgroundColor: 'white',
    width: width * 0.56,
    height: height * 0.14,
  },
  info: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 1,
    color: 'red',
  },
  line: {
    width: width * 0.55,
    height: height * 0.004,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  ageType: {
    marginTop: 1,
    // backgroundColor: 'pink',
    width: width * 0.56,
    height: height * 0.04,
    fontSize: 28,
    textAlign: 'center',
  },
});

export default details;
