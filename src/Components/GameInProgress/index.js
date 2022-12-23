import TabsListComponent from '../TabsListComponent/index'

import Thumbnail from '../Thumbnail/index'

import './index.css'

const GameInProgress = props => {
  const {imagesList, tabsList, onClicking, onClickThumbnail, index} = props

  return (
    <div className="bg-cont">
      <div>
        <img src={imagesList[0].imageUrl} alt="match" className="images" />
      </div>

      <ul className="tabsListItems-cont">
        {tabsList.map(eachTab => (
          <TabsListComponent
            eachTab={eachTab}
            key={eachTab.tabId}
            onClicking={onClicking}
          />
        ))}
      </ul>

      <ul className="thumbnail-cont">
        {imagesList.map(eachThumbnail => (
          <Thumbnail
            key={eachThumbnail.id}
            eachThumbnail={eachThumbnail}
            onClickThumbnail={onClickThumbnail}
          />
        ))}
      </ul>
    </div>
  )
}

export default GameInProgress
