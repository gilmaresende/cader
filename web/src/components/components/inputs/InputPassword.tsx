import * as React from "react";
import TextField from '@mui/material/TextField';
export default function InputPassword(props: any) {
   const [txt, setTxt] = React.useState(props.value);
   return (
      <TextField
         fullWidth
         label={props.label}
         type="password"
         size="small"
         value={txt}
         onChange={(e) => {
            setTxt(e.target.value)
           // props.onChange(e.target.value)
         }}
      />
   );
}