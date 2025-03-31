// image imports go here

import dj from "../images/thumb-daja.jpg";
import ots from "../images/thumb-ontheshelf.jpg";
import insero from "../images/thumb-insero.jpg";
import dc from "../images/DANNY.jpg";
import tao from "../images/thumb-tao2.jpg";
import ros from "../images/thumb-ros.jpg";

export const bigProjCard = {
  image: tao,
};

export const aboutPic = {
  image: dc,
};

export const portfolioCards = [
  {
    id: 1,
    title: "Insero Request Form",
    description: "A landing page for prospective clients",
    image: insero,
    URL: "https://inseroadvisors.com/surveys/accounting-scorecard-request-form/",
    alt: "a screenshot of the Insero request form landing page",
  },
  {
    id: 2,
    title: "ROS concert programs",
    description: "A template for responsive concert programs",
    image: ros,
    URL: "https://rossings.org/programs/timbuctoo/",
    alt: "a screenshot of the Rochester Oratorio Society concert program",
  },
  {
    id: 3,
    title: "DJ Limavi",
    description: "A webapp for finding music",
    image: dj,
    URL: "https://matthewmontiel.github.io/daja-limavi/",
    alt: "a screenshot of DJ Limavi",
  },
  {
    id: 4,
    title: "On the Shelf",
    description: "A webapp for cataloging board games",
    image: ots,
    URL: "https://ontheshelf-b06e928cc0f2.herokuapp.com",
    alt: "a screenshot of On the Shelf",
  },
];

export const proficiencyCards = [
  {
    id: 1,
    title: "Languages",
    body: "HTML5, CSS3, JavaScript ES6+, SQL",
  },
  {
    id: 2,
    title: "Applications",
    body: "Git, GitHub, MongoDB, MySQL, Heroku",
  },
  {
    id: 3,
    title: "Tools",
    body: " Express, React, Node, Bootstrap, Bulma, GraphQL, Mongoose, Jest",
  },
  {
    id: 4,
    title: "Other",
    body: "Wordpress, professional teaching experience, professional writing experience",
  },
];
