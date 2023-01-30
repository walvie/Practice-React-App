import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.titles}>Today's tasks</Text>
        <View style={styles.taskList}>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titles: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskList: {},
});
