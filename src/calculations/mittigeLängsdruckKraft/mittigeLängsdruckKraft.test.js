import { round } from "mathjs";
import { fs, asErf } from "./mittigeLängsdruckKraft";
import { describe, it, expect } from "vitest";

describe("Spaltzugkraft", () => {
  it("Fs", () => {
    /**
     * Die Eingangswerte sind aus "Stahlbetonbau in Beispielen Teil 1 Beispiel 4.1, S.73"
     */

    const F = 1000; // kN
    const h1 = 0.1; // m
    const hs = 1; // m
    const fsTest = fs(F, h1, hs);

    expect(fsTest).toBe(225);
  });

  describe("Spaltzugbewehrung", () => {
    it("As,erf", () => {
      const Fs = 225; // kN
      const fyd = 43.5; //kN/cm²

      const Aserf = round(asErf(Fs, fyd), 2);

      expect(Aserf).toBe(5.17);
    });
  });
});
