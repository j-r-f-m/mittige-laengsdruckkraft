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
        <Typography variant="h5">Formeln</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MathJax>
          <Typography variant="h6" sx={{ paddingBottom: "0.25rem" }}>
            Resultierende Spaltzugkraft
          </Typography>

          <div>
            {"\\(F_s{s} = \\frac{F}{4} \\cdot (1- \\frac{h{1}}{h{s}})\\)"}
          </div>
          <div>
            <span style={{ display: "inline-block", width: "3rem" }}>
              {"\\(F_{s}\\)"}
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
          <div>
            <span style={{ display: "inline-block", width: "3rem" }}>
              {"\\(h_{1}\\)"}
            </span>
            <span>Seitenlänge der Teilfläche</span>
          </div>
          <div>
            <span style={{ display: "inline-block", width: "3rem" }}>
              {"\\(h_{1}\\)"}
            </span>
            <span>Seitenlänge der Verteilungsfläche</span>
          </div>
          <br />
          <Typography
            variant="h5"
            component="h5"
            sx={{ paddingBottom: "0.25rem" }}
          >
            Erforderliche Bewehrung
          </Typography>
          <div>{"\\(A{s} = \\frac{F_{s}}{\\sigma_{s}}  \\)"}</div>
        </MathJax>
      </AccordionDetails>
    </Accordion>
  );
}

export default Formeln;
