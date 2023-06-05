import BlogItem from '../BlogItem'

const BlogList = props => {
  const {EachList} = props

  return (
    <div>
      <BlogItem EachList={EachList} />
    </div>
  )
}

export default BlogList
