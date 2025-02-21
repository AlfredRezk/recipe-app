import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, Error, LoginContainer } from '../styles/Login'
import { Card } from '../styles/UI'
import * as Yup from 'yup'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('password is required')
      .min(6, 'Minimum 6 chars needed'),
  })

  const submitHandler = () => {
    login()
    navigate('/')
  }

  return (
    <LoginContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Card bg='#efefef' shadow>
          <Form>
            <h1 className='text-center'>Login</h1>
            <Field
              type='text'
              name='username'
              placeholder='username'
              autoComplete='off'
            />
            <Error>
              <ErrorMessage name='username' />
            </Error>

            <Field
              type='password'
              name='password'
              placeholder='********'
              autoComplete='off'
            />
            <Error>
              <ErrorMessage name='password' />
            </Error>

            <div className='text-center'>
              <Button type='submit'>Login</Button>
            </div>
          </Form>
        </Card>
      </Formik>
    </LoginContainer>
  )
}
