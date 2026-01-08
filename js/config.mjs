import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "testing",
  shortName: "test",
  publishDate: "2023-06-21",
  publishVersion: "0.0.1",

  // TODO: Verwijder voordat de release plaats vindt
  latestVersion: "https://github.com/logius-standaarden/automatisering-test/",
  prevVersion: [],

  postProcess: [generateMermaidFigures],

  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",
});
