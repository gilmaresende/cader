
import TextField from '@mui/material/TextField';

export default function CInputNumber(props: any) {

   return (
      <>
         <TextField
            sx={props.sx}
            id={props.id}
            label={props.label}
            defaultValue={props.defaultValue}
            value={props.value}
            size="small"
            fullWidth
         />
      </>
   )
}


