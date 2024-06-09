import { Form, Formik, Field, useFormikContext } from "formik"
import { useEffect, useState } from "react"
import clsx from "clsx";

import css from './FiltersBar.module.css'


export default function FiltersBar({submitHandler, initial, clickHandler}) {

    function SyncFormikWithInitialValues({ initial }) {
      const { setValues } = useFormikContext();
    
      useEffect(() => {
        setValues({
          future: initial.future,
          price: initial.price,
        });
      }, [initial, setValues]);
    
      return null;
    }

    function onSubmit(values) {
        submitHandler(values)
    }

    const [isOpen, setIsOpen] = useState(false)

    function onShowFilter() {
      setIsOpen(!isOpen)
    }

    return (
      <div>
         <button className={css.showFilters} onClick={onShowFilter}>Фільтри</button>
      
              <Formik
      onSubmit={onSubmit}
    >
        {() => (
        <Form className={clsx(css.container, {[css.hidden]: !isOpen})}>
          <SyncFormikWithInitialValues initial={initial} />
          <div className={css.future}>
            <label htmlFor="future">Для кого кульки</label>
            <Field className={css.select} as="select" name="future" id="future">
              <option value="" label="..." />
              <option value="man" label="Чоловіку" />
              <option value="girl" label="Дівчині" />
              <option value="kids" label="Дітям" />
              <option value="numbers" label="Цифри" />
            </Field>
          </div>
          <div className={css.price}>
            <label htmlFor="price">Сортування за ціною</label>
            <Field className={css.select} as="select" name="price" id="price">
              <option value="" label="..." />
              <option value="cheap" label="За зростанням" />
              <option value="expensive" label="За спаданням" />
            </Field>
          </div>
          <button className={css.btn} type="submit">Фільтрувати</button>
          <button className={css.btn} onClick={clickHandler} type="button" >Скинути</button>
        </Form>
      )}
    </Formik>
    </div>
    )
}