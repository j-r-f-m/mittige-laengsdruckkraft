import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax } from "better-react-mathjax";
import PropTypes from "prop-types";

/**
 * Renders the calculation protocol component.
 * @param {Object} props - The props object.
 * @param {Object} props.data - The data object containing the calculation results.
 * @param {number} props.data.f - The force value in kN.
 * @param {number} props.data.h1 - The height value in m.
 * @param {number} props.data.hs - The height value in m.
 * @param {number} props.data.fyd - The yield strength value in kN/cm².
 * @param {number} props.data.fs - The spalling force value in kN.
 * @param {number} props.data.asErf - The effective reinforcement area in cm².
 * @param {boolean} props.data.calculated - A boolean indicating whether the calculation has been performed.
 * @returns {JSX.Element} - The JSX element representing the calculation protocol component.
 */
export function Berechnungsprotokoll(props) {
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

Berechnungsprotokoll.propTypes = {
  data: PropTypes.shape({
    f: PropTypes.number,
    h1: PropTypes.number,
    hs: PropTypes.number,
    fyd: PropTypes.number,
    fs: PropTypes.number,
    asErf: PropTypes.number,
    calculated: PropTypes.bool,
  }).isRequired,
};
