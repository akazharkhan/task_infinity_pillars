/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Task 1"
                color={"red"}
                onPress={() =>
                    navigation.navigate('Task1')
                }
            />
            <Button
                title="Task 2"
                onPress={() =>
                    navigation.navigate('Task2')
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:'row',
        
    }
});

export default Home;
