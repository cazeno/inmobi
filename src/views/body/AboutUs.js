import React from 'react'
import $ from 'jquery'
import 'jquery-ui'
import draggable from '../../components/Draggable'

export default class AboutUs extends React.Component{


  render(){
    return (
      <div id='about'>
        <Main />
        <Intro />
        <AboutScroll />
        <Culture />
        <Investors />
      </div>
    )
  }
}

function Main(props){
  return (
    <div id="main">

    <video className="mobhide" autoPlay="" loop="" preload="auto" id="bgvid">
			<source src="/video/Careers_Vid_Loop_01.mp4" type="video/mp4" />
			<source src="/video/Careers_Vid_Loop_01.webm" type="video/webm" />
		</video>
        <div className="vid_bg mobhide"></div>

    <div className="container">
      <div className="row">
        <div className="span12">
          <h2>We are bold, unconventional &amp; imaginative</h2>
        </div>
      </div>
    </div>
    <div id="scrollDown" style={{display: 'none'}}>
      <div className="arrow">
      </div>
      <p>Scroll to Learn More</p>
    </div>
  </div>
  )
}

function Intro(props){
  return (
    <div id="intro" className="scrollNext">
    <div className="container">
      <p>At InMobi, our vision is to improve users' lives by enabling them to get the most value from mobile devices. We pioneer mobile discovery through personalized advertising experiences, enabling consumers to discover new products and services through contextual and curated recommendations on mobile devices. Through our revolutionary advertising &amp; discovery platform, developers, merchants and brands can engage mobile consumers globally. Recognized among Fast Company's "2016's Most Innovative Companies in the world", InMobi reaches over 1.5 billion unique mobile devices worldwide.</p>
      <p><a href="/company/leadership/" className="btn btn-clear dark" id="about-scroll-trigger">Meet our Leaders</a></p>
    </div>
  </div>
  )
}

class AboutScroll extends React.Component{
  moveing = false;
  mousePositonY = 0

  constructor(props){
    super(props);
    this.state = {
      dragY: 0
    }
  }

  componentDidMount(){
    this.scrollBarLeft = $('#about-scroll-indicate').offset().left;
    this.scrollMax = $('#about-scroll-indicate').width() - 34 - 20;
    this.innerLength = $('#about-scroll .inner').width();
    this.windowWidth = $(window).width()
    this.dom = {
      content: document.getElementById('about-scroll'),
      indicate: document.getElementById('about-scroll-indicate')
    }

    draggable({
      el: document.querySelector('#about-scroll .square-active'),
      move: this.handleMouseMove
    })
  }

  componentDidUpdate(){
    let scrollLeft = this.state.dragY / this.scrollMax * (this.innerLength - this.windowWidth) || 0;
    this.dom.content.scrollLeft = scrollLeft;
    this.dom.indicate.style.left = parseInt(scrollLeft) + 'px';
  }

  handleMouseMove = e => {
    let range = e.pageX;
    range = range < 0 ? 0 : range;
    range = range > this.scrollMax ? this.scrollMax : range
    this.setState({dragY: range})
  }

