import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax } from "better-react-mathjax";
import { useEffect } from "react";

function Berechnungsprotokoll(props) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Berechnungsprotokoll</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6" gutterBottom>
          Randbedingungen
        </Typography>{" "}
        <Grid container spacing={2}>
          <Grid xs={6} md={4}>
            <MathJax dynamic>{`\\(F = ${props.data.f} \\: kN\\)`}</MathJax>
          </Grid>
          <Grid xs={6} md={4}>
            {" "}
            <MathJax dynamic>{`\\(Fs = ${props.data.fs} \\: kN\\)`}</MathJax>
          </Grid>
          <Grid xs={6} md={4}>
            <MathJax dynamic>{`\\(h{1} = ${props.data.h1} \\: m\\)`}</MathJax>
          </Grid>
          <Grid xs={6} md={4}>
            {" "}
            {"\\(h{s} \\)"}&nbsp;{"\\(= \\)"}&nbsp;
            {`\\(${props.data.hs}\\)`}&nbsp;{"\\(m\\)"}
            &emsp;
          </Grid>
          <Grid xs={6} md={4}>
            {" "}
            {"\\(fyd \\)"}&nbsp;{"\\(= \\)"}&nbsp;
            {`\\(${props.data.fyd}\\)`}&nbsp;{"\\(kN/cm²\\)"}
            &emsp;
          </Grid>
          <Grid xs={12}>
            {" "}
            {"\\(F{s} = \\frac{F}{4} \\cdot (1- \\frac{h{1}}{h{s}})\\)"}
            &nbsp;
            {"\\( kN\\)"}
          </Grid>
          <Grid xs={12}>
            {`\\(F{s} = \\frac{${props.data.f}}{4} \\cdot (1- \\frac{${props.data.h1}}{${props.data.hs}}) = ${props.data.fs} \\)`}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
export default Berechnungsprotokoll;
