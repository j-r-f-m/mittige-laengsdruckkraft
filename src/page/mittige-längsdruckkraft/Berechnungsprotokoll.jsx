import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax } from "better-react-mathjax";

function Berechnungsprotokoll(props) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Berechnungsprotokoll</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MathJax>
          {" "}
          <Typography>
            <div>
              {`\\(F{s} = \\frac{${props.data.f}}{4} \\cdot (1- \\frac{${props.data.h1}}{${props.data.hs}}) = ${props.data.fs} \\)`}
            </div>
          </Typography>
        </MathJax>
      </AccordionDetails>
    </Accordion>
  );
}
export default Berechnungsprotokoll;
