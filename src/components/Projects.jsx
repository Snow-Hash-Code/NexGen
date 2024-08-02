import { projects } from '../../projects.json'
import { Eye } from './Icons'

export function Projects () {
  return (
    <main id='projects' className="m-0 flex place-items-center flex-col min-w-[320px]">
      <h1 className="text-center pb-4">Proyectos</h1>
      <span className='h-4 border-4 border-lime-500 w-40 rounded-full bg-lime-500'></span>
      <ul className='grid grid-cols-2 gap-6 mt-10'>
        {projects.map(project => (
          <li key={project.id} className='max-w-[400px] min-w-[320px] bg-[#293548] flex flex-col rounded-lg'>
            <img src={project.url} alt={project.name} className='rounded-t-lg' />
            <div className='flex gap-2 place-items-center p-2'>
              <Eye />
              <a href={project.url} className='inline-block font-bold hover:text-lime-500 ease-in-out transition-all'>Ver proyecto</a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
