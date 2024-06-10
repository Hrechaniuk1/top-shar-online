import css from './NotFound.module.css'

export default function Loading() {
    return (
        <div className={css.container}>
    <div className={css.balloons}>
        <h2 className={css.text}>Схоже на те, що немає такої сторінки</h2>
    </div>
    </div>
    )
}