import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "UI Developer",
      icon: mobile,
    },
    {
      title: "Web Designer",
      icon: backend,
    },
    {
      title: "Trainer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Web Designing Senior Trainer",
      company_name: "Anudip Foundation",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Dec 2022 - Apr 2023",
      points: [
        "Trained the graduates on core front end skills Html5, Css3, Bootstrap ,Javascript and J-Query.",
        "Assigning the single page web templates demo to make students proficiency in front end skills.",
        "Assigning the Javascript demo project to enhance their proficiency.",
        "Responsible for train 3-4 batch sizes of 15-20 students/batch per day and impart training/learning as per prescribed curriculum & teaching guidelines.",
      ],
    },
    {
      title: "Investor / Options Trader",
      company_name: "Capital Markets",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2021 - Aug 2022",
      points: [
        "Analyzed all market data for stock trends.",
        "Created diversified portfolios based on risk aversion and desired annual returns.",
        "Performed daily scalps, Arbitrage and swing trades to capture a profitable return based off market volatility.",
        "Utilized technical and fundamental analyses to establish positions.",
      ],
    },
    {
      title: "Business Associate",
      company_name: "Healthywayz",
      icon: shopify,
      iconBg: "#383E56",
      date: "Apr 2018 - Jan 2021",
      points: [
        "Developing a marketing strategy based on product knowledge and industry trends.",
        "Building a network of contacts within an industry or community by initiating contact with potential clients and establishing personal relationships over time.",
        "Creating a plan for generating leads and closing sales, attending industry events, making phone calls to potential clients.",
        "Training sales agents on how to sell products or services effectively.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ola Clone",
      description:
        "Web-based platform that allows users to explore about ola brand and It is a exact clone of official website of ola.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://olaelectric.netlify.app/",
    },
    {
      name: "Folio",
      description:
        "A Multi page Web application that enables users to access lot of aplications like crypto app, Foodie app, Calculator , Pixabay and many more" ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://folio-apps.netlify.app/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };