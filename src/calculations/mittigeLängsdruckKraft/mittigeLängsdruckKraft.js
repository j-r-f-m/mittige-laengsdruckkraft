/**
 * Nach Heft DAfStb-Heft 631, Kapitel 5 - Bemessungsmodelle
 */

/**
 * Fs - resultierende Spaltzugkraft
 * F - rechtwinkilig auf der Teilfläche und mittig auf der Gesamtfläche und mittig
 * auf der Gesamtfläche wirkende Druckkraft
 * h1 - Seitenlänge der Teilfläche
 * hs - Seitenlänge der Verteilungsfläche
 */

const fs = (f, h1, hs) => {
  return (f / 4) * (1 - h1 / hs);
};

const asErf = (fs, fyd = 43.5) => {
  return fs / fyd;
};

export { fs, asErf };
