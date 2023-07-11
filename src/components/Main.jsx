import React, {useEffect} from 'react';
import { apiMesto } from '../utils/api.js';

export function Main( { onEditProfile, onAddPlace, onEditAvatar }) {

  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  useEffect(() => {
    Promise.all([apiMesto.loadNameAndInfo(), apiMesto.getInitialCards()])
    .then(([userData, cardsData]) => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
      cardsData.forEach((card) => {
        card.myId = userData._id
      })
      setCards(cardsData)
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
         <h1 className="profile__title">{userName}</h1>
         <button type="button" onClick={onEditAvatar} className="profile__edit-button" aria-label="кнопка редактирования"></button>
         <p className="profile__subtitle">{userDescription}</p>
       </div>
      
      <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
    </section>

    <section className="cards" aria-label="Секция с карточками">
    <ul className="cards__list">
      console.log(cards);
      {cards.map((data) => (
        <li className="card">
          <img className="card__image" src={data.link} alt={data.name}/>
          <div className="card__container">
            <h2 className="card__label">{data.name}</h2>
            <div className="card__like_container">
              <button type="button" className="card__like-button">
              </button>
              <p className="card__like_count">0</p>
            </div>
          </div> 
        <button className="card__delete-button"></button>
      </li>
      ))}
      </ul>
    </section>

  </main>
  )
}