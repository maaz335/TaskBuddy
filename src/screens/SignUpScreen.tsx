import { Image, Pressable, Text, View } from 'react-native';
import styles from '../components/styles';
import { useState } from 'react';
import TextField from '../components/textInput';
import Images from '../literals/images';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.Container}>
      <Image source={Images.SignUp} style={styles.ScreenTopImage} />

      <View>
        <TextField name={name} setName={setName} placeholder="Name" />
        <TextField name={phone} setName={setPhone} placeholder="Phone Number" />
        <TextField
          name={username}
          setName={setUserName}
          placeholder="Username"
        />
        <TextField
          name={email}
          setName={setEmail}
          placeholder="Email Address"
        />
        <TextField
          name={password}
          setName={setPassword}
          placeholder="Password"
        />
        <TextField
          name={confirmPassword}
          setName={setConfirmPassword}
          placeholder="Confirm Password"
        />
        <Pressable style={styles.SignUpButton}>
          <Text style={styles.SignUpButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}
