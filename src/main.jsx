import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.jsx'
import GlobalStyles from './styles/Global.jsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext.jsx'
import { RecipeProvider } from './context/RecipeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <RecipeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />

          <ToastContainer />
        </ThemeProvider>
      </RecipeProvider>
    </AuthProvider>
  </BrowserRouter>,
)
