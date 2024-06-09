import BalloonCard from "../BallonCard/BallonCard";
import css from './BallonsList.module.css'

export default function BallonList({balloons}) {
    return (
        <ul className={css.list}>
            {balloons.map(item => {
                return <li key={item.id} className={css.item}><BalloonCard info={item} ></BalloonCard></li>
            })}
        </ul>
    )
}