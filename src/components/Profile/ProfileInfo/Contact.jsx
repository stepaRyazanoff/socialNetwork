import React from 'react'

const Contact = ({ contactTitle, contactValue }) => {

   return (
      <div>
         <b>{contactTitle}: </b>{contactValue}
      </div>
   )
}

export default Contact