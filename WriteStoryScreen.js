import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class WriteScreen extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.head}>Story Hub</Text>
                <TextInput
                    style={styles.titleName}
                    placeholder="Title of the Story">
                </TextInput>
                <TextInput
                    style={styles.authorName}
                    placeholder="Author of the Story">
                </TextInput>
                <TextInput
                    style={styles.story}
                    multiline = {true}
                    placeholder="Write the Story">
                </TextInput>

                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
      fontSize: 30,
      backgroundColor: 'maroon',
      textAlign: 'center',
      justifyContent: 'center',
      padding: 15,  
    },
    titleName: {
        marginTop: 120,
        marginLeft: 30,
        width: 300,
        height: 40,
        borderWidth: 1.0,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authorName: {
        marginTop: 10,
        marginLeft: 30,
        width: 300,
        height: 40,
        borderWidth: 1.0,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    story: {
        marginTop: 10,
        marginLeft: 30,
        width: 300,
        height: 120,
        borderWidth: 1.0,
        fontSize: 15,
        alignItems: 'center'
    },
    button: {
        marginLeft: 130,
        backgroundColor: 'green',
        width: 100,
        height: 40,
        borderWidth: 1.0,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
    },
    text: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    }
})