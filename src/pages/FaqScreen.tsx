import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
  });

export default function FaqScreen() {

    let [show1, setShow1] = useState<boolean>(false);
    let [show2, setShow2] = useState<boolean>(false);
    let [show3, setShow3] = useState<boolean>(false);
    let [show4, setShow4] = useState<boolean>(false);

    return (
        <View>
            <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>Foire aux questions</Text>
            <View style={{justifyContent: 'flex-start'}}>
                <View style={{alignItems: "flex-start"}}>
                    <TouchableOpacity style={{borderColor: "#000", borderWidth: 2, margin: 5, width: "97%"}} onPress={() => setShow1(!show1)}><Text style={{fontSize: 24}}>Question 1</Text></TouchableOpacity>
                    <Text style={{display: `${show1 ? "flex" : "none"}`, }}>Réponse 1</Text>
                </View>
                <View style={{alignItems: "flex-start"}}>
                    <TouchableOpacity style={{borderColor: "#000", borderWidth: 2, margin: 5, width: "97%"}} onPress={() => setShow2(!show2)}><Text style={{fontSize: 24}}>Question 2</Text></TouchableOpacity>
                    <Text style={{display: `${show2 ? "flex" : "none"}`, }}>Réponse 2</Text>
                </View>
                <View style={{alignItems: "flex-start"}}>
                    <TouchableOpacity style={{borderColor: "#000", borderWidth: 2, margin: 5, width: "97%"}} onPress={() => setShow3(!show3)}><Text style={{fontSize: 24}}>Question 3</Text></TouchableOpacity>
                    <Text style={{display: `${show3 ? "flex" : "none"}`, }}>Réponse 3</Text>
                </View>
                <View style={{alignItems: "flex-start"}}>
                    <TouchableOpacity style={{borderColor: "#000", borderWidth: 2, margin: 5, width: "97%"}} onPress={() => setShow4(!show4)}><Text style={{fontSize: 24}}>Question 4</Text></TouchableOpacity>
                    <Text style={{display: `${show4 ? "flex" : "none"}`, }}>Réponse 4</Text>
                </View>
            </View>
        </View>
    );
}