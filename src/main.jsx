import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./components/Header/Header"
import TopicsList from "./components/TopicsList/TopicsList";
import Card from "./components/CardItem/CardItem";
import WordList from "./components/WordList/WordList";
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header titleFirst="Списки слов" titleSecond="Создать список слов" />
    <TopicsList />
    <Card word="die Familie" translation="Семья" />
    <WordList />
  </StrictMode>,
)
