import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

// using styled components for image control
const ImageComp = styled.img`
  max-width: 40%;
  height: auto;
  padding: 2rem;
`;

function Berechnungsansatz() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Berechnungsansatz</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ padding: "1rem" }}>
            Quelle: Deutscher Ausschuß für Stahlbeton e.V., 2019, Heft 631 -
            Hilfsmittel zur Schnittgrößenermittlung und zu besonderen
            Detailnachweisen bei Stahlbetontragwerken, S. 91
          </Typography>
          <ImageComp src="images/mittige-last.png" alt="Grafik"></ImageComp>
        </Box>
        <Typography>
          Die Längen h1 und hS sowie Teil-, Verteilungs- bzw. Gesamtfläche sind
          rechtwinklig zur Richtung der an- greifenden Last zu messen. Hierbei
          ist die Seitenlänge (hS) der Verteilungsfläche gleich der Seitenlänge
          der Gesamtfläche (h). Die Spaltzugspannungen treten etwa in einem
          Bereich zwischen 0,1 hS und 1,0 hS auf. Die Lage der Resultie- renden
          darf unter Berücksichtigung des nichtlinearen Verhaltens im Zustand II
          im Abstand von 0,4 hS vom oberen Rand des belasteten Körpers
          angenommen werden. Dies entspricht in guter Näherung der Lage der
          maximalen Spaltzugspannungen. Entsprechend ist bei Verwendung von
          mehreren Bewehrungslagen die Bewehrung in die Tiefe zu staffeln, siehe
          auch Bild 5.1.{" "}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Berechnungsansatz;
