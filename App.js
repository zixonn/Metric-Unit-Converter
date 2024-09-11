import { StyleSheet, Text, View, Button} from 'react-native';
import { useCounterStore, usePersistedCounterStore } from './store';
import { Chip, PaperProvider } from 'react-native-paper';

export default function App() {

  const {count, increment, decrement, setZero } = useCounterStore();
  const {persistedCount, persistedIncrement, persistedDecrement, persistedSetZero } = usePersistedCounterStore();

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>{count}</Text>
        <Button title = "Increment" onPress = {increment}/>
        <Button title = "Decrement" onPress = {decrement}/>
        <Button title = "Reset" onPress = {setZero}/>
        <Text>{persistedCount}</Text>
        <Button title = "Persistent Increment" onPress = {persistedIncrement}/>
        <Button title = "Persistent Decrement" onPress = {persistedDecrement}/>
        <Button title = "Persistent Reset" onPress = {persistedSetZero}/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
