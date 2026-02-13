import {
    Text,
    View,
} from 'react-native';
import { gymCost } from '../gymCost.js';

export function GymCost({friends}) {
    //processing
    let discount = gymCost(friends);
    // output
    return (
        <View>
            <Text>Signing up {friends} friends will get you a discount of {discount}%!</Text>
        </View>
    );
}