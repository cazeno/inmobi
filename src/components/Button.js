import React from 'react'
import { Link } from 'react-router'

export default class Button extends React.Component{
  render(){
    let props = this.props;
    return (
      <Link to={props.href} target={props.target} className={'btn ' + props.className}>{props.children}</Link>
    )
  }
}

export class IconButton extends React.Component{
  render(){
    let props = this.props;
    return (
      <Link to={this.props.href}><i className={`fa ${this.props.className}`}></i></Link>
    )
  }
}
