import { BlogDTO } from '../../types/dto'

interface IBlogProps {
  blog: BlogDTO
}

const Blog = ({ blog }: IBlogProps) => {
  return (
    <div className="flex flex-col w-full gap-2 md:gap-4 my-8">
      <div className="flex gap-[1.125rem] font-montserrat text-xs">
        <div className="font-semibold text-typography-highlight text-red-600">{blog.author}</div>
        <div className="text-typography-description text-gray-500">{blog.date}</div>
      </div>
      <div className="flex flex-col w-full gap-2 font-fcMinimal md:gap-4">
        <div className="font-bold text-typography-title hover:drop-shadow-lg hover:scale-[1.02] hover:translate-x-1  transition-hoverContent ease-in-out duration-300 text-mobile-secondaryHeader leading-[1.625rem] lg:text-secondaryHeader lg:leading-7">
          <a href={blog.url}>{blog.header}</a>
        </div>
        <div className="text-lg leading-[1.25rem] text-typography-description lg:text-desktop-description">
          <a href={blog.url}>{blog.description}</a>
        </div>
        <div className="flex flex-wrap mt-auto gap-x-4 gap-y-2">
          {blog.tags.map((tag, index) => (
            <div
              className="w-max text-typography-description px-[0.625rem] py-[0.1563rem] h-auto border-[0.0313rem] border-typography-description rounded-full tracking-widest font-montserrat text-sm font-bold whitespace-nowrap transition duration-300 hover:text-typography-title border-typography-title bg-slate-200"
              key={index}
            >
              <a href={tag}>#{tag}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
