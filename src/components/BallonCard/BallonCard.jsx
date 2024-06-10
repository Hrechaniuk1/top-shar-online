import css from './BallonCard.module.css'

export default function BalloonCard({info, onOrder}) {
    const {number, img, price, id} = info
    return (
        <>
        <p className={css.title}>Сет №{number} - {price} грн</p>
        <img onContextMenu={(evt) => evt.preventDefault()} src={img} alt="img" ></img>
        <button className={css.btn} onClick={() => onOrder(id)}>Замовити</button>
        </>
    )
}