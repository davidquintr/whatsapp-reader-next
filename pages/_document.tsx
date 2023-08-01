import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-darkbg min-h-screen relative flex flex-col'>
        <Main />
        <footer className='flex flex-col justify-center items-center text-brightgreen bg-darkgreen p-[10px] gap-[8px] relative mt-auto'>
          <p>©2023 Designed and Programmed by David Quintanilla</p>
          <Link href={"https://github.com/davidquintr/whatsapp-reader-next"} target='_blank' className=' bg-greenmsh p-1 hover:bg-greenmsh/40 transition-all active:scale-[0.98] rounded-md text-white flex text-sm gap-[5px] items-center hover:'>
            <FaGithub></FaGithub>
            <p>View Source</p>
          </Link>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
