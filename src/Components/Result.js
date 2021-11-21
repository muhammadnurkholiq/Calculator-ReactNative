import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Box, Text } from "native-base";

export default function Result({result, setResult}) {
    return (
        <>
            <Box style={output.txtInput} >
                <Text style={output.text}>{result}</Text>
            </Box>

            <View style={output.buttons}>
                <TouchableOpacity style={output.btnClear} onPress={() => setResult(0)}>
                    <Text style={output.text1}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={output.btnDel} onPress={() => setResult(result.slice(0, -1))}>
                    <Text style={output.text1}>Del</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

// styling 
const output = StyleSheet.create({
    txtInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 90,
        padding: 10 ,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: 'black',
        alignItems: 'center',
        alignContent: 'center',
        height: 75,
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row',
    },
    btnClear: {
        backgroundColor: '#930707',
        width: '72%',
        padding: 15,
        marginTop: 30,
        marginLeft: 5,
        marginBottom: -40,
        borderRadius: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    btnDel: {
        backgroundColor: '#930707',
        width: '22%',
        padding: 15,
        marginTop: 30,
        marginLeft: 8,
        marginBottom: -40,
        borderRadius: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    text : {
        color: 'black',
        fontSize: 40,
        fontWeight: '700'
    },
    text1 : {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})