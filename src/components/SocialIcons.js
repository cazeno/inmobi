import React from 'react'
import { IconButton } from './Button'

export default class SocialIcons extends React.Component{
  render(){
    let props = this.props
    return props.items.length > 0 ? (
      <ul className='social'>
          {props.items.map((item, i) => {
            return <li key={i}><IconButton href={item.url} className={`fa-${item.name} fa-lg`}/></li>
          })}
      </ul>
    ) : null
  }
}

SocialIcons.defaultProps = {
  items: []
}
