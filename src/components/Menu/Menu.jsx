import { Link } from "react-router-dom"

import css from './Menu.module.css'
import logo from '../../../public/images/logo/cropped-logo_top-shar-1.png'

export default function Menu() {
    return (
        <div className={css.header}>
            <Link to='/'><img className={css.logo} src={logo} /></Link>
            <div className={css.list}>
            <Link to='/balloons' >Кульки</Link>
            <Link to='/contacts' >Контакти</Link>
            </div>
        </div>
    )
}
