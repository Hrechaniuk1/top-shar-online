import telegram from '../../images/socialMedia/telegram.png'
import viber from '../../images/socialMedia/viber.png'
import insta from '../../images/socialMedia/insta.png'

import css from './Footer.module.css'

export default function Footer() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Контакти</h2>
            <div className={css.linksContainer}>
            <div className={css.smLinksContainer}>
                <p className={css.smTitle}>Соціальні мережі</p>
                <ul className={css.iconList}>
                    <li><a className={css.link} href='tel:+380973351065' target="_blank"><img className={css.icon} src={telegram} alt="tele" /></a></li>
                    <li><a className={css.link} href='viber://add?number=380973351065' target="_blank"><img className={css.icon} src={viber} alt="viber" /></a></li>
                    <li><a className={css.link} href='https://www.instagram.com/toptop_shar/' target="_blank"><img className={css.icon} src={insta} alt="insta" /></a></li>
                </ul>
            </div>
            <a className={css.callBtn} href='tel:+380973351065'>Зателефонувати</a>
            </div>
        </div>
    )
}