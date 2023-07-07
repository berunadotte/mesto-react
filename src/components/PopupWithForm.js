import closePopupButton from '../images/popup_close_button.svg'


export default function PopupWithForm ({
  name,
  title,
  buttonName,
  children,
}) {



  return (
        <>
        <div className={`popup popup_${name}`}>
          <div className="popup__container">
            <h2 className="popup__header">{title}</h2>

            <form className={`popup__form popup__form_${name}`} name={name} noValidate>
              {children}
              <button type="submit" className="button popup__button submit-button">
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

              {/* <input type="text" name="popup__name" className="popup__input popup__input_name-value" placeholder="Введи своё имя" required minLength={2} maxLength={40} id="name-input"/>
              <span className="popup__form-input-error name-input-error"></span>
              <input type="text" name="popup__job" className="popup__input popup__input_job-value" placeholder="Введи свою профессию" required minLength={2} maxLength={200} id="job-input"/>
              <span className="popup__form-input-error job-input-error"></span>
              <button type="submit" className="popup__save-button submit-button">Сохранить</button> */}