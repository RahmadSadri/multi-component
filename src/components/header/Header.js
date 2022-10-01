import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const Header = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    return (
        <TextField
            id="outlined-basic"
            label="Todo"
            variant="outlined"
            className=''
            style={ { marginBottom: "2rem", width: "100%" } }
            value={ value }
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
                if (e.code === "Enter"){
                    onSubmit(e.target.value);
                    setValue("");
                }
            }}
        />
    );
}
