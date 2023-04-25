import Article from './Article'
import data from './data'
import { useState, useEffect } from 'react'
import { useAppContext } from './context'

function App() {
  const [books, setBooks] = useState(data)
  const { toggle, changeTheme } = useAppContext()

  useEffect(() => {
    document.documentElement.className = toggle
  }, [toggle])

  return (
    <main className={toggle}>
      <nav>
        <div className="nav-center">
          <h1>Over Reacted</h1>
          <button className={`btn ${toggle}`} onClick={() => changeTheme()}>
            Toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {books.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  )
}

export default App
