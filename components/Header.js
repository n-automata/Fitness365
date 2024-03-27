import { View, Text, StyleSheet } from 'react-native';

const Header = ({ text, username }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{text} {username}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({ 
    header: { 
        backgroundColor: 'orange',
        height: 100,
        width: '100%', // Ensure the header covers the entire width
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
    },
    text: { 
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        paddingTop: 40,
    },
});