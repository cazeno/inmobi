import React from 'react'
import classnames from 'classnames'
import Button from '../../components/Button'

export default class Home extends React.Component{
  render(){
    return (
      <div id="home">

        <Main items={[
          {index:0, title: 'acquire high value users', url: '/advertisers/user-acquisition', img: '/img/home_users.png'},
          {index:1, title: 'remarket to existing users', url: '/advertisers/remarketing', img: '/img/screen_remarket.gif'},
          {index:2, title: 'drive brand engagement', url: '/advertisers/brand-marketing', img: '/img/Netflix_summer.png'},
          {index:3, title: 'maximize mobile revenues', url: '/publishers', img: '/img/home_native.jpg'}
        ]}/>

        <Intro />

        <Reimagine />

        <PowerHouse />

        <Innovation />

        <Business />

      </div>
    )
  }
}

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {activeIndex: 0}
  }

  componentDidMount(){
    //  添加定时切换
    this.autoSwitch = setInterval(n => {
      let currentIndex = this.state.activeIndex;
      this.handleClick(currentIndex === 3 ? 0 : ++currentIndex)
    }, 4e3)
  }

  componentWillUnmount(){
    this.autoSwitch && clearInterval(this.autoSwitch)
  }

  handleClick = index => {
    this.setState({activeIndex: index})
  }

  render(){
    let activeItem = this.props.items[this.state.activeIndex]
    return (
      <div id="main" className="bg-0">
        <div className="container ">
          <div className="row">
            <div className="span7">
              <h2>Pioneering <span>mobile discovery</span> through <span>personalized ad experiences</span></h2>
              <h3>InMobi platforms leverage advanced  data-sciences to help you</h3>
              <SubHeader items={this.props.items} index={this.state.activeIndex} />
              <IconLinks index={this.state.activeIndex} onClick={this.handleClick}/>
            </div>
            <PhoneScreen items={this.props.items} index={this.state.activeIndex} />
          </div>
        </div>
      </div>
    )
  }
}

function SubHeader(props){
  let content = props.items.map((item, i) => {
    return (
      <div key={i} className={classnames({"hd": true, "active": i === props.index})}>
        <h4>{item.title}</h4>
        <p><Button href={item.url} className="btn-clear">Know How</Button></p>
      </div>
    )
  })
  return (
    <div id="headers" className="headers">
      {content}
    </div>
  )
}

function PhoneScreen(props){
  let screens = props.items.map((item, i) => {
    return (
      <div key={i} className={classnames({"indScreen": true, "active": i === props.index})}>
        <div className="phone">
          <img src={item.img} className="screen" />
        </div>
      </div>
    )
  })
  return (
    <div className="span5">
      {screens}
    </div>
  )
}

function IconLinks(props){
  let lis = [],
      handleClick = i => e => { props.onClick(i) }
  for(let i = 0; i < 4; i++){
    lis.push(<li key={i}><a className={i === props.index ? 'active' : ''} onClick={handleClick(i)}></a></li>)
  }
  return (
    <ul id="icon-links">
      {lis}
    </ul>
  )
}

function ScrollDown(props){
  return (
    <div id="scrollDown" style={{display: ['none', 'block'][+props.active]}}>
      <div className="arrow">
      </div>
      <p>Scroll to Learn More</p>
    </div>
  )
}

function Intro(props){
  return (
    <div id="intro" className="scrollNext">
      <div className="container">
        <p>
        At InMobi, we are reimagining advertising to deliver real value for mobile consumers. Be it innovative ad formats that elevate the mobile
        experience, or contextual &amp; personalized recommendations that drive discovery, our products are designed to inspire, engage, and delight mobile users.
        </p>
      </div>
    </div>
  )
}

function Reimagine(props){
  return (
    <div id="reimagine">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h2><span>Reimagining Mobile Advertising with Miip</span></h2>

            <h4>Welcome to the next generation of ad-tech</h4>

            <p>
              At InMobi, we want users to love advertising. The Miip platform, launched with the goal of realizing this vision, combines the power of pristine data, refreshing creative design and powerful back-end integrations to deliver an unparalleled advertising experience for mobile consumers. While advertisers can now extend beyond driving brand awareness and app installs to driving transactions &amp; sales from their mobile campaigns, consumers can be inspired to shop &amp; buy products from their mobile devices, in the moment that matters the most.
            </p>

            <p className="buttons stack">
              <a href="/advertisers/remarketing/" className="btn btn-clear">
                Remarketing with Miip
              </a>

              <a href="/products/creatives/" className="btn btn-clear">
                Ad Experiences by Miip
              </a>
            </p>

           </div>
        </div>

      </div>
    </div>
  )
}

function PowerHouse(props){
  return (
    <div id="powerhouse">
      <div className="container">
        <div className="row">
          <div className="span8">
            <h4>Were not just another mobile advertising company</h4>
            <h3>We are a technology powerhouse</h3>
            <p>The global scale &amp; reach of our full-stack advertising platform helps brands nudge mobile users across different stages of their lifecycle, converting each mobile moment into an opportunity to drive engagement &amp; revenue.</p>
            <div className="statBoxes">
              <div className="statCol statLeft">
                <div className="statBox">
                  <span className="ico device"></span>
                  <p className="statHead">1.5 Billion+ </p>
                  <p className="statDesc">unique mobile devices</p>
                </div>
                <div className="statBox">
                  <span className="ico data"></span>
                  <p className="statHead">120+ TB</p>
                  <p className="statDesc">of user data analyzed <br />monthly</p>
                </div>
                <div className="statBox">
                  <span className="ico pubs"></span>
                  <p className="statHead">32,000+ </p>
                  <p className="statDesc">publisher apps</p>
                </div>

              </div>
              <div className="statCol statRight">
                <div className="statBox">
                  <span className="ico advs"></span>
                  <p className="statHead">20,000+ </p>
                  <p className="statDesc">Global advertisers </p>
                </div>
                <div className="statBox">
                  <span className="ico downloads"></span>
                  <p className="statHead">6 Million+ </p>
                  <p className="statDesc">App downloads tracked monthly</p>
                </div>
                <div className="statBox ">
                  <span className="ico adreqs"></span>
                  <p className="statHead">200 Billion+ </p>
                  <p className="statDesc">monthly ad requests</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Innovation(props){
  return (
    <div id="innovation">
      <div className="container">
        <div className="row">

          <div className="span5 left">
            <div className="fuels">
              <h4>INNOVATION FUELS<br /><span>OUR GROWTH</span></h4>
            </div>
          </div>


          <div className="span6 right">
            <div className="blueBg">
              <h4 className=""><span># 15</span> ON FAST COMPANY’S</h4>
              <h4 className="darkBlueBg">THE WORLD’S <span>MOST INNOVATIVE</span></h4>
              <h4 className="">COMPANIES 2016 LIST </h4>

            </div>
            <p className="italics">“For making ads that<br />
              users actually want to see.”
            </p>


          </div>



        </div>
      </div>
    </div>
  )
}

function Business(props){
  return (
    <div id="business">
      <div className="container">
        <div className="row">

          <div className="span10 offset1 center">

              <h3>Grow your mobile business with InMobi</h3>
              <div className="dash"></div>
              <p>SEE BELOW TO LEARN HOW</p>

          </div>


        </div>
        <div className="row bot">

          <div className="span4 offset2 center">
            <p><a href="/advertisers/" className="btn btn-clear">Advertisers</a></p>
          </div>
          <div className="span4 center">
            <p><a href="/publishers/" className="btn btn-clear">PUBLISHERS</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
