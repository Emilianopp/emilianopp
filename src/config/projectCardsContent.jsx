import React from "react";
import { ReactComponent as SQ } from "assets/sq.svg";
import { ReactComponent as rna } from "assets/Rna.svg";
import { ReactComponent as ml } from "assets/ml.svg";
import { ReactComponent as rec } from "assets/rec.svg";
import { ReactComponent as weldon } from "assets/weldon.svg";
import { ReactComponent as py } from "assets/py.svg";
const data = [
  {
    src: SQ,
    title: "SkillQuery",
    content: [
      "A web app to search role qualifications",
      "Displays regional hotspots ",
      "Built with Huggingface / Tensorflow, Flask, React.js and MongoDB",
    ],

    link: [
      { src: "https://skillquery.com/", title: "Site" },
      { src: "https://github.com/Emilianopp/SkillQuery", title: "Repository" },
    ],
    color: "#0CAA41",
  },
  {
    src: ml,
    title: "End-to-End Negotiator",
    content: [
      "Implemmented End-to-End negotiation by  Lewis & Yarats",
      "Researched if transformers or monte-carlo tree search would improve performance", 
      "Saw an overall improvement in Pareto Optimal negotiation scores"
    ],

    link: [
      { src: "https://github.com/anthonyprinaldi/end-to-end-negotiator", title: "Repository" },
      { src: "https://drive.google.com/file/d/1I3AYbXPK0UYAz3hkYdcP1Un8SdyKsyhu/view", title: "Final Paper" },
      { src: "https://arxiv.org/abs/1712.05846", title: "End-end-negotiator" },
    ],
    color: "#EE4C2C",
  },
  {
    src: py,
    title: "MuLP",
    content: [
      "A Python implementation of the MultiLayer Personalized Page Rank Algorithm developed by Bravo and Óskarsdóttir (2020) "
    ],

    link: [
      { src: "https://github.com/Banking-Analytics-Lab/MuLP", title: "Repository" },
      { src: "https://arxiv.org/abs/2005.12418", title: "Paper" },
    ],
    color: "#FFE873",
  },
  {
    src: SQ,
    title: "EMP-PY",
    content: [
      "A Python implementation of Expected Maximum Profit metric developed by Verbraken et al (2013, 2014) "
    ],

    link: [
      { src: "https://github.com/Banking-Analytics-Lab/EMP-Py", title: "Repository" },
      { src: "https://www.sciencedirect.com/science/article/pii/S0377221714003105", title: "Paper 2013" },
      { src: "https://www.sciencedirect.com/science/article/pii/S0377221714003105", title: "Paper 2014" },
    ],
    color: "#4B8BBE",
  },
  {
    src: rna,
    title: "scRNAClust",
    content: [
      " A mammalian-brain single cell RNA clustering pipeline",
      "Engineered for Dr. Camila de Souza's lab under her suppervision",
      "Pipeline interacts with Python and R scripts using Snakemake's CLI ",
    ],

    link: [
      { src: "https://github.com/desouzalab/scRNAClust", title: "Repository" },
    ],
    color: "#e1fcfc",
  },
  {
    src: rec,
    title: "Rec Centre Traffic Analysis",
    content: [
      "Analyzed rec centre traffic tweets",
      "Uncovered traffic trends and built a LSTM RNN forecasting model",
    ],

    link: [
      { src: "https://github.com/Emilianopp/WeightRoomTraffic", title: "Repository" },
    ],
    color: "#1DA1F2",
  },{
    src: weldon,
    title: "Weldon Twitter Bot",
    content: [
      "Created a bot that tweets the amount of people currently at the Western's biggest library",
      "Discontinued as data is no longer public"
    ],

    link: [
      { src: "https://twitter.com/Weldon_Bot", title: "Account" },
      { src: "https://github.com/Emilianopp/weldon-bot", title: "Repository" },
    ],
    color: "black",
  },
];

export default data;
