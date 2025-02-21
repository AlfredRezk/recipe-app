import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.conatainerWidth};
  width: 100%;
  margin: 0 auto;
`

export const Stack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
`

export const Card = styled.div`
  border: ${({ border }) => border};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: ${({ shadow }) => shadow && '1px 2px 5px rgba(0,0,0,0.4)'};
`
