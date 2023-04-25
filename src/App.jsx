import Article from './Article'
import moment from 'moment'
import data from './data'
import { useState } from 'react'

function App() {
  const [books, setBooks] = useState(data)

  return (
    <div>
      {books.map((item) => (
        <Article key={item.di} {...item} />
      ))}
    </div>
  )
}

export default App
