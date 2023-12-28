import {AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';
import styles from './BookCard.module.css'

function BookCard({ data, handleLikeList }) {
  const {title, author, image, language, pages} = data  
  const [like, setLike] = useState(false)

  const likeHandler = () => {
      setLike((like)=>!like)
      handleLikeList(data, like)
  }
  return (
    <div className={styles.book__card__wrapper}>
        <img src={image} alt="" className={styles.book__card__image}/>
        <div className={styles.book__card__info}>
            <h2>{title}</h2>
            <p>{author}</p>
            <div>
                <span className={styles.info__text}>{language}</span>
                <span className={styles.info__text}>{pages}</span>
            </div>
        </div>
        <button className={styles.book__card__button} onClick={likeHandler}><AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize={"1.8rem"}/></button>
    </div>
  )
}
export default BookCard;