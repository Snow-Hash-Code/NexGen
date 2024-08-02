import './NavBar.css'

export function NavBar () {
  return (
    <nav className="p-6 flex justify-between place-items-center mb-10 bg-[#000000] navigation-bar">
      <a href="/">
        <div>
          <h2  className='text-3xl'>NexGen</h2>
          <span className='text-white font-[Lemon]'>Company</span>
        </div>
      </a>

      <ul>
        <li className='flex justify-between gap-8 font-[Lemon] place-items-center'>
          <a href="/" className='px-4 py-2 bg-lime-700 rounded-full'>Home</a>
          <a href="#projects">Projects</a>
          <a href="/habilities">Habilities</a>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
