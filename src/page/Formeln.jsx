import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax } from "better-react-mathjax";

function Formeln() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Formeln</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MathJax>
          <div>
            {"\\(F{s} = \\frac{F}{4} \\cdot (1- \\frac{h{1}}{h{s}}) \\)"}
          </div>
          <div>
            {/*        {"\\(F{s}\\)"} &nbsp;&nbsp;&nbsp;&nbsp; resultierende Spaltzugkraft */}
            <span style={{ display: "inline-block", width: "3rem" }}>
              {"\\(F{s}\\)"}
            </span>
            <span>resultierende Spaltzugkraft</span>
          </div>
          <div>
            <span style={{ display: "inline-block", width: "3rem" }}>
              {"\\(F\\)"}
            </span>
            <span>
              rechtwinklig auf der Teilfäche und mittig auf der Gesamtfläche
              wirkende Druckkraft
            </span>
          </div>
        </MathJax>
      </AccordionDetails>
    </Accordion>
    // test accordion
  );
}

export default Formeln;
