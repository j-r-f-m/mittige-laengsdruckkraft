import { CssBaseline, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import Formeln from "./Formeln";
import Berechnung from "./Berechnung";
import Berechnungsprotokoll from "./Berechnungsprotokoll";
import Berechnungsansatz from "./Berechnungsansatz";

import { MuiLoginForm } from "../components/form-components/MuiLoginForm";

/**
 * Eltern-Komponente welche die Kinder-Komponenten kontrolliert. "State" wird in
 * dieser Eltern-Komponente verwaltet.
 * @returns
 */
function MitteLängsdruckKraft() {
  const [data, setData] = useState({
    F: 0,
    h_1: 0,
    h_s: 0,
    As: 0,
    sigma_s: 43.5, // cm²/kN
    calculated: false, // Benötigt für bedingte Darstellung.
  });

  const setDataChild = (iptF, iptH_1, iptH_s, iptAs, iptSigma_s) => {
    setData({
      ...data,
      F: iptF,
      h_1: iptH_1,
      h_2: iptH_s,
      As: iptAs,
      iptSigma: iptSigma_s,
    });
  };

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
          <Typography
            sx={{ paddingBottom: "1.5rem" }}
            component="h3"
            variant="h3"
          >
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
        <MuiLoginForm />
      </Container>
    </>
  );
}

export default MitteLängsdruckKraft;
