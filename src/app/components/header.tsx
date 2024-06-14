import Image from 'next/image';

interface HeaderProps{
    className? : string
}

const Header = ({className} : HeaderProps) => {

    return(
        <>
            <header className={`sticky w-screen top-0 ${className} bg-light-green-200 dark:bg-dark-gray-500 text-white flex justify-start items-center shadow-lg gap-2 p-3 `}>
                <Image src="/icon.svg" width={48} height={37} alt='whatsapp-reader-logo' title="Logo WhatsApp Reader"/>
                <div className='flex flex-col gap-0.5'>
                    <h1 className='font-bold text-2xl leading-none'>WhatsApp Reader</h1>
                    <span className='text-dark-green-50 leading-none text-xs'>Powered by Next.js</span>
                </div>
            </header>
        </>
    )

}

export default Header;