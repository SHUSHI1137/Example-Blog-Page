import logo from '../assets/logo.svg'
import moon from '../assets/moon.svg'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full font-fcMinimal font-bold h-[3.75rem] text-lg text-typography-title px-4 sm:px-8 md:px-16">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="relative hidden max-w-xl font-bold md:flex gap-14">
        <p>About Us</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Contact Us</p>
        <img src={moon} className="App-logo" alt="logo" />
      </div>
    </nav>
  )
}

export default Navbar
