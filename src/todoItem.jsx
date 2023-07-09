import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function TodoItem({todo,removeTodo,toggleTodo}){
    const labelId = `checkbox-list-label-${todo.id}`;

return (
  <ListItem
    key={todo.id}
    secondaryAction={
      <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
        <DeleteOutlineIcon />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined}   dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
          onClick={toggleTodo}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={todo.text} />
    </ListItemButton>
  </ListItem>
);
}