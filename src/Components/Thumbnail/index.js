import {Component} from 'react'

import './index.css'

class Thumbnail extends Component {
  render() {
    const {eachThumbnail, onClickThumbnail} = this.props
    const {id} = eachThumbnail

    const onClickThumbnailItem = () => {
      onClickThumbnail(id)
    }

    return (
      <li className="thumbnail-cont">
        <button type="button" className="thumbnail-cont-head">
          <img
            src={eachThumbnail.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail"
            onClick={onClickThumbnailItem}
          />
        </button>
      </li>
    )
  }
}

export default Thumbnail
