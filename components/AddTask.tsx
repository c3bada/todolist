import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


type Props = {
    onAdd: (title: string) => void
}

export default function AddTask({onAdd}: Props) {
    const [text, setText] = useState<string>("");

    const save = () => {
        if (text.trim() === "") return
        onAdd(text.trim())
        setText("")
    };

    return (
        <View style={styles.row}>
            <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={text}
            onChangeText={setText}
            />
            <Button title="Save" onPress={save} />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {flexDirection: "row", alignItems: "center", marginBottom: 16 },
    input: {flex: 1, padding: 8},
})