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
  const outputTrue = (
    <>
      {" "}
      <Typography variant="h6" gutterBottom>
        Randbedingungen
      </Typography>{" "}
      <Grid container spacing={2}>
        <Grid xs={6} md={4}>
          <MathJax dynamic>{`\\(F = ${props.data.f} \\: kN\\)`}</MathJax>
        </Grid>
        <Grid xs={6} md={4}>
          <MathJax dynamic>{`\\(h_{1} = ${props.data.h1} \\: m\\)`}</MathJax>
        </Grid>
        <Grid xs={6} md={4}>
          <MathJax dynamic>{`\\(h_{s} = ${props.data.hs}  \\: m\\)`}</MathJax>
        </Grid>
        <Grid xs={6} md={4}>
          {" "}
          <MathJax
            dynamic
          >{`\\(f_{yd} = ${props.data.fyd} \\:kN/cm²\\)`}</MathJax>
        </Grid>
        <Grid xs={12}>
          <MathJax dynamic>{`\\(F_{s} = ${props.data.fs} \\: kN\\)`}</MathJax>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6">Spaltzugkraft</Typography>{" "}
        </Grid>
        <Grid xs={12}>
          <MathJax>
            {"\\(F_{s} = \\frac{F}{4} \\cdot (1- \\frac{h{1}}{h{s}})\\)"}{" "}
          </MathJax>
        </Grid>
        <Grid xs={12}>
          <MathJax dynamic>
            {`\\(F_{s} = \\frac{${props.data.f}}{4} \\cdot (1- \\frac{${props.data.h1}}{${props.data.hs}}) = ${props.data.fs} \\: kN\\)`}
          </MathJax>
        </Grid>
        <Grid xs={12}>
          <MathJax dynamic>{`\\(F_{s} = ${props.data.fs} \\: kN\\)`}</MathJax>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6">Bewehrung</Typography>{" "}
        </Grid>
        <Grid xs={12}>
          <MathJax dynamic>
            {"\\(A_{s} = \\frac{F_{s}}{\\sigma_{s}}  \\)"}
          </MathJax>
        </Grid>
        <Grid xs={12}>
          <MathJax dynamic>
            {`\\(A_{s} = \\frac{${props.data.fs}}{${props.data.fyd}} = ${props.data.asErf}\\:cm² \\)`}
          </MathJax>
        </Grid>
        <Grid xs={12}>
          <MathJax dynamic>
            {`\\(A_{s} = ${props.data.asErf} \\:cm² \\)`}
          </MathJax>
        </Grid>
      </Grid>
    </>
  );

  const outputFalse = (
    <>
      {" "}
      <Typography variant="h6">Keine Berechnungsergebnisse</Typography>{" "}
    </>
  );

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
        {props.data.calculated ? outputTrue : outputFalse}
      </AccordionDetails>
    </Accordion>
  );
}
export default Berechnungsprotokoll;
