import { MdEmail } from 'react-icons/md'
import { AboutContainer, StyledImage } from '../styles/About'
import { Card, Container, Stack } from '../styles/UI'

export default function About() {
  return (
    <AboutContainer>
      <Stack direction='column' justify='center' align='center'>
        <StyledImage src='img/coding.svg' />
        <Container>
          <Card bg='#efefef' color='#333' shadow style={{ margin: '1rem' }}>
            <h1 className='text-center'>About Software Developer</h1>
            <h2 className='text-center text-secondary'>John Doe</h2>
            <p>
              I've already known JS, ReactJS, ReactNative, NodeJS, MongpDB, SQL,
              Python, AWS Services.
            </p>
            <Stack>
              <MdEmail className='mail-icon' />
              <a href='mailto:johndoe@gmail.com'>Johndoe@gmail.com</a>
            </Stack>
          </Card>
        </Container>
      </Stack>
    </AboutContainer>
  )
}
