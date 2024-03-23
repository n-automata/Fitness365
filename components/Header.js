import { View, Text, StyleSheet } from 'react-native';

const Header = ({ text, username }) => {
    return (
        <View style={styles.header}>
            <Text styles={styles.text}>{text} {username}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({ 
    header: { 
    backgroundColor: 'orange',
    height: 100, 
    },
    text: { 
    fontSize: '20px',
    fontColor: 'black',
    paddingLeft: 20,
    },
});