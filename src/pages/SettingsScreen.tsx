import { View, Text } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'
import { Shelly } from '../utils/Shelly';


export default function SettingsScreen() {

    let lampe = new Shelly();

    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{fontSize: 28}}>Modifier la couleur</Text>
            <ColorPicker
					ref={r => { this.picker = r }}
					onColorChangeComplete={(color) => { lampe.changerCouleur(color) }}
				/>
        </View>
    );
}