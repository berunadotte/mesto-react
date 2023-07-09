import React, {useEffect, useState} from 'react';
import { apiMesto } from '../utils/api.js';


export function Main( { onEditProfile, onAddPlace, onEditAvatar }) {

  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')

  useEffect(() => {
    Promise.all([apiMesto.loadNameAndInfo(), apiMesto.getInitialCards()])
    .then(([userData, cardsData]) => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
    })
    .catch((err) => {
      console.log(err)
    })
  })



  return (
    <main className="main">
    
    <section className="profile">
      <div className="profile__avatar">
        <button type='button' aria-label='Сменить аватар' onClick={onEditProfile} className="edit-icon profile__avatar_edit-button"/>
        <img src={userAvatar} alt="аватарка пользователя" className="profile__avatar-img"/>
      </div>
        <div className="profile__info">
         <h1 className="profile__title">Жак-Ив Кусто</h1>
         <button type="button" onClick={onEditAvatar} className="profile__edit-button" aria-label="кнопка редактирования"></button>
         <p className="profile__subtitle">Исследователь океана</p>
       </div>
      
      <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
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