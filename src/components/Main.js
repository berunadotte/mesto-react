export function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_update_avatar').classList.add('popup_opened')
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_edit-profile').classList.add('popup_opened')
  }  

  function handleAddPlaceClick() {
    document.querySelector('.popup_new-card').classList.add('popup_opened')
  }


  return (
    <main className="main">
    
    <section className="profile">
      <div className="profile__avatar">
        <img onClick={handleEditAvatarClick} src="./images/avatar_edit-button.svg" alt="аватарка пользователя" className="edit-icon profile__avatar_edit-button"/>
        <img src="./images/avatar_photo.png" alt="аватарка пользователя" className="profile__avatar-img"/>
      </div>
        <div className="profile__info">
         <h1 className="profile__title">Жак-Ив Кусто</h1>
         <button type="button" onClick={handleEditProfileClick} className="profile__edit-button" aria-label="кнопка редактирования"></button>
         <p className="profile__subtitle">Исследователь океана</p>
       </div>
      
      <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
    </section>

    <section className="cards" aria-label="Секция с карточками">
      <ul className="cards__list"></ul>
        <template className="cards__template">
           <li className="card">
             <img className="card__image" alt="card"/>
             <div className="card__container">
              <h2 className="card__label"> </h2>
              <div className="card__like_container">
                <button type="button" className="card__like-button">
                  <img src="./images/like_button.svg" alt="лайк" className="card__like"/>
                </button>
                <p className="card__like_count">0</p>
              </div>

             </div> 
             <button className="card__delete-button">
            </button>
           </li>
        </template>
    </section>

  </main>
  )
}