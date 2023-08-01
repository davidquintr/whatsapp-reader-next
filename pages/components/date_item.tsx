interface DateItemProps{
    date : Date
}

const DateItem = ({date} : DateItemProps) => {
    return(
        <>
        <li className="flex text-center items-center justify-center">
            <p className=" bg-darkgray text-white/30 rounded-mdtop-0 px-5">{date?.toString()}</p>
        </li>
        </>
    )
}

export default DateItem