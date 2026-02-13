import {
    Text,
    View,
} from 'react-native';
import { richter2Damage } from '../richter2Damage.js';

// input richter scale
export function Richter2Damage({richter}) {
    //processing
    let damage = richter2Damage(richter);
    // output the damage level
    return (
        <View>
            <Text>An earthquake with a richter scale of {richter} has a characterization of "{damage}"</Text>
        </View>
    );
}