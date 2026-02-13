import {
    Text,
    View,
} from 'react-native';
import { cubeHeight2Volume } from '../cubeHeight2Volume.js';

export function CubeHeight2Volume({height}) {
    //processing
    let volume = cubeHeight2Volume(height);
    // output
    return (
        <View>
            <Text>A cube with a height of {height} meters has a volume of {volume} cubic meters</Text>
        </View>
    );
}