import * as React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
// import { Flex, Title } from '../utils/styles';


export default function AccueilScreen() {

    const options = [
        { label: "Journalier", value: "1" },
        { label: "Hebdomadaire", value: "1.5" },
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Aujourd'hui</Text>
            {/* <Flex>
                <Title>Test</Title>
                <Title>Test</Title>
            </Flex> */}
            <Text
                onPress={() => alert('Page accueil')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Page accueil</Text>
            <SwitchSelector
  options={options}
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
/>
        </View>
    );
}