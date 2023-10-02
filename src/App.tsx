import './App.css'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import BlogLogo from './assets/blogLogo.svg'
import { BlogDTO } from '../types/dto'

const blogs: BlogDTO[] = [
  {
    header: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    date: 'Nov 26th, 2022',
    readingTime: '3 min',
    url: 'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    header: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    date: 'Apr 26th, 2022',
    readingTime: '9 min',
    url: 'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
  {
    header: 'Solidity Made Easy with Hardhat',
    description: 'A walkthrough guide on how to use Hardhat to develop a smart contract with ease!',
    tags: ['hardhat', 'tutorial'],
    author: 'Aikdanai',
    date: 'Aug 5th, 2022',
    readingTime: '6 min',
    url: 'https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb',
  },
  {
    header: 'Solving DApps Problem with Merkle drop',
    description:
      'When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?',
    tags: ['smart contract', 'web3'],
    author: 'Nutchanon',
    date: 'Sep 27th, 2022',
    readingTime: '8 min',
    url: 'https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942',
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="px-4 max-w-xl mx-auto flex flex-col justify-center gap-[70px] md:w-full md:max-w-[60.625rem] md:gap-[8.75rem] md:px-8">
        <section className="flex flex-col w-full gap-3 md:gap-7">
          <div>
            <div className="w-full flex items-center font-semibold font-montserrat justify-between my-4">
              <div className="flex gap-2 text-gray-500">
                <img src={BlogLogo} className="flex gap-2 items-center text-typography-sectionHeader" alt="blog" />
                <a>Blog</a>
              </div>
              <div className="text-red-600">
                <a href="#">View All</a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[30px] md:gap-y-[60px]">
              {blogs.map((blog) => {
                return <Blog blog={blog} />
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
