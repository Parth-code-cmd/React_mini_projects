import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    // Write Your code here

    toggleIsStarred(id)

    const storedValue = JSON.parse(localStorage.getItem('appointments')) || []
    const updatedList = storedValue.map(event =>
      event.id === id ? {...event, isStarred: !event.isStarred} : event,
    )

    localStorage.setItem('appointments', JSON.stringify(updatedList))
  }

  return (
    <li className="appointment-item ">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          className="star-button"
          onClick={onClickStar}
          data-testid="star"
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )

  // Write your code here
}

export default AppointmentItem
