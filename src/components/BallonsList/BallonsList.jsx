import BalloonCard from "../BallonCard/BallonCard";
import css from './BallonsList.module.css'

export default function BallonList({balloons, onOrder}) {
    return (
        <ul className={css.list}>
            {balloons.map(item => {
                return <li key={item._id} className={css.item}><BalloonCard info={item} onOrder={onOrder} ></BalloonCard></li>
            })}
        </ul>
    ) 
}