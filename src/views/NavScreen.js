import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import Button, { IconButton } from '../components/Button'
import $ from 'jquery'
import SocialIcons from '../components/SocialIcons'

export default class NavScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isActive: false
    }
  }

  componentDidMount = e => {
      this.navScreen = $('#navScreen')
  }

  handleShow = e => {
    this.setState({isActive: true})
    this.navScreen.animate({
      'overflow': 'hidden',
      'padding-top': 0,
      'padding-bottom': 0,
      'margin-bottom': 0,
      'margin-top': 0,
      'height': $(window).height() + 'px'
    }, 400)
  }

  handleHidden = e => {
    let self = this;
    this.props.onClose()
    this.navScreen.animate({
      'overflow': 'hidden',
      'padding-top': 0,
      'padding-bottom': 0,
      'margin-bottom': 0,
      'margin-top': 0,
      'height': 0
    }, 400, function(){
      self.setState({isActive: false});
    })
  }


  render(){
    return (
      <div className="navScreen" id="navScreen" style={{display: ['none','block'][+this.state.isActive]}}>
          <div className="container-fluid">
              <div className="row-fluid">
                  <div className="span7 head-logo">
                      <CloseButton onClick={this.handleHidden} />
                      <h1><a href="/"></a></h1>
                  </div>
                  <div className="span5 ">
                      <ul className="topnav">
                          <li><Button href="https://www.inmobi.com/user/register.html?locale=en_us" className="btn-clear" >Sign Up</Button></li>
                          <li><Button href="https://www.inmobi.com/user/index?productId=1" className="btn-primary">Sign In</Button></li>
                      </ul>
                  </div>
              </div>
              <DetailedMenu menu={this.props.menu}  onClick={this.handleHidden}/>
              <SocialIcons items={this.props.social}/>
          </div>
      </div>
    )
  }
}

NavScreen.defaultProps = {
  onChange: function(){}
}

function CloseButton(props){
  return (
    <button className="screen_close" onClick={props.onClick}>
        <img src="/img/close_nav.png" />
    </button>
  )
}

function DetailedMenu(props){
  return (
    <div className="row-fluid detaiedMenu">
      {
        props.menu.map((m, i) => {
          return (
            <div className="span3" key={i}>
                <ul>
                    <li className="head"><Link to={m.url}>{m.title}</Link></li>
                    {m.items && m.items.length > 0 && m.items.map((a, i) => <li key={i}><Link to={a.url} onClick={props.onClick}>{a.title}</Link></li>)}
                </ul>
            </div>
          )
        })
      }
    </div>
  )
}

DetailedMenu.defaultProps = {
  menu: []
}