  render(){
    let getInnerLeft = e => {
      return -(this.state.dragY / this.scrollMax * (this.innerLength - this.windowWidth)) || 0
    }

    return (
      <div id="about-scroll">
          <div id="about-scroll-indicate" className="visible-desktop" style={{left: 0, 'marginLeft': '12.5%'}}>
            <div className="line"></div>
            <div className="square-left diamond"></div>
            <div className="square-right diamond"></div>
            <div className="square-active" style={{left: `${this.state.dragY}px`}}></div>
            <div className="more hidden-phone">Drag&nbsp; <img width="12" src="/img/indication.png" /> &nbsp;to know more.</div>
            <div className="more visible-phone">Drag&nbsp; <img width="12" src="/img/indication.png" /> &nbsp;to know more.</div>
          </div>
          <div className="inner" >
            <div className="screen-first full">
              <div className="container">
                <h2>Our <span>Story.</span></h2>
                <p>InMobi was conceptualized and born against all odds. A company based out of India tackling mobile in 2007 was no ordinary task. Venture Capital was hard to come by and investors frowned on internet companies from India. InMobi was founded in this opaque environment because its founders had foresight and the required passion to be able to disrupt an industry. Some of the world’s greatest innovations are always met with hostility and InMobi was no different. This is our story – the story of how we built a tech powerhouse headquartered in India.</p>
              </div>
            </div>
            <div className="screen-2007 third">
              <h3>2007</h3>
              <h4>Founded as mKhoj, an sms based search and monetization business in Mumbai, India</h4>
              <p>The 'boys with a PPT' - Naveen Tewari, Abhay Singhal, Amit Gupta and Mohit Saxena begin their entrepreneurial journey in Mumbai.</p>
            </div>
            <div className="screen-2008 third">
              <h3>2008</h3>
              <h4>Grows from 8 to 50 people, in 4 offices across the globe</h4>
              <p>The Founders think big and capture nascent markets. The organization spreads to 4 offices across the globe.</p>
            </div>
            <div className="screen-2009 third">
              <h3>2009</h3>
              <h4>mKhoj pivots to InMobi</h4>
              <p>The Founders quickly realise the immense potential in the mobile advertising business. The idea of InMobi is born with a vision to change the way advertisements are seen on mobile devices.</p>
            </div>
            <div className="screen-2009-2 third">
              <h3>2009</h3>
              <h4>Expansion to Europe</h4>
              <p>By hiring the best local talent and a reinvigorated business model, InMobi expands to Europe</p>
            </div>
            <div className="screen-2010 third">
              <h3>2010</h3>
              <h4>The InMobi Juggernaut enters USA</h4>
              <p>Key focus on the North America market drives the tech powerhouse to enter the biggest ad market and challenge status quo in the industry</p>
            </div>
            <div className="screen-2010-2 third">
              <h3>2010</h3>
              <h4>KPCB &amp; Sherpalo Ventures invest $8 Million in Series B funding</h4>
              <p>With nearly 20 VC rejections, Naveen flies to SF - its a do or die for the fledgling enterpreneurial dream. After a 20-minute meeting with Ram Shriram of Sherpalo, the dream of creating a truly global Indian company is born.</p>
            </div>
            <div className="screen-2011 third">
              <h3>2011</h3>
              <h4>CEO named as 50 Most Influential Executives in Mobile Content</h4>
              <p>Naveen features in an annual power list, based on an industry poll that includes business heads from global giants such as Apple, Facebook, Twitter, Amazon and Google, among others.</p>
            </div>
            <div className="screen-2011-2 third">
              <h3>2011</h3>
              <h4>Acquisition of Sprout</h4>
              <p>InMobi acquires Sprout, a company that offers an easy-to-use platform for building HTML5-based ads. The Sprout platform, which was later relaunched as  InMobi Studio, helps create award-winning rich- media based immersive ad experiences on mobile devices for leading brands globally.</p>
            </div>
            <div className="screen-2011-3 third">
              <h3>2011</h3>
              <h4>SoftBank invests $200MN in InMobi</h4>
              <p>India’s first B2B Unicorn company is born.  SoftBank’s investment validates years of hardwork and the ability for the company to retain and acquire the best talent globally. SoftBank aimed to become the number 1 in Internet company in Asia with this investment in InMobi.</p>
            </div>
            <div className="screen-2013 third">
              <h3>2013</h3>
              <h4>Acquisition of Overlay Media</h4>
              <p>Overlay Media are experts in context aware computing which help in providing personalized content to mobile users. The acquisition helps InMobi continue to be at the forefront of delivering highly engaging content to consumers globally.</p>
            </div>
            <div className="screen-2013-2 third">
              <h3>2013</h3>
              <h4>Recognized on MIT Technology Review's 50 disruptive company's list</h4>
              <p>MIT recognises InMobi’s cutting edge technology  by calling it out in its study of the most disruptive companies in the world. InMobi is the only Indian company to make the list. No other advertising company is mentioned world over.</p>
            </div>
            <div className="screen-2014 third">
              <h3>2014</h3>
              <h4>Launch of the world’s largest Mobile Native Advertising Exchange powered by Rubicon Project</h4>
              <p>InMobi Exchange, a mobile programmatic buying and selling platform is the world’s first exchange to support buying mobile native ads at unprecedented global scale.</p>
            </div>
            <div className="screen-2014-2 third">
              <h3>2014</h3>
              <h4>Launch of Native Ads Platform to redefine mobile ad experience for users</h4>
              <p>InMobi’s Native Ads platform allows app developers and mobile publishers to deliver an engaging, in-context, native ad experience to their end users. </p>
            </div>
            <div className="screen-2015 third">
              <h3>2015</h3>
              <h4>Open-source launch of organization culture YaWiO</h4>
              <p>InMobi’s culture becomes a subject of intrigue. The company spawns 40+ entrepreneurs in India. The founders impart their learnings for India’s startup ecosystem by announcing  YaWiO: which means to Dream Big, Come Together Passionately and Take Ownership of your actions.</p>
            </div>
            <div className="screen-2015-2 third">
              <h3>2015</h3>
              <h4>Reach of 1bn plus unique mobile devices</h4>
              <p>InMobi becomes the only mobile-first advertising platform to reach this landmark milestone. Reaching over a billion mobile devices significantly impacts the scale InMobi is able to provide to advertisers, brands and app developers. </p>
            </div>
            <div className="screen-2015-3 third">
              <h3>2015</h3>
              <h4>Launch of Discovery Platform Miip</h4>
              <p>InMobi launches its revolutionary commerce product, Miip with the vision of creating personalized shopping experiences to enable discovery of products and services by nudging users to discover, buy and experience products and services.</p>
            </div>

            <div className="screen-2016 third">
              <h3>2016</h3>
              <h4>Named no.15 on Fast Companys list of "The World’s Most Innovative Companies"</h4>
              <p>Fast Company recognises InMobi as one of the world’s most innovative companies in 2016, for making ads that people actually want to see.</p>
            </div>

          </div>
        </div>
    )
  }
}

