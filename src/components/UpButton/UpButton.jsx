import css from './UpButton.module.css'

export default function UpButton() {

    function clickHandler() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className={css.up} onClick={clickHandler}>Вгору</button>
    )
}