import closePopupButton from '../images/popup_close_button.svg'


export function PopupWithForm (props) {



  return (
        <>
        <div className={`popup popup_${props.name}`}>
          <div className="popup__container">
            <h2 className="popup__header">{props.title}</h2>

            {/* <form className={`popup__form popup__form_${props.name}`} name={`popup__form_${props.name}`} noValidate> */}

            <form action="#" name="add-form" className="popup__main" noValidate>
             <fieldset className="popup__info">{children}</fieldset>


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