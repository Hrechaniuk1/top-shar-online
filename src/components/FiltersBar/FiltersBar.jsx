import { Form, Formik, Field, useFormikContext } from "formik"
import { useEffect, useState } from "react"
import clsx from "clsx";
// ----------------------------------------------

import css from './FiltersBar.module.css'

// ----------------------------------------------

export default function FiltersBar({submitHandler, initial, clickHandler}) {

  const [isOpen, setIsOpen] = useState(false)

    function SyncFormikWithInitialValues({ initial }) {
      const { setValues } = useFormikContext();
    
      useEffect(() => {
        setValues({
          category: initial.category,
          sortOrder: initial.sortOrder,
        });
      }, [initial, setValues]);
    
      return null;
    }

    function onSubmit(values) {
        submitHandler(values)
        console.log(values)
    }

    return (
      <div className={css.hiddenContainer}>
         <button className={css.showFilters} onClick={() => setIsOpen(!isOpen)}>Фільтри</button>
      
              <Formik
      onSubmit={onSubmit}
    >
        {() => (
        <Form className={clsx(css.container, {[css.hidden]: !isOpen})}>
          <SyncFormikWithInitialValues initial={initial} />
          <div className={css.future}>
            <label htmlFor="category">Для кого кульки</label>
            <Field className={css.select} as="select" name="category" id="category">
              <option value="" label="..." />
              <option value="man" label="Чоловіку" />
              <option value="girl" label="Дівчині" />
              <option value="children" label="Дітям" />
              <option value="numbers" label="Цифри" />
              <option value="babyborn" label="Виписка" />
            </Field>
          </div>
          <div className={css.price}>
            <label htmlFor="sortOrder">Сортування за ціною</label>
            <Field className={css.select} as="select" name="sortOrder" id="sortOrder">
              <option value="" label="..." />
              <option value="asc" label="За зростанням" />
              <option value="desc" label="За спаданням" />
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