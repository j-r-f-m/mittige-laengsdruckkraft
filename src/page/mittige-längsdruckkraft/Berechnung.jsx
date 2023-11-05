import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax } from "better-react-mathjax";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  asErf,
  fs,
} from "../../calculations/mittigeLängsdruckKraft/mittigeLängsdruckKraft";
import { round } from "mathjs";

function Berechnung(props) {
  const form = useForm({
    defaultValues: {
      f: "",
      h1: "",
      hs: "",
      fyd: "43.5",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);

    // get input data from data object
    const iptF = Number(data.f);
    const iptH1 = Number(data.h1);
    const iptHs = Number(data.hs);
    const iptFyd = Number(data.fyd);
    console.log(iptF, iptH1, iptHs);

    const currFs = round(fs(iptF, iptH1, iptHs), 2);
    const currAs = round(asErf(currFs, iptFyd), 2);
    console.log(currFs, currAs);

    props.setDataChild(iptF, iptH1, iptHs, currFs, currAs, iptFyd);
  };
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Berechnung</Typography>
      </AccordionSummary>
      <MathJax>
        <AccordionDetails>
          <div style={{ paddingBottom: "1.5rem" }}>
            {"\\(F{s} = \\frac{F}{4} \\cdot (1- \\frac{h{1}}{h{s}})\\)"}
            &nbsp;
            {"\\( kN\\)"}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {" "}
            <TextField
              sx={{ width: "100%", paddingBottom: ".75rem" }}
              label="f"
              type="text"
              {...register("f", {
                required: "Wert wird benötigt",
              })}
              error={!!errors.f}
              helperText={errors.f?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kN</InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ width: "100%", paddingBottom: ".75rem" }}
              label="h1"
              type="text"
              {...register("h1", { required: "Wert wird benötigt" })}
              error={!!errors.h1}
              helperText={errors.h1?.message}
              InputProps={{
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              }}
            />
            <TextField
              sx={{ width: "100%", paddingBottom: ".5rem" }}
              label="hs"
              type="text"
              {...register("hs", { required: "Wert wird benötigt" })}
              error={!!errors.hs}
              helperText={errors.hs?.message}
              InputProps={{
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              }}
            />
            <TextField
              sx={{ width: "100%", paddingBottom: ".5rem" }}
              label="fyd"
              type="text"
              defaultValue="43.5"
              {...register("fyd", { required: "Wert wird benötigt" })}
              error={!!errors.fyd}
              helperText={errors.fyd?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kN/cm²</InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" color="primary">
              Berechne
            </Button>
          </form>
        </AccordionDetails>
      </MathJax>
    </Accordion>
  );
}
export default Berechnung;
