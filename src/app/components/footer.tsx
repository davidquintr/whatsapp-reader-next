import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className='flex flex-col justify-center items-center text-white dark:text-dark-green-200 dark:bg-dark-gray-500 bg-light-green-200 px-[16px] py-6 text-center gap-[8px] relative'>
        <p>©2023-2024 Designed and Programmed by David Quintanilla</p>
        <Link href={"https://github.com/davidquintr/whatsapp-reader-next"} target='_blank' className=' bg-dark-green-300 p-1 hover:bg-dark-green-300/40 transition-all active:scale-[0.98] rounded-md text-white flex text-sm gap-[5px] items-center hover:'>
          <FaGithub />
          <p>View Source</p>
        </Link>
      </footer>
    )
}