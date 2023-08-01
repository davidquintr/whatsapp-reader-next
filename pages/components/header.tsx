import logo from '../assets/img/iconreader.png';
import Image from 'next/image';

interface HeaderProps{
    className? : string
}

const Header = ({className} : HeaderProps) => {

    return(
        <>
            <header className={`sticky w-screen top-0 ${className} bg-darkgreen text-white flex justify-start items-center shadow-lg gap-2 p-3 `}>
                <Image src={logo.src} width={48} height={48} alt='whatsapp-reader-logo' title="Logo WhatsApp Reader"/>
                <h3 className='font-bold text-xl tracking-wider '>WhatsApp Reader</h3><p className=''>Next</p>
            </header>
        </>
    )

}

export default Header;