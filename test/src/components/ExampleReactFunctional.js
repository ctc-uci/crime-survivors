import React from "react"
import PropTypes from "prop-types"
import uuidv4 from "uuid"

// This is a functional react component (no states, only props)
const ExampleReactFunctional = props => {
  return (
    <div>
      <h2>{props.resource.title}</h2>
      <h3>{props.resource.desc}</h3>
      {props.resource.phone.map(phoneInfo => (
        <div key={uuidv4() /*uuid bc array of items*/}>  
          <h3>
            {phoneInfo.desc}
            <br />
            {phoneInfo.number}
          </h3>
        </div>
      ))}
      <h3>{props.resource.website}</h3>
      <h3>{props.resource.hours}</h3>
      <h3>{props.resource.address}</h3>
      <br />
    </div>
  )
}

// Type validation on incoming types (optional but plz do it)
ExampleReactFunctional.propTypes = {
  resource: PropTypes.shape({
    address: PropTypes.string,
    category: PropTypes.string,
    phone: PropTypes.arrayOf(
      PropTypes.shape({
        desc: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
}

export default ExampleReactFunctional
