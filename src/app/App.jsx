import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import HomePage from "../pages/HomePage/HomePage"
import TopicListPage from "../pages/TopicListPage"
import WordListPage from "../pages/WordListPage"
import BrowsingWordsPage from "../pages/BrowsingWordsPage"
import TrainingWordsPage from "../pages/TrainingWordsPage"
import NotFoundPage from "../pages/404/404"
import './App.scss'

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/topics' element={<TopicListPage />} />
                <Route path='/topics/:id' element={<WordListPage />} />
                <Route path='/flashcards/:topicName' element={<BrowsingWordsPage />} />
                <Route path='/game/:topicName' element={<TrainingWordsPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
