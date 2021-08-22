import React, { Component } from 'react'
import Markdown from 'markdown-to-jsx';



class Markdown_parser extends Component {
    
    
  constructor(props) {
    super(props)
    
    this.state = { md: "" }
  }

  componentWillMount() {
    const { path } = this.props;
    import(`../../../markdown/${path}`).then((module)=>
    
    fetch(module.default)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
    )
  }

  render() {

    let { md } = this.state

    return (
      <div >
        <Markdown className = "markdown" children={md} />
      </div>
    )
  }
}

export default Markdown_parser