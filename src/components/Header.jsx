import { Field, Form, Formik } from 'formik'
import { Button, HeaderContainer } from '../styles/Header'
import { Card, Stack } from '../styles/UI'
import { MdSearch } from 'react-icons/md'
import { useRecipe } from '../context/RecipeContext'

export default function Header() {
  const { mealTypes, getData, recipes } = useRecipe()
  const initalValues = { query: '', meal: mealTypes[0].toLowerCase() }

  const submitHandler = (values) => {
    const { query, meal } = values
    getData(query, meal)
    console.log(recipes)
  }
  return (
    <HeaderContainer>
      <h2 className='text-secondary'>Recipe App</h2>
      <Formik initialValues={initalValues} onSubmit={submitHandler}>
        <Form>
          <Card bg='#efefef' style={{ padding: '1rem' }} shadow>
            <Stack gap='1rem' className='form-fields'>
              <Field
                type='search'
                placeholder='Pizza'
                name='query'
                autocomplete='off'
                style={{ flex: 1 }}
              />
              <Field as='select' name='meal'>
                {mealTypes.map((meal, index) => (
                  <option key={index} value={meal.toLocaleLowerCase}>
                    {meal}
                  </option>
                ))}
              </Field>
              <Button type='submit'>
                <Stack align='center' gap='0.5rem' justify='center'>
                  <MdSearch className='searchIcon' />
                  <span>Search</span>
                </Stack>
              </Button>
            </Stack>
          </Card>
        </Form>
      </Formik>
    </HeaderContainer>
  )
}
