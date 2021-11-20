import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// import components 
import Buttons from "../Components/Buttons";
import Result from "../Components/Result";

export default function Calculator() {

    const [result, setResult] = useState(0);

    const pressBtn = (value) => {
        if (typeof result === "number") {
            setResult(value);
        } else {
            setResult(result + value);
        }   
    };

    const calculate = () => {
        const calculate = eval(result);
        setResult(calculate);
    };

    const calcPercent = () => {
        const percentage = result / 100;
        setResult(percentage);
    };

    return (
        <View style={calc.container}>

            <View style={calc.resultContainer}>
                <Result result={result} setResult={setResult} />
            </View> 

            <View style={calc.buttonsContainer}>
                <Buttons value="1" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="2" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="+" onPress={pressBtn} bgColor="#930707" />
                <Buttons value="-" onPress={pressBtn} bgColor="#930707" />
                
                <Buttons value="3" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="4" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="/" onPress={pressBtn} bgColor="#930707" />
                <Buttons value="*" onPress={pressBtn} bgColor="#930707" />

                <Buttons value="5" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="6" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="%" onPress={calcPercent} bgColor="#930707" />
                <Buttons value="=" onPress={calculate} bgColor="#930707" />

                <Buttons value="7" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="8" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="9" onPress={pressBtn} bgColor="#FF5757" />
                <Buttons value="0" onPress={pressBtn} bgColor="#FF5757" />
            </View>

        </View>
    )
}

const calc = StyleSheet.create({
    container: {
        backgroundColor: '#FFA0A0',
        height: '100%'
    },
    resultContainer: {
        height: '35%',
        padding: 20,
        justifyContent: 'center'
    },
    buttonsContainer: {
        height: '65%',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 35
    }
})