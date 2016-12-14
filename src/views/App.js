import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Header from './Header'
import Footer from './Footer'


import '../assets/css/dist-v4.css';
// import './assets/css/fonts.css';
// import './assets/css/form.css';
// import '../assets/css/pardotforms.css';
// import '../assets/css/remarketing_products.css';
// import '../assets/css/remarketing.css';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      navgation: [
        {
          title: 'ADVERTISERS',
          url: '/advertisers',
          items: [
            {title: 'Overview', url: '/advertisers'},
            {title: 'Brand Marketing', url: '/advertisers/brand-marketing'},
            {title: 'User Acquisition', url: '/advertisers/user-acquisition'},
            {title: 'Remarketing', url: '/advertisers/remarketing'}
          ]
        },{
          title: 'Publishers',
          url: '/advertisers',
          items: [
            {title: 'Overview', url: '/publishers'},
            {title: 'Video Ads', url: '/publishers'},
            {title: 'Native Ads', url: '/publishers'},
            {title: 'Download SDK', url: '/publishers'}
          ]
        },{
          title: 'Products',
          url: '/advertisers',
          items: [
            {title: 'Ad Experiences', url: '/publishers'},
            {title: 'Targeting Solutions', url: '/publishers'},
            {title: 'Programmatic Buying', url: '/publishers'},
            {title: 'Remarketing', url: '/publishers'}
          ]
        },{
          title: 'COMPANY',
          url: '/company',
          items: [
            {title: 'About Us', url: '/company'},
            {title: 'Leadership', url: '/company'},
            {title: 'Careers', url: '/company'},
            {title: 'Blog', url: '/company'},
            {title: 'INSIGHTS', url: '/company'}
          ]
        }
      ],
      social: [
        {name: 'twitter', url: 'https://twitter.com/inmobi'},
        {name: 'linkedin', url: 'https://twitter.com/inmobi'},
        {name: 'facebook', url: 'https://twitter.com/inmobi'},
        {name: 'youtube', url: 'https://twitter.com/inmobi'},
        {name: 'vimeo', url: 'https://twitter.com/inmobi'},
        {name: 'slideshare', url: 'https://twitter.com/inmobi'},
      ],
      footerLinks: [
        {
          title: 'Quick Links',
          items: [
            {title: 'CONTACT US', url: '/company/contact'},
            {title: 'SUPPORT CENTER', url: '/company/contact'},
            {title: 'COMPANY', url: '/company'},
            {title: 'BLOG', url: '/blog'},
            {title: 'CAREERS', url: '/careers'},
            {title: 'INDECODE', url: '/indecode'},
            {title: 'MEDIA KITS', url: '/downloads'},
          ]
        },{
          title: 'TERMS & CONDITIONS',
          items: [
            {title: 'TERMS OF SERVICE', url: '/company'},
            {title: 'ADVERTISER TERMS', url: '/company'},
            {title: 'CONTENT GUIDELINES', url: '/company'},
            {title: 'OPT-OUT', url: '/company'},
            {title: 'COOKIE POLICY', url: '/company'},
            {title: 'PRIVACY POLICY', url: '/company'},
            {title: 'SECURITY', url: '/company'},
          ]
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <Header menu={this.state.navgation} social={this.state.social}/>

        {this.props.children}

        <Footer links={this.state.footerLinks} social={this.state.social}/>
      </div>
    )
  }
}
