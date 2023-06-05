import './index.css'

const BlogItem = props => {
  const {EachList} = props
  const {title, publishedDate, description} = EachList
  return (
    <div>
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default BlogItem
