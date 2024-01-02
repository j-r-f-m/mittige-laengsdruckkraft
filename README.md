# Mittige Längsdruckkraft sApp

Eine Frontend-Anwendung mit der sich die Spaltzugbewehrung nach "DAfStb-Heft 631 Hilfsmittel zur Schnittgrößenermittlung und zu besonderen Detailnachweisen bei Stahlbetontragwerken" berechnen lässt.

### Zugang

Das Projekt wird auf Netlify gehostet und ist über folgenden **[Link](https://phenomenal-cheesecake-339368.netlify.app/)** verfügbar.

### Motivation

Ziel war es, eine Anwendung zu entwickeln, welche die Ermittlung der Spaltzugbewehrung bei mittig angreifender Längsdruckkraft automatisiert. Damit das Programm auf möglichst vielen Endgeräten genutzt werden kann, wurde eine Web-Anwendung entwickelt. Dabei sollte der Umgang mit folgenden Technologien vertieft werden:

- Verwendeung der **[React](https://react.dev/)** JavaScript Bibliothek
- Verwendung von React-State mit einem State-Objekt
- Verwendung von **[Vite](https://vitejs.dev/)** als Entwickungsumgebung
- Verwendung von **[Vitetest](https://https://vitest.dev/)** als Testumgebung
- Verwendung von **[MUI](https://mui.com/core/)** zur Formattierung des Layouts und zur Gestaltung der Benutzeroberfläche

### Funktionen

Die Anwendung besteht aus einer Internetseite mit folgenden Funktionen:

- Es lässt sich die Spaltzugbewehrung nach DAfStb Heft 631 berechnen.
- Mit Hilfe eines Berechnungsprotokolls können die einzelnen Kalkulationen nachvollzogen werden.
- Die verwendeten Formeln sind übersichtlich dargestellt.
- Die benötigen Beiwerte der Verankerungsart und der Verbundbedingung werden gezeigt.

### Herausforderung

Während der Konzeptionsphase stellte sich heraus, dass es zwei grundlegende Probleme zu lösen galt.

1. Es musste ein Interface-Layout entwickelt werden welches intuitiv ist, aber auch die Darstellung von unterschiedlichsten Infromationen erlaubt. Durch das verwenden von einklappbaren Layout-Elementen konnte dies erreicht werden. Somit ist es möglich nur diejenigen Layout-Elemente einzublenden, welche gerade von Interesse sind. Des Weiteren stellte die Darstellung von Zahlen und mathematischen Symbolen eine Herausforderung dar. Durch die Verwendung der MathJax JavaScript-Bibliothek konnte LaTex in die Webanwendung integriert werden, um Zahlen und Symbole ansprechend darzustellen.

2. Da die Anwendung ein Berechnungsprogramm ist, mussten die einzelen Formeln sorgfältig umgesetzt werden. Die einzelnen mathematischen Ausdrücke wurden als **["Reine Funktionen"](https://en.wikipedia.org/wiki/Pure_function)** implementiert, um sie besser testen zu können. Durch die Verwendung von "Reinen Funktionen" lassen sich die Implementierungen der Formeln mit Unit-Tests verifizieren.

### Zukünftige Implementierungen

Druckfunkion

- Um Das Berechnungsprotokoll in eine statische Dokumentation integrieren zu können, wird eine Druckfunktion Benötigt. Es soll daher in zukunft möglich sein, das Berechnungsprotokoll als PDF zu drucken.
