interface ITagProps {
  tags: string
}

const Tag = ({ tags }: ITagProps) => {
  return <div className={tags}>#{tags}</div>
}

export default Tag
