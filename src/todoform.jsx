import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create' 
import { useState } from 'react';
export default function TodoForm({addTodo}){
   const [text,setText] = useState("")
   const handleChange = (evt) =>{
     setText(evt.target.value)
   }
   const handleSubmit = (evt)=>{
      evt.preventDefault()
      addTodo(text)
      setText("")
   }
   return (
    <ListItem>
        <form onSubmit={handleSubmit}>
          <TextField 
            id="filled-basic" 
            label="Add To-Do" 
            variant="filled" 
            onChange={handleChange}  
            value={text}
            InputProps={{
                endAdornment:<InputAdornment position="end">
                <IconButton
                aria-label="create todo"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
                type='submit'
                >
                <Create />
                {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
                </InputAdornment>
          }}
        />
        </form>
    </ListItem>
   )
}

{/* <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            
          />
        </FormControl> */}