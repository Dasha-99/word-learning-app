
import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'
export const WordsContext = createContext()

export default function WordsContextProvider({ children }) {
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchWords() {
        try {
            fetch('/words')
                .then(response => {
                    if (response.ok)
                        return response.json()
                    else
                        throw new Error('Что-то пошло не так ...')
                })
                .then(data => {
                    setWords(data)
                    setLoading(false)
                })
        } catch (e) {
            setError(e)
        }
    }

    async function deleteWord(id) {
        try {
            const response = await fetch(`/words/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setWords(words.filter((item) => item.id !== id))
            }
            else {
                throw new Error('Не удалось удалить слово')
            }
        } catch (e) {
            setError(e)
        }
    }

    async function updateWord(id, updateWord) {

        try {
            const response = await fetch(`/words/${id}`, {
                method: "PUT",
                body: JSON.stringify(updateWord),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            if (response.ok) {
                const data = await response.json();
                setWords(
                    words.map((item) => item.id === id ? data : item)
                )
            }
            else {
                throw new Error('Не удалось сохранить изменения')
            }
        } catch (e) {
            setError(e)
        }
    }

    async function addWord(newWord) {
        try {
            const response = await fetch('/words', {
                method: "POST",
                body: JSON.stringify(newWord),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            if (response.ok) {
                const data = await response.json()
                setWords([...words, data])
            }
            else {
                throw new Error('Не удалось добавить слово')
            }
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchWords()
    }, [])

    return (
        <WordsContext.Provider value={{ words, loading, error, deleteWord, updateWord, addWord }}>
            {children}
        </WordsContext.Provider>
    )
}

WordsContextProvider.propTypes = {
    children: PropTypes.node,
};