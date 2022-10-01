import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";

function App() {
  const [todoList, settodoList] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(null);
  const [justAdded, setJustAdded] = useState("");

  const onOpenSnackbar = (value) => {
    setOpenSnackbar(value)
  }

  const onCloseSnackbar = () => {
    setOpenSnackbar(null)
  }

  const onUndoSnackbar = () => {
    const updated = todoList;
    updated.pop();
    settodoList(updated);
    setOpenSnackbar(null)
  }

  const onRemove = (idx) => {
    // eslint-disable-next-line
    const updated = todoList.filter((_, i) => i != idx);
    settodoList(updated);
  }

  const onSubmit = (value) => {
    if (value) {
      setJustAdded(value)
      settodoList([...todoList, value]);
      onOpenSnackbar(value);
    }
  };

  return (
    <div className="App">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={onCloseSnackbar}
        message={`${justAdded} just added to the list!`}
        action={
          <>
            <Button color="secondary" size="small" onClick={onUndoSnackbar}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={onCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>}
      />
      <Container maxWidth="sm">
        <h1>Todo List</h1>
        <Header onSubmit={onSubmit} />
        <Content data={todoList} onRemove={onRemove}/>
      </Container>
    </div>
  );
}

export default App;
