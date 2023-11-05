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
            <MathJax dynamic>{`\\(h{1} = ${props.data.h1} \\: m\\)`}</MathJax>
          </Grid>
          <Grid xs={6} md={4}>
            <MathJax dynamic>{`\\(h{s} = ${props.data.hs}  \\: m\\)`}</MathJax>
          </Grid>
          <Grid xs={6} md={4}>
            {" "}
            <MathJax
              dynamic
            >{`\\(f{yd} = ${props.data.fyd} \\:kN/cm²\\)`}</MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax dynamic>{`\\(F{s} = ${props.data.fs} \\: kN\\)`}</MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax>
              {"\\(F{s} = \\frac{F}{4} \\cdot (1- \\frac{h{1}}{h{s}})\\)"}{" "}
            </MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax dynamic>
              {`\\(F{s} = \\frac{${props.data.f}}{4} \\cdot (1- \\frac{${props.data.h1}}{${props.data.hs}}) = ${props.data.fs} \\: kN\\)`}
            </MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax dynamic>{`\\(F{s} = ${props.data.fs} \\: kN\\)`}</MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax dynamic>
              {"\\(A{s} = \\frac{F{s}}{\\sigma{s}}  \\)"}
            </MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax dynamic>
              {`\\(A{s} = \\frac{${props.data.fs}}{${props.data.fyd}} = ${props.data.asErf}\\:cm² \\)`}
            </MathJax>
          </Grid>
          <Grid xs={12}>
            <MathJax dynamic>
              {`\\(A{s} = ${props.data.asErf} \\:cm² \\)`}
            </MathJax>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
export default Berechnungsprotokoll;
