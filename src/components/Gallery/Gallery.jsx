import gallery from "../../data/gallery";
import css from './Gallery.module.css'
 
export default function Gallery() {

    return (
        <div className={css.container}>
            <h2 className={css.title}>Галерея кульок</h2>
            <ul className={css.list}>
            {gallery.map(item => {
               return <li key={item.id} > <img className={css.img} src={item.img} alt="img" /></li>
            })}
        </ul>
        </div>
    )
}