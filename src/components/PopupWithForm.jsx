import closePopupButton from '../images/popup_close_button.svg'


export default function PopupWithForm ({ name, title, buttonName, buttonType, children, isOpen,}) {

  return (
        <>
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
            <h2 className="popup__header">{title}</h2>

            <form className={`popup__form popup__form_${name}`} name={name} noValidate>
              {children}
              <button type="submit" className={`popup__button popup__${buttonType}-button submit-button`}>
                {buttonName}
             </button>
            </form>

            <button type="button" className="popup__close-button">
                <img src={closePopupButton} alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div>
        </>
  )
}
