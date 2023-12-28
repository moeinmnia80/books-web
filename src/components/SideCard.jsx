import style from './SideCard.module.css'

function SideCard({data: {title, image}}) {
    return (
     <div className={style.side__card}>
        <img src={image} alt="book"  className={style.side__card__image}/>
        <h4 className={style.side__card__title}>{title}</h4>
     </div>
  );
}
export default SideCard;