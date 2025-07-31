import { Image, Pressable, Text, View } from 'react-native';
import styles from '../components/styles';
import Images from '../literals/images';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.Container}>
      <Image source={Images.Logo} style={styles.ScreenTopImage} />
      <View style={styles.QuoteTextView}>
        <Text style={styles.QuoteText}>Here is your Task Buddy</Text>
        <Text style={styles.QuoteText}>to assist you on Managing Tasks</Text>
      </View>
      <View>
        <Pressable
          style={styles.LoginButton}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.LoginButtonText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.SignUpButton}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.SignUpButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}
