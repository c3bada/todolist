import { FlatList } from "react-native";
import TaskRow from "./TaskRow";
import { Task } from "../types";
 

type Props = {
    tasks: Task[]
    onToggle: (id: string) => void
}

export default function TaskList({tasks, onToggle}: Props){
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TaskRow task={item} onToggle={onToggle} />}
        />
    )
}