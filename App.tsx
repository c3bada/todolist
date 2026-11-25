import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Task } from './types';

const STORAGE_KEY = "tasks";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const load = async () => {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (json !== null) {
        setTasks(JSON.parse(json));
      }
    };
    load();
  }, []);

  const updateTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now().toString(), title, completed: false };
    updateTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    updateTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, paddingHorizontal: 16 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 16 },
});