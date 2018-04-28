import React, { Component } from 'react';
import Card from './card';


class Playlist extends Component {
  render () {
    return (
      <ul className='card-list'>
        {
          this.props.images.map(image => {
            return <Card
              key={image.id}
              image={image.thumbnailUrl + '.jpg'}
              title={image.title}
            />
          })
        }
      </ul>
    )
  }
}

export default Playlist
