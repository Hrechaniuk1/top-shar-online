import { Form, Formik, Field } from "formik"


export default function FiltersBar({submitHandler}) {

    function onSubmit(values) {
        submitHandler(values)
        // console.log(values)
    }

    return (
        <Formik
      initialValues={{
        feature: '',
        price: '',
      }}
      onSubmit={onSubmit}
    >
        <Form>
          <div>
            <label htmlFor="feature">Для кого кульки</label>
            <Field as="select" name="feature" id="feature">
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