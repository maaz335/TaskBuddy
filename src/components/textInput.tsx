import { TextInput } from 'react-native';
import styles from './styles';

type TextFieldProps = {
  name: string;
  setName: (text: string) => void;
  placeholder: string;
};

const TextField = ({ name, setName, placeholder }: TextFieldProps) => {
  return (
    <TextInput
      value={name}
      onChangeText={setName}
      placeholder={placeholder}
      placeholderTextColor="blue"
      style={styles.SignUpTextInput}
    />
  );
};
export default TextField;
