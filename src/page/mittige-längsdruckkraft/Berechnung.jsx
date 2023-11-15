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
import PropTypes from "prop-types";

/**
 * Renders a form for calculating the values of currFs and currAs based on the input data.
 * @param {Object} props - The props object.
 * @param {Function} props.setDataChild - The function to set the data in the parent component.
 * @returns {JSX.Element} - The JSX element.
 */
function Berechnung(props) {
  const form = useForm({
    defaultValues: {
      f: "",
      h1: "",
      hs: "",
      fyd: "43.5",
    },
  });

  /**
   * Registers form inputs, handles form submission, and provides form state.
   * @typedef {Object} useFormReturn
   * @property {Function} register - Registers form inputs.
   * @property {Function} handleSubmit - Handles form submission.
   * @property {Object} formState - Provides form state.
   */
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  /**
   * Handles the form submission and calculates the values of currFs and currAs.
   * @param {Object} data - The input data object.
   * @param {number} data.f - The value of f.
   * @param {number} data.h1 - The value of h1.
   * @param {number} data.hs - The value of hs.
   * @param {number} data.fyd - The value of fyd.
   * @returns {void}
   */
  const onSubmit = (data) => {
    // get input data from data object
    const iptF = Number(data.f);
    const iptH1 = Number(data.h1);
    const iptHs = Number(data.hs);
    const iptFyd = Number(data.fyd);

    // Berechne die Spaltzugkraft Fs und die erforderliche Bewehrung As
    const currFs = round(fs(iptF, iptH1, iptHs), 2);
    const currAs = round(asErf(currFs, iptFyd), 2);

    // Aktualisiere den Zustand der Eltern-Komponente
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

Berechnung.propTypes = {
  setDataChild: PropTypes.func.isRequired,
};

export default Berechnung;
