import * as React from 'react';
import { View,  Text } from 'react-native';

export default function FaqScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Page faq')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Page faq</Text>
        </View>
    );
}