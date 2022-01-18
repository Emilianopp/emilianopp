import React from "react";
import { ReactComponent as SQ } from "assets/sq.svg";
import { ReactComponent as rna } from "assets/Rna.svg";
import { ReactComponent as ml } from "assets/ml.svg";
import { ReactComponent as rec } from "assets/rec.svg";
import { ReactComponent as weldon } from "assets/weldon.svg";
const data = [
  {
    src: SQ,
    title: "SkillQuery",
    content: [
      "A web app to search role qualifications",
      "Displays regional hotspots and needed education/technologies ",
      "Built with Huggingface/Tensorflow, Flask, React.js and MongoDB",
    ],

    link: [
      { src: "https://skillquery.com/", title: "Site" },
      { src: "https://github.com/Emilianopp/SkillQuery", title: "Repository" },
    ],
    color: "#0CAA41",
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
    src: ml,
    title: "ML Algorithms",
    content: [
      "Implementation of machine learning algorithms using numpy and pytorch",
      "Completed: logistic/linear regression, decision trees, neural networks",
      "In progress: recurrent neural networks",
    ],

    link: [
      { src: "https://github.com/desouzalab/scRNAClust", title: "Repository" },
    ],
    color: "#EE4C2C",
  },
  {
    src: rec,
    title: "Rec Centre Traffic Analysis",
    content: [
      "Analyzed rec centre traffic tweets",
      "Uncovered traffic trends and built a LSTM RNN forecasting model",
      "Hope to share forecasts through twitter's api once restrictiosn are lifted",
    ],

    link: [
      { src: "https://github.com/desouzalab/scRNAClust", title: "Repository" },
    ],
    color: "#1DA1F2",
  },{
    src: weldon,
    title: "Weldon Twitter Bot",
    content: [
      "Created a bot that tweets the amount of people currently at the Western's biggest library",
     'Implmented using Beautiful Soup for data collection and Twitter api for tweet generation',
     "Data retrival: https://www.lib.uwo.ca/taps/tapper?lib=wel"

    ],

    link: [
      { src: "https://twitter.com/Weldon_Bot", title: "Account" },
      { src: "https://github.com/Emilianopp/weldon-bot", title: "Repository" },
    ],
    color: "black",
  },
];

export default data;
