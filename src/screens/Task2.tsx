import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignUpTemplate = {
  name: { value: '', error: '' },
  email: { value: '', error: '' },
  phoneNumber: { value: '', error: '' },
  password: { value: '', error: '' },
  confirmPassword: { value: '', error: '' },
};

// const SignUpTemplateError = {
//   name: '',
//   email: '',
//   phoneNumber: '',
//   password: '',
//   confirmPassword: '',
// };
const Task2 = () => {
  const [signUpForm, setsignUpForm] = useState({ ...SignUpTemplate });
  const [loading, setLoading] = useState(false);

  const handleFormError = (key: string, value: string) => {
    let error = '';
    //data validation
    if (key === 'name') {
      if (value.length < 3) {
        error = 'Name must be at least 3 characters long ';
      }
    } else if (key === 'email') {
      if (value.includes('@gmail.com')) {
        error = 'Email must be valid ';
      }
    } else if (key === 'phoneNumber') {
      if (value.length !== 10) {
        error = 'Name must be at  10 characters only ';
      }
    } else if (key === 'password') {
      if (value.length < 6) {
        error = 'Name must be at least 6 characters long ';
      }
    } else if (key === 'confirmPassword') {
      if (value !== signUpForm.password.value) {
        error = 'Name must be at least 6 characters long ';
      }
    }

    return error;
  };

  const handleForm = (key: string, value: string) => {
    let currentSignUpForm: any = { ...setsignUpForm };
    currentSignUpForm[key]['value'] = value;
    currentSignUpForm[key]['error'] = handleFormError(key, value);

    setsignUpForm(currentSignUpForm);
  };

  useEffect(() => {
    console.log('signupform', signUpForm);
  }, [signUpForm]);

  const extractFormData = () => {
    let data: any = {};
    Object.entries(signUpForm).forEach(([key, value]) => {
      data[key] = value.value;
    });
    delete data['confirmPassword'];
    return data;
  };

  const postUser = async (data: any) => {
    try {
      const res = await axios.post('http://localhost:3000/users', data, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': 'dafdsafdsafsa',
        },
      });
      return res;
    } catch (err) {
      return err;
    }
  };

  const handleSubmit = async () => {
    console.log('handleSignupform', signUpForm);
    const data = extractFormData();

    setLoading(true);

    try {
      const response: any = await postUser(data);
      console.log('handleSubmit-response', response);
      if (response.status === 200) {
        setLoading(false);
        Alert.alert('Success', 'User created succesfully')
      } else {
        throw response;
      }
    } catch (error: any) {
      setTimeout(() => {
        setLoading(false);
        Alert.alert('error', error.message)
      }, 5000);
    }
  };

  return (
    <View style={styles.conatiner}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#000000"
          style={{ marginVertical: 70, marginHorizontal: 20 }}
        />
      ) : (
        <View style={styles.FormContainer}>
          <Text style={styles.heading}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={signUpForm.name.value}
            onChangeText={text => handleForm('name', text)}
          />
          <Text style={styles.error}>{signUpForm.name.error}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={signUpForm.email.value}
            onChangeText={text => handleForm('email', text)}
          />
          <Text style={styles.error}>{signUpForm.email.error}</Text>

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={signUpForm.phoneNumber.value}
            onChangeText={text => handleForm('phoneNumber', text)}
          />
          <Text style={styles.error}>{signUpForm.phoneNumber.error}</Text>

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={signUpForm.password.value}
            onChangeText={text => handleForm('password', text)}
          />
          <Text style={styles.error}>{signUpForm.password.error}</Text>

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={signUpForm.confirmPassword.value}
            onChangeText={text => handleForm('confirmPassword', text)}
          />
          <Text style={styles.error}>{signUpForm.confirmPassword.error}</Text>

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    marginTop: 4,
    marginBottom: 30,
    marginHorizontal: 3,
    color: 'red',
  },

  FormContainer: {
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  heading: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#aaa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  btnContainer: {
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
});
