import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
export default function InputReais(props: any) {
   const [values, setValues] = React.useState({
      amount: props.value,
   });

   const formatarMoeda = (elemento: any) => {
      var valor = elemento;
      valor = valor + "";
      valor = parseInt(valor.replace(/[\D]+/g, ""));
      valor = valor + "";
      valor = valor.replace(/([0-9]{2})$/g, ".$1");

      if (valor.length > 6) {
         valor = valor.replace(/([0-9]{3})([0-9]{2}$)/g, "$1.$2");
      }
      return valor;
   };

   const handleChange = (prop: any) => (event: any) => {
      let v = formatarMoeda(event.target.value);
      setValues({ ...values, [prop]: v });
      props.onChange(v)
   };
   return (
      <div >
         <FormControl
            fullWidth>
            <InputLabel>
               {props.label}
            </InputLabel>
            <OutlinedInput
               size={props.size ? props.size : "small"}
               value={props.disabled ? Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
               }).format(values.amount) : values.amount}
               disabled={props.disabled}
               onChange={handleChange("amount")}
               startAdornment={
                  <InputAdornment position="end">{!props.disabled ? "R$" : ""}</InputAdornment>
               }
               label={props.label}
            />
         </FormControl>
      </div>
   );
}