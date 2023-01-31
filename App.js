import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.titles}>Today's tasks</Text>
        <View style={styles.taskList}>
          <Task text={'test'}/>
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
