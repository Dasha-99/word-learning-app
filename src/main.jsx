import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import WordsContextProvider from './context/WordsContext';
import './assets/styles/style.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WordsContextProvider>
      <App />
    </WordsContextProvider>
  </StrictMode>
)