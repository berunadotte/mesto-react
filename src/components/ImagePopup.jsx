import closePopupButton from '../images/popup_close_button.svg'


export default function ImagePopup() {
  return(
    <div className="popup popup_image">
    <div className="popup__image-container">
      <img src="./images/null.svg" alt="undefined" className="popup__image"/>
      <p className="popup__image-label"></p>
      <button type="button" className="popup__close-button">
        <img src={closePopupButton} alt="кнопка закрытия" className="popup__close-icon"/>
      </button>
    </div>
  </div>
  )
}