import telegram from '../../../public/images/socialMedia/telegram.png'
import viber from '../../../public/images/socialMedia/viber.png'
import insta from '../../../public/images/socialMedia/insta.png'

import css from './Footer.module.css'

export default function Footer() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Контакти</h2>
            <div className={css.linksContainer}>
            <div className={css.smLinksContainer}>
                <p className={css.smTitle}>Соціальні мережі</p>
                <ul className={css.iconList}>
                    <li><a className={css.link} href='tel:+380970000000' target="_blank"><img className={css.icon} src={telegram} alt="tele" /></a></li>
                    <li><a className={css.link} href='viber://add?number=38000000000' target="_blank"><img className={css.icon} src={viber} alt="viber" /></a></li>
                    <li><a className={css.link} href='https://www.instagram.com/no_page/' target="_blank"><img className={css.icon} src={insta} alt="insta" /></a></li>
                </ul>
            </div>
            <a className={css.callBtn} href='tel:+380970000000'>Зателефонувати</a>
            </div>
        </div>
    )
}