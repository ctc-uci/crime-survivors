import React from 'react'
import { graphql } from 'gatsby'
import ExampleReactFunctional from "../components/ExampleReactFunctional"
import ExampleReactStateful from "../components/ExampleReactStateful"
import uuidv4 from "uuid"

const ExamplePage = ({data}) => {
  return (
    <div>
    <h1>Functional</h1>
    {data.allOrangeYaml.nodes.map(data=>(
      <div key={uuidv4()}>
      <ExampleReactFunctional  resource={data}/>
      <hr></hr>
      </div>
    ))}
    <h1>Stateful</h1>
    {data.allOrangeYaml.nodes.map(data=>(
      <div key={uuidv4()}>
      <ExampleReactStateful key={uuidv4()} resource={data}/>
      <hr></hr>
      </div>
    ))}
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allOrangeYaml {
      nodes {
        address
        category
        phone {
          desc
          number
        }
        title
        desc
      }
    }
  }
`

export default ExamplePage