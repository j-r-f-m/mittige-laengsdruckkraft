import { CssBaseline, Box, Typography, Container } from "@mui/material";
import Formeln from "./Formeln";
import Berechnung from "./Berechnung";
import Berechnungsprotokoll from "./Berechnungsprotokoll";
import Berechnungsansatz from "./Berechnungsansatz";

function MitteLängsdruckKraft() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
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
          </Typography>{" "}
          <div>
            {" "}
            <Berechnungsansatz />
            <Formeln />
            <Berechnung />
            <Berechnungsprotokoll />
          </div>
        </Box>
      </Container>
    </>
  );
}

export default MitteLängsdruckKraft;
