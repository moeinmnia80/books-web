import {books as bookData} from '../constants/mockData'
import { useState } from 'react';
import BookCard from './BookCard'
import style from './Books.module.css'
import SideCard from './SideCard';
import Search from './Search';

function Books() {
  const [books, setBooks] = useState(bookData)
  const [liked, setLiked] = useState([])
  const [search, setSearch] = useState([])

  const handleLikeList = (book, status) => {
    if (status){
      const newLikedList = liked.filter((liked) => book.id !== liked.id)
      setLiked(newLikedList)
    }else{
      setLiked((liked)=>[...liked, book])
    }
  }

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    }else{
      setBooks(bookData)
    }
  }

  return (
    <>
        <Search search={search} setSearch={setSearch} searchHandler={searchHandler}/>
        <div className={style.main__content}>
          <div className={style.content__book_list}>
            {books.map((book) => (
                <BookCard key={book.id} data={book} handleLikeList={handleLikeList}/>
            ))}
          </div>
          {!!liked.length && (
            <div className={style.content__book__favorite}>
              <h2 className={style.favorite__title}>Favorite</h2>
              {liked.map((book) => (
                <SideCard key={book.id} data={book}/>
              ))}
            </div>
          )}
        </div>
    </>
  )
}
export default Books