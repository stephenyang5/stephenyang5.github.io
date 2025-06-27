const projects = [

  {
    title: "NHL Goal Prediction with GRU",
    date: "2025-06-27",
    description: "A deep learning system that predicts goals in NHL games using GRU neural networks and play-by-play sequence data. The project extracts data from the NHL API, creates balanced sequences of length 5, and trains a bidirectional GRU model with attention mechanism to identify patterns leading to goal-scoring opportunities.",
    link: "",
    github: "https://github.com/stephenyang5/hockeyai",
    tags: ["Python", "Deep Learning", "GRU", "NHL API", "Sports Analytics", "PyTorch", "Numpy","Sequence Modeling"],
    //image: "hockey-puck.svg"
  },
  {
    title: "Chagas Disease Classification from ECG",
    date: "2025-05-16",
    description: "A deep learning model that classifies Chagas disease from 12-lead ECG data using convolutional neural networks. Built for the George B. Moody PhysioNet Challenge 2025, this project aims to enable widespread preliminary testing for Chagas disease through fast, automated ECG analysis.",
    link: "",
    github: "https://github.com/mspancho/heartificial-intelligence-2025",
    tags: ["Python", "Deep Learning", "CNN", "ECG Analysis", "Medical AI", "TensorFlow", "PhysioNet Challenge"],
    image: "heartificial_intelligence.svg"
  },
  {
    title: "Personal Website",
    date: "2024-06-12",
    description: "A personal website built with React and Vite, featuring a blog, project showcase, and more.",
    link: "https://stephenyang5.github.io/",
    github: "https://github.com/stephenyang5/stephenyang5.github.io",
    tags: ["React", "Vite", "Frontend"],
    image: "web-logo-updated.svg"
  },
  {
    title: "iLIR-scraper",
    date: "2024-01-10",
    description: "A web scraping pipeline for collecting AIM motif data from Heterodera schachtii. Automatically queries the iLIR database with FASTA files and extracts anchor points and motifs from the results. Features both single-threaded and distributed processing versions for efficient data collection.",
    link: "",
    github: "https://github.com/stephenyang5/iLIR-scraper",
    tags: ["Python", "Web Scraping", "Bioinformatics", "Data Pipeline", "FASTA Processing", "Multi-threading"],
    //image: 
  }
  // Add more projects here!
];

export default projects; 