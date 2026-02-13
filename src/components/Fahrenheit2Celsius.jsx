import {
    Text,
    View,
} from 'react-native';
import { fahrenheit2Celsius } from "../fahrenheit2Celsius.js";

// input fahrenheit
export function Fahrenheit2Celsius({fahrenheit}) {
    //processing
    let celsius = fahrenheit2Celsius(fahrenheit);
    // output the temperature in celsius
    return (
        <View>
            <Text>{fahrenheit} degrees in fahrenheit is {celsius} degrees celsius</Text>
        </View>
    );
}