import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImageItem} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImageItem = () => {
    clickImageItem(imageUrl, imageAltText)
  }

  return (
    <>
      <li className="list-container">
        <button type="button" onClick={onClickImageItem}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </>
  )
}
export default ThumbnailItem
