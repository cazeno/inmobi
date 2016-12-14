import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import Button from '../components/Button'
import NavScreen from './NavScreen'
import $ from 'jquery'

export default class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {headerShow: true, isFloat: false}
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  compoentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  // 打开详细导航栏
  openNavScreen = e => {
    this.navScreen.handleShow()
    this.setState({ headerShow: false })
  }

  // 详细导航栏 关闭回调
  handleNavScreenClose = e => {
    this.setState({ headerShow: true })
  }

  // 处理导航条滚动样式设置
  handleScroll = e => {
    this.setState(prevState => {
      let updateState = {}, scrollTop = document.body.scrollTop
      if(scrollTop > 0 && !prevState.isFloat){
        updateState.isFloat = true
      }else if(scrollTop === 0 && prevState.isFloat){
        updateState.isFloat = false
      }
      return updateState
    })
  }

  render(){
    let menu = this.props.menu;
    return (
      <div id="header-v4" className={classnames({'floating': this.state.isFloat})}>
        <div className="container" style={!this.state.headerShow ? {'display': 'none'} : {}}>
          <div className="row">
            <div className="span3">
              <BugerButton onClick={this.openNavScreen} />
              <Logo />
            </div>
            <div className="span9 hidden-phone hidden-tablet">
              <ul className="topNav">
                {menu.length > 0 && menu.map((a, i) => <NavButton key={i} items={a.items}>{a.title}</NavButton>) }
                <li><Button to='https://www.inmobi.com/user/register.html?locale=en_us' target='_blank' className='btn-clear'>Sign Up</Button></li>
                <li><Button to='https://www.inmobi.com/user/index?productId=1' target='_blank' className='btn-primary'>Sign In</Button></li>
              </ul>
            </div>
          </div>
        </div>
        <NavScreen menu={this.props.menu} social={this.props.social} ref={n => this.navScreen = n} onClose={this.handleNavScreenClose}/>
      </div>
    )
  }
}

function BugerButton(props){
  return (
    <div id="burger" onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function Logo(props){
  return (
    <h1>
      <Link to="/">
        <img src="/img/logo.png" alt="Inmobi" className="white" />
        <img src="/img/logo-color.png" alt="Inmobi" className="color" />
      </Link>
    </h1>
  )
}

function NavButton(props){
  let items = [];
  if(props.items.length > 0){
    items = props.items.map((a, i) => <li key={i}><Link to={a.url}>{a.title}</Link></li>)
  }
  return (
    <li className='hl'>
      <a>{props.children}</a>
      {items &&
        <ul className="subNav">
          {items}
        </ul>
      }
    </li>
  )
}
