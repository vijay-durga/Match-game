import './index.css'

const TabListComponent = props => {
  const {eachTab, onClicking} = props
  const {tabId, displayText} = eachTab

  const onClickingHead = () => onClicking(tabId)

  return (
    <li className="list-items-cont" onClick={onClickingHead}>
      <button type="button" className="tab-items-head">
        {displayText}
      </button>
    </li>
  )
}
export default TabListComponent
