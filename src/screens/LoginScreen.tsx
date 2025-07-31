import { Image, Pressable, Text, View } from 'react-native';
import styles from '../components/styles';
import Images from '../literals/images';
import { useState } from 'react';
import TextField from '../components/textInput';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.Container}>
      <Image source={Images.Login} style={styles.ScreenTopImage} />

      <View>
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
        <Pressable style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
