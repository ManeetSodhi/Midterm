import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { GymCost } from './GymCost.jsx';
import { Richter2Damage } from './Richter2Damage.jsx';
import { MoneyCounter } from './MoneyCounter.jsx';
import { Fahrenheit2Celsius } from './Fahrenheit2Celsius.jsx';
import { CubeHeight2Volume } from './CubeFahrenheit2Volume.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <MoneyCounter nickels={0} dimes={0} quarters={0} loonies={1} toonies={0}/>
      <MoneyCounter nickels={0} dimes={1} quarters={0} loonies={0} toonies={3}/>
      <MoneyCounter nickels={2} dimes={0} quarters={1} loonies={0} toonies={0}/>

      <Fahrenheit2Celsius fahrenheit={212} />
      <Fahrenheit2Celsius fahrenheit={32} />
      <Fahrenheit2Celsius fahrenheit={70} />

      <CubeHeight2Volume height={1} />
      <CubeHeight2Volume height={2} />
      <CubeHeight2Volume height={3} />

      <GymCost friends={1} />
      <GymCost friends={2} />
      <GymCost friends={3} />
      <GymCost friends={4} />

      <Richter2Damage richter={7.5} />
      <Richter2Damage richter={6.1} />
      <Richter2Damage richter={1.5} />
    </View>
  );
}

