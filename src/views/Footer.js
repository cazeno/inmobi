import React from 'react'
import { Link } from 'react-router'
import Button, {IconButton} from '../components/Button'
import SocialIcons from '../components/SocialIcons'

export default class Footer extends React.Component{
  render(){
    let links = this.props.links;
    return (
      <div id="footer-v4">
        <div className="container">
          <div className="row-fluid">
            <div className="span6">
              <SocialIcons items={this.props.social} />
            </div>
            <div className="span5 offset1 subscribe">
               <p><a className="btn btn-clear" data-modal-trigger="#subscribeFooter" data-toggle="modal">subscribe to our newsletter</a></p>
            </div>
            <div id="subscribeFooter" className="modal modal-mobi hide fade" tabIndex="-1" role="dialog">
              <div className="modal-body modal-text">
                <h3>Subscribe to our newsletter</h3>
              </div>
            </div>
          </div>
          <div className="row-fluid">
            <LinkGroup item={links[0]} />
            <LinkGroup item={links[1]} />
            <div className="span2" style={{position: "relative"}}></div>
            <div className="span1"></div>
            <div className="span5 badges">
              <h4>Learn more about ads (iab)</h4>
              <p>
                <a href="http://privacy.truste.com/privacy-seal/InMobi-PTE--LTD/validation?rid=9934d8a4-13f6-4c9f-b8b0-65f23d459fbe" data-track="footer:click:truste"><img src="/img/truste.png" /></a>
                <a href="http://www.mmaglobal.com/" data-track="footer:click:mma"><img src="/img/mma.png" /></a>
                <a href="http://www.iab.net/" data-track="footer:click:iab"><img src="/img/iab.png" /></a>
              </p>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12 copyright"><p>© 2016 InMobi </p></div>
          </div>
        </div>
      </div>
    )
  }
}

function LinkGroup(props){
  if(!props.item) throw new Error('props.items is null in LinkGroup')
  return (
    <div className="span2">
      <h4>{props.item.title}</h4>
      <ul>
        {props.item.items.map((item, i) => {
          return (<li key={i}><Link to={item.url}>{item.title}</Link></li>)
        })}
      </ul>
    </div>
  )
}
