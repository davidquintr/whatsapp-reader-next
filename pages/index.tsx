import Image from 'next/image'
import { Rubik } from 'next/font/google'
import Header from './components/header'
import Intro from './components/intro'
import MessagesSelect from './components/messages_select'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={`bg-darkbg flex justify-center`}>
        <article className='sm:w-screen flex flex-col gap-2 md:w-9/12 w-1/2 p-3'>
          <Intro></Intro>
          <MessagesSelect></MessagesSelect>
        </article>
      </main>
    </>
  )
}
