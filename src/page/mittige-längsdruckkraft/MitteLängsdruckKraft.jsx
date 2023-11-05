import { CssBaseline, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import Formeln from "./Formeln";
import Berechnung from "./Berechnung";
import Berechnungsprotokoll from "./Berechnungsprotokoll";
import Berechnungsansatz from "./Berechnungsansatz";

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
    fyd: 0,
    calculated: false, // Benötigt für bedingte Darstellung.
  });

  /**
   * Sets state data of the parent from the child with the given input values.
   * @param {number} iptF - The value of F input.
   * @param {number} iptH1 - The value of H1 input.
   * @param {number} iptHs - The value of Hs input.
   * @param {number} iptFs - The value of Fs input.
   * @param {number} iptAs - The value of As input.
   * @param {number} iptFyd - The value of Fyd input.
   */
  const setDataChild = (iptF, iptH1, iptHs, iptFs, iptAs, iptFyd) => {
    setData({
      ...data,
      f: iptF,
      h1: iptH1,
      hs: iptHs,
      fs: iptFs,
      asErf: iptAs,
      fyd: iptFyd,
      calculated: true, // Benötigt für bedingte Darstellung.
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
