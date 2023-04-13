import * as React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Shelly } from 'src/utils/Shelly';
// import { Flex, Title } from '../utils/styles';


export default function AccueilScreen() {

    const options = [
        { label: "Journalier", value: "1" },
        { label: "Hebdomadaire", value: "1.5" },
    ];

    let lampe = new Shelly();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Aujourd'hui</Text>
            {/* <Flex>
                <Title>Test</Title>
                <Title>Test</Title>
            </Flex> */}
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Page accueil</Text>
            <Text 
                style={{ fontSize: 26, fontWeight: 'bold' }}
                onPress={() => lampe.allumer()}>Allumer</Text>
                
            <Text 
                style={{ fontSize: 26, fontWeight: 'bold', backgroundColor: "#E8E8E8" }}
                onPress={() => lampe.eteindre()}>Eteindre</Text>

            <SwitchSelector
                options={options}
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
            />
        </View>
    );
}