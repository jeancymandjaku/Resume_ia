const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="/">
        <p className="text-2xl font-bold text-gradient">AI RESUME</p>
        </a>
        <button className="btn-primary w-fit">
            <a href="/upload" >
        Upload Resume 
        </a>
        </button>
    </nav>
  )
}

export default Navbar