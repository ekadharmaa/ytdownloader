import React, {useState} from 'react'
import Modal from './Modal.js'
import Tutor from '../img/tutorial.png'
import Ab from '../img/info.png'
import Copyright from '../img/copyright.png'
import Git from '../img/github.png'

const Tab = (props) => {
  let [modal, setModal] = useState([]);
  
  return (
    <>
    {modal}
      <button 
        className="w-[80%] lg:w-[50%] h-32 bg-white rounded-xl shadow-xl p-3 flex items-center justify-center flex-col gap-2 hover:scale-110 transition"
        onClick={props.github? () => window.open(props.github, '_blank') : () => setModal(modal.concat(<Modal isopen="true" key={modal.length} title={props.title} z="20" hopen="100%" bgcolor="white">{props.content}</Modal>))}
        >
        <img src={props.icon} className="h-8" alt=""/>
        <div className="text-lg font-medium">{props.title}</div>
      </button>
    </>
  )
}

const Guide = () => {
  
  const Content =
  <div className="p-2 w-full">
Cara mendownload Video Youtube menggunakan website ini <br></br>
1. Salin Url Video Youtube <br></br>
2. Klik Video<br></br>
3. Klik Unduh dan Pilih Kualitas<br></br>
4. Anda akan dialihkan ke sebuah link<br></br>
5. Klik titik tiga dipojok kanan dan download :)
</div>
  
  return (
    <Tab 
      icon={Tutor} 
      title="Tutorial" 
      content={Content}
    />
  )
}

const About = () => {
  const Content =
  <div className="p-2 w-full">
Website ini memungkinkan Anda untuk mengunduh video youtube ke penyimpanan Anda. <br></br>
Tetapi ini tidak dapat mengunduh video berhak cipta.
</div>
  
  return (
    <Tab 
      icon={Ab} 
      title="About"
      content={Content}
    />
  )
}

const Credits = () => {
  const Content =
  <div className="p-2 w-full">
Terimakasih Kepada Mufid Wildan dan Jurdy yang sudah membantu<br></br>
  dalam pengembangan website ini :)
</div>
  return (
    <Tab 
      icon={Copyright} 
      title="Credits"
      content={Content}
    />
  )
}

const Github = () => {
  return (
    <Tab 
      icon={Git} 
      title="Github"
      github="https://github.com/ekadharmaa"
    />
  )
}

export {
  Guide, About, Credits, Github
}
