import { Pressable, StyleSheet, Text } from "react-native";
import { Task } from "../types";

type props = {
    task: Task;
    onToggle: (id: string) => void;
}

export default function TaskRow({task, onToggle}: props) {
    return (
        <Pressable onPress={() => onToggle(task.id)}>
            <Text style={[styles.text, task.completed && styles.completed]}>{task.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {fontSize: 16, paddingVertical: 8},
    completed: {textDecorationLine: 'line-through', color: 'gray'}
})