import './styles/main.css'

import logoImg from '../src/assets/Logo.svg'

function App() {
  return (
    <div className="max-w-[1344px]  mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu
          <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span>
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a className='relative rounded-lg overflow-hidden' href='#'>
          <img src='/image 1.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anuncio</span>
          </div>
        </a>


        <a href='#'>
          <img src='/image 2.png' />
        </a>
        <a href='#'>
          <img src='/image 3.png' />
        </a>
        <a href='#'>
          <img src='/image 7.png' />
        </a>
        <a href='#'>
          <img src='/image 5.png' />
        </a>

        <a href='#'>
          <img src='/image 6.png' />
        </a>
      </div>
    </div>
  )
}

export default App
