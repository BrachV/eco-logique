import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Settings" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Page paramètre</Text>
        </View>
    );
}