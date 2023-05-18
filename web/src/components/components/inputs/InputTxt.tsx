import TextField from '@mui/material/TextField';

export default function InputTxt(props: any) {
   return (
      <TextField
         id={props.id}
         label={props.label}
         size="small"
         fullWidth
         onChange={() => console.log("o")}
      />
   );
}