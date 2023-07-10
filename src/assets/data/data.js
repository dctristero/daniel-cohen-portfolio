// image imports go here

import dj from "../images/DJ-Limavi-screenshot.png"
import ots from "../images/On-The-Shelf-screenshot.png"
import placeholder from "../images/tumblr.png"

export const bigProjCard = {
   image: dj
}

export const portfolioCards = [
   {
      id: 1,
      title: "On the Shelf",
      description: "A tool for users to catalogue their board game collections",
      image: ots,
      URL: "https://ontheshelf.herokuapp.com/",
      alt: "a screenshot of On the Shelf",
   },
   {
      id: 2,
      title: "Daja 3",
      description: "TBD",
      image: placeholder,
      URL: "http://www.google.com",
      alt: "a screenshot of Daja 3",
   },
   {
      id: 3,
      title: "Avatar Generator",
      description: "A tool for users to generate cartoon avatars",
      image: placeholder,
      URL: "http://www.google.com",
      alt: "a screenshot of Avatar Generator",
   },
   {
      id: 4,
      title: "Feet: The Blog",
      description: "A blog about our feet",
      image: placeholder,
      URL: "http://www.google.com",
      alt: "a screenshot of Feet: The Blog",
   }
]