import { useLocation } from 'react-router-dom'
import {
  Button,
  DetailsContainer,
  List,
  Section,
  StyledImage,
  Title,
} from '../styles/Details'
import { Card, Container, Stack } from '../styles/UI'
export default function Details() {
  const { state } = useLocation()
  const recipe = state.recipe
  console.log(recipe)

  const labels = [
    'PROCNT',
    'FAT',
    'CHOCDF.net',
    'CHOLE',
    'NA',
    'CA',
    'MG',
    'K',
    'FE',
  ]

  return (
    <Container>
      <DetailsContainer>
        <Card shadow bg='#efefef'>
          <Stack
            direction='row'
            gap='1px'
            justify='space-between'
            align='center'
          >
            <StyledImage src={recipe.image} />
            <div className='right-side'>
              <Title>{recipe.label}</Title>
              <Card
                bg='#f1f1f1'
                border='1px solid #ccc'
                shadow
                style={{ marginBottom: '5px' }}
              >
                <h3>Ingeredients</h3>
                <hr />
                <List>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </List>
              </Card>
            </div>
          </Stack>
          <Card bg='#f1f1f1' border='1px solid #ccc' id='nutrients-card' shadow>
            <Stack direction='row' gap='2rem' justify='flex-start'>
              <Section>
                <Title>{recipe.calories.toFixed(1)} cal.</Title>
              </Section>
              <Section>
                {labels.map((item, index) => (
                  <Stack key={index} direction='row' justify='space-between'>
                    <p>{recipe.totalNutrients[item].label}</p>
                    <h4>
                      {recipe.totalNutrients[item].quantity.toFixed(2)}
                      {recipe.totalNutrients[item].unit}
                    </h4>
                  </Stack>
                ))}
              </Section>
            </Stack>
          </Card>
          <div className='text-center'>
            <Button to={-1}>Back</Button>
          </div>
        </Card>
      </DetailsContainer>
    </Container>
  )
}
