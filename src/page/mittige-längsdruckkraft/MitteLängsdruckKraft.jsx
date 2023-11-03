import { CssBaseline, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import Formeln from "./Formeln";
import Berechnung from "./Berechnung";
import Berechnungsprotokoll from "./Berechnungsprotokoll";
import Berechnungsansatz from "./Berechnungsansatz";

import { MuiLoginForm } from "../../components/form-components/MuiLoginForm";

/**
 * Eltern-Komponente welche die Kinder-Komponenten kontrolliert. "State" wird in
 * dieser Eltern-Komponente verwaltet.
 * @returns
 */
function MitteLängsdruckKraft() {
  const [data, setData] = useState({
    f: 0,
    h1: 0,
    hs: 0,
    fs: 0,
    asErf: 0,

    calculated: false, // Benötigt für bedingte Darstellung.
  });

  const setDataChild = (iptF, iptH_1, iptH_s, iptFs, iptAs) => {
    setData({
      ...data,
      f: iptF,
      h1: iptH_1,
      hs: iptH_s,
      fs: iptFs,
      asErf: iptAs,
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
            <Berechnung setDataChild={setDataChild} />
            <Berechnungsprotokoll data={data} />
          </div>
        </Box>
      </Container>
    </>
  );
}

export default MitteLängsdruckKraft;
