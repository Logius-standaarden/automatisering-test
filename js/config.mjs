import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "VV",
  specType: "HR",
  pubDomain: "dk",
  shortName: "test",
  publishDate: "2026-08-28",
  publishVersion: "0.0.2",
  previousPublishDate: "2023-06-21",
  previousPublishVersion: "0.0.1",

  postProcess: [generateMermaidFigures],

  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",
});
