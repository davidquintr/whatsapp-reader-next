interface DateItemProps{
    date : Date
}

const DateItem = ({date} : DateItemProps) => {
    return(
        <>
        <li className="flex text-center items-center sticky z-0 top-8 justify-center">
            <p className=" bg-darkgray text-white/25 rounded-mdtop-0 px-5">{date.toString()}</p>
        </li>
        </>
    )
}

export default DateItem