import { useState, useEffect } from 'react'

import css from './HomeHead.module.css'

export default function HomeHead() {

    const [offSetY, setOffSetY] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setOffSetY(window.pageYOffset)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={css.container} style={{ backgroundPositionY: -offSetY * 0.5 + 'px' }}>
            <h1 className={css.title}>Гелієві кульки в Дніпрі</h1>
        </div>
    )
} 