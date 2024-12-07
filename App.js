
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from "./src/routers/router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <StatusBar style="auto" />
    </View>
  );
  return <Router />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
