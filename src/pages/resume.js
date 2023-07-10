import React from 'react'
import resumePDF from "../assets/images/Daniel-Cohen-Resume.pdf"

function resume() {
  return (
   <div>
   <a
     href={resumePDF}
     download="Daniel-Cohen-Resume"
     target="_blank"
     rel="noreferrer"
   >
     <button>Download Resume</button>
   </a>
 </div>
  )
}

export default resume
