import {AiOutlineSearch} from 'react-icons/ai'
import styles from './Search.module.css'

function Search({search, setSearch, searchHandler}) {

  return (
    <div className={styles.search__box}>
        <input className={styles.search__input} type="text" placeholder="Search books" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <button className={styles.search__button} onClick={searchHandler}><AiOutlineSearch color='#fff'/></button>
    </div>
  )
}
export default Search;