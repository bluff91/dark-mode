import moment from 'moment'
import { useAppContext } from './context'

const Article = ({ title, date, snippet, length }) => {
  const { toggle } = useAppContext()

  return (
    <article className="post">
      <h2 className={toggle}>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('dddd, MMMM Do YYYY, h:mm a')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}
export default Article
