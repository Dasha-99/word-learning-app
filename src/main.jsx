import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./components/Header/Header"
// import TopicListPage from './pages/TopicListPage';
// import CardItem from "./components/CardItem/CardItem";
// import WordListPage from './pages/WordListPage';
import BrowsingWordsPage from './pages/BrowsingWordsPage';
import './assets/styles/style.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* <TopicListPage /> */}
    {/* <CardItem word="die Familie" translation="Семья" /> */}
    {/* <WordListPage /> */}
    <BrowsingWordsPage />
  </StrictMode>,
)
