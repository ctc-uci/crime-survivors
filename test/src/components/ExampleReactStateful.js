import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from "uuid"

// This is a stateful react component
class ExampleReactStateful extends Component {
  constructor(props) {
    super(props)
  
    // set ur default states!
    this.state = {
       counter:0
    }

    // bind ur event handlers!
    this.incrementFunction = this.incrementFunction.bind(this)
  }

  incrementFunction(){
    // always use this.setState({...})
    this.setState({...this.state, counter: this.state.counter+1})
  }

  // Type validation on incoming types (optional but plz do it)
  static propTypes = {
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

  render() {
    return (
      <div>

      {/* stateful */}
      <h2>Button has been clicked {this.state.counter} times! </h2>
      <button onClick={this.incrementFunction}>Click mee</button>

      <h2>{this.props.resource.title}</h2>
      <h3>{this.props.resource.desc}</h3>
      {this.props.resource.phone.map(phoneInfo => (
        <div key={uuidv4() /*uuid bc array of items*/}>  
          <h3>
            {phoneInfo.desc}
            <br />
            {phoneInfo.number}
          </h3>
        </div>
      ))}
      <h3>{this.props.resource.website}</h3>
      <h3>{this.props.resource.hours}</h3>
      <h3>{this.props.resource.address}</h3>
      <br />
    </div>
    )
  }
}

export default ExampleReactStateful