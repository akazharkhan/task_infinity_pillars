/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [DOB, setDOB] = useState();
  const [country, setCountry] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const onSubmit = () => {
    Alert.alert(
      'Input Datas:',
      `Name: ${name}\nEmail: ${email}\nDOB: ${DOB}\nCountry: ${country}\nPhone Number: ${phoneNumber}`,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.image}
            source={require('../image&icon/profile.png')}
          />
        </View>

        <View style={styles.TextConatiner}>
          <Text style={styles.text}>Samauel_ceaser</Text>
        </View>
        <View style={styles.TextConatiner1}>
          <Text style={styles.text1}>Personal Information</Text>
        </View>
        <TextInput
          value={name}
          onChangeText={(text: any) => setName(text)}
          style={styles.input}
          placeholder="Full Name"
        />
        <TextInput
          value={email}
          onChangeText={(text: any) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email Address"
        />
        <TextInput
          value={DOB}
          onChangeText={(text: any) => setDOB(text)}
          style={styles.input}
          placeholder="DOB"
        />
        <TextInput
          value={country}
          onChangeText={(text: any) => setCountry(text)}
          style={styles.input}
          placeholder="Country"
        />
        <TextInput
          value={phoneNumber}
          onChangeText={(text: any) => setPhoneNumber(text)}
          style={styles.input}
          placeholder="Phone Number*"
          keyboardType="numeric"
        />

        <View style={styles.btnContainer}>
          <Button onPress={onSubmit} color={'#B83333'} title="Next" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'rgb(240,239,239)',
    elevation: 1.5,
  },
  heading: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    padding: 8,
    borderColor: '#aaa',
    marginBottom: 15,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  btnContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'red',
  },
  button: {
    fontSize: 20,
  },
  ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -60,
    right: '40%',
    borderWidth: 1,
    borderRadius: 50,
    width: 100,
    height: 100,
    padding: 3,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  TextConatiner: {
    width: '100%',
    borderRadius: 1,
    marginBottom: 20,
    padding: 7,
    elevation: 2.6,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  text: {
    color: '#B83333',
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  TextConatiner1: {},
  text1: {
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default App;
