import {
    Text,
    View,
} from 'react-native';
import { moneyCounter } from "../moneyCounter.js";

// input the amount of coins
export function MoneyCounter({nickels, dimes, quarters, loonies, toonies}) {
    //processing
    let total = moneyCounter(nickels, dimes, quarters, loonies, toonies);
    // output the total amount
    return (
        <View>
            <Text>If you have {nickels} nickels, {dimes} dimes, {quarters} quarters, {loonies} loonies, {toonies} toonies, you have a total of ${total}</Text>
        </View>
    );
}