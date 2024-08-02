import './App.css'
import { Coding } from './components/Icons.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Projects } from './components/Projects.jsx'

function App() {

  return (
    <>
      <NavBar />
      <section className="flex place-content-center h-[100vh]">
        <div className='flex justify-center place-items-center gap-[10rem]'>
          <div  className='m-0'>
            <h1 className='text-center'>NexGen</h1>
            <p className='text-lime-500 text-3xl'><> Desarrollo de Software </></p>
          </div>
          <Coding />
        </div>
      </section>
      
      <Projects />
    </>
  )
}

export default App
