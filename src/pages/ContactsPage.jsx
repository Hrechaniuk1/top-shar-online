import css from './ContactsPage.module.css'

export default function ContactsPage() {

    return (
        <div className={css.container}>
            <h2 className={css.title}>Контакти</h2>
            <p className={css.address}>м Дніпро, вул Воскресенська 0</p>
            <a className={css.btn} href='tel:+380973351065'>097 000 00 00</a>
        </div>
    )
}