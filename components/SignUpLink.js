import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpLink() {

    const navigation = useNavigation();

    return (
        <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        />
    );
}
