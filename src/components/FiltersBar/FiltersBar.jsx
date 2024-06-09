import { Form, Formik, Field } from "formik"


export default function FiltersBar({submitHandler, initial}) {

    function onSubmit(values) {
        submitHandler(values)
    }



    return (
        <Formik
      initialValues={{
        future: initial.future,
        price: initial.price,
      }}
      onSubmit={onSubmit}
    >
        <Form>
          <div>
            <label htmlFor="future">Для кого кульки</label>
            <Field as="select" name="future" id="feature">
              <option value="" label="..." />
              <option value="man" label="Чоловіку" />
              <option value="girl" label="Дівчині" />
              <option value="kids" label="Дітям" />
              <option value="numbers" label="Цифри" />
            </Field>
          </div>
          <div>
            <label htmlFor="price">Сортування за ціною</label>
            <Field as="select" name="price" id="price">
              <option value="" label="..." />
              <option value="cheap" label="За зростанням" />
              <option value="expensive" label="За спаданням" />
            </Field>
          </div>
          <button type="submit">Фільтрувати</button>
        </Form>
    </Formik>
    )
}