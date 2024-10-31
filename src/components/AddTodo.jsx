import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todoSlice";
import { useState } from "react";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        dispatch(addTodo(input));
        setInput("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Adicione uma tarefa..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AddTodo;
