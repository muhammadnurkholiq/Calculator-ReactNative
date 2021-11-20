import React from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

export default function Result({result, setResult}) {

    return (
        <>
            <TextInput value={result} style={output.txtInput} placeholder="0" editable={false} selectTextOnFocus={false} />
            
            <View style={output.buttons}>
                <TouchableOpacity style={output.btnClear} onPress={() => setResult(0)}>
                    <Text style={output.text}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={output.btnDel}>
                    <Text style={output.text}>Del</Text>
                </TouchableOpacity>
            </View>
        
        </>
    );
}

const output = StyleSheet.create({
    txtInput: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginTop: 30,
        height: '45%',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: 'black'
    },
    buttons: {
        flexDirection: 'row'
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
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})