import css from './BallonCard.module.css'

export default function BalloonCard({info, onOrder}) {
    const {number, image, price, _id} = info
    return (
        <>
        <p className={css.title}>Сет №{number} - {price} грн</p>
        <img onContextMenu={(evt) => evt.preventDefault()} src={image} alt="img" ></img>
        <button className={css.btn} onClick={() => onOrder(_id)}>Замовити</button>
        </>
    )
}