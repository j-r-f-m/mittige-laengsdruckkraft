import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AllgemeineHinweise from "./AllgemeineHinweise";
import Formeln from "./Formeln";

function MitteLängsdruckKraft() {
  return (
    <>
      <CssBaseline />
      <Container>
        {" "}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography component="h1" variant="h5">
            Mittige Längsdruckkraft
          </Typography>
          <AllgemeineHinweise />
          <Formeln />
        </Box>
      </Container>
    </>
  );
}

export default MitteLängsdruckKraft;
