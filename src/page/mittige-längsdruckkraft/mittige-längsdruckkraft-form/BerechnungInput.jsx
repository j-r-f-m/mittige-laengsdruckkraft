// // Erstelle eine Komponente für alle Inputs

// import { TextField, InputAdornment } from "@mui/material";

// export default function BerechnungsInput() {
//     function Berechnung() {
//         const form = useForm({
//           defaultValues: {
//             F: "",
//             h1: "",
//             h2: "",
//           },
//         });

//         const { register, handleSubmit, formState } = form;
//         const { errors } = formState;

//         const onSubmit = (data) => {
//           console.log(data);
//         };
//   return (
//     <TextField
//       sx={{ width: "100%", paddingBottom: ".75rem" }}
//       label="Einwirkung"
//       type="text"
//       {...register("einwirkung", {
//         required: "Wert wird benötigt",
//       })}
//       error={!!errors.einwirkung}
//       helperText={errors.einwirkung?.message}
//       InputProps={{
//         endAdornment: <InputAdornment position="end">kN</InputAdornment>,
//       }}
//     />
//   );
// }