function Culture(props){
  return (
    <div id="culture">
        <div className="container">
          <div className="row">
            <div className="span12">
              <h2>The <span>InMobi Culture</span></h2>
              <p className="text">At InMobi, we have consciously crafted our culture, YaWiO, that enables people to become more of who they are. YaWiO is the convergence of three words that form the foundation of our culture: </p>
              <p><img src="/img/words.png" /></p>
              <p className="text">Our culture is our true north as we nurture all InMobians to maximise their potential by enabling them to think big, giving them complex challenges to solve and providing opportunities tot grow. Together as a team, InMobians are passionate and driven, creative and fun loving, take ownership and are results focused. We are changing the world of mobile and with 20 diverse international offices, and chances are were looking for someone just like you.</p>
              <div className="row buttons">
                <div className="span3"></div>
                <div className="span3">
                  <a href="/company/careers/" className="btn btn-clear">Join Us</a>
                </div>
                <div className="span3">
                  <a href="http://inmobi.com/yawio" className="btn btn-blue">Yawio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

function Investors(props){
  return (
    <div id="investors">
        <div className="container">
          <h2>Our <span>Investors</span></h2>
          <div className="row investor">
            <div className="span4 img">
              <img src="/img/sb.png" />
            </div>
            <div className="span8">
              <p>SoftBank is a leading Internet company that aims to provide a range of services including mobile communications, broadband infrastructure, fixed-line telecommunications, internet culture, and others. SoftBanks corporate vision is to "Make people happy through information revolution," and it continuously strives to create synergies among various content and services within the Group. For more information, please refer to http://softbank.co.jp.</p>
            </div>
          </div>
          <div className="row investor">
            <div className="span4 img">
              <img src="/img/kp.png" />
            </div>
            <div className="span8">
              <p>Kleiner Perkins Caufield &amp; Byers have been early investors in more than 475 IT and biotech firms over the past 35 years, including Amazon, Compaq, Sun Microsystems, Quantum, Google, Netscape and Macromedia. KPCB goes beyond investing and acts as a creative think-tank that helps design industries that can change the world. The firm invests money, time and talent in innovative companies that have become the foundations for new industries.</p>
            </div>
          </div>
          <div className="row investor">
            <div className="span4 img">
              <img src="/img/sherp.png" />
            </div>
            <div className="span8">
              <p>Sherpalo is a mentor capital firm that helps entrepreneurs to build leading, global businesses. It enables budding companies to develop into businesses that can grow from serving an emerging domestic market to serving the global consumer. Sherpalo invests in select companies and pushes entrepreneurs to define early and often the reasons why they believe they will be successful. They have invested in blue chip companies like Google, Amazon and Netscape.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
