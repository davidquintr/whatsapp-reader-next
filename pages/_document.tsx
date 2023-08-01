import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Document() {
  let deployUrl = "https://whatsapp-reader-next.vercel.app/"
  return (
    <Html lang="en">
      <Head>
      <meta property="og:title" content="WhatsApp Reader Next"></meta>
        <meta property="og:description" content="When you export your WA chat, turns chaotic read the conversations WA Reader gives the format to the conversations and shows like the original chat."></meta>
        <link rel="shortcut icon" href="./iconreader.png"></link>
        <meta property="og:type" content="interpreter"></meta>
        <meta property="og:locale" content="en_US"></meta>
        <title>WhatsApp Reader Next</title>
        <meta property="twitter:card" content="summary"></meta>
        <meta property="twitter:title" content="WhatsApp Reader"></meta>
        <meta property="og:image" content={`${deployUrl}thumbnail.png`}></meta>
        <meta property="og:url" content={`${deployUrl}`}></meta>
      </Head>
        <body className='bg-darkbg min-h-screen relative flex flex-col'>
        <Main />
        <footer className='flex flex-col justify-center items-center text-brightgreen bg-darkgreen p-[10px] text-center gap-[8px] relative mt-auto'>
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
