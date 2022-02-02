import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventStatusId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const activeImageClassName = isActive ? 'event-img active' : 'event-img'

  const onClickActiveEvent = () => {
    setActiveEventStatusId(id)
  }

  return (
    <li className="events-item-container">
      <button
        type="button"
        className="event-button"
        onClick={onClickActiveEvent}
      >
        <img src={imageUrl} alt="event" className={activeImageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
