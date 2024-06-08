import BalloonCard from "../BallonCard/BallonCard";
import balloons from "../../data/data";
import css from './BallonsList.module.css'

export default function BallonList() {
    return (
        <ul className={css.list}>
            {balloons.map(item => {
                return <li key={item.id} className={css.item}><BalloonCard info={item} ></BalloonCard></li>
            })}
        </ul>
    )
}