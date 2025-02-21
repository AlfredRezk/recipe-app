import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useRecipe } from '../context/RecipeContext'
import { HomeContainer, StyledCard } from '../styles/Home'
import { Stack } from '../styles/UI'
export default function Home() {
  const { recipes } = useRecipe()
  return (
    <HomeContainer>
      <Header />
      {/* List all recipes */}

      <Stack gap='1rem' justify='center'>
        {recipes.map((item) => (
          <StyledCard key={item.recipe.uri} bg='#efefef' shadow>
            <h5>{item.recipe.label}</h5>
            <Link to='/details' state={{ recipe: item.recipe }}>
              <img src={item.recipe.image} alt={item.recipe.label} />
            </Link>
          </StyledCard>
        ))}
      </Stack>
    </HomeContainer>
  )
}
