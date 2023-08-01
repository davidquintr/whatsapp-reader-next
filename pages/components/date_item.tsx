interface DateItemProps{
    date : Date
}

const DateItem = ({date} : DateItemProps) => {
    return(
        <>
        <li className="flex text-center items-center justify-center">
            <p className=" bg-darkgray text-white/80 text-sm rounded-md max-w-[40%] px-5">{date?.toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        </li>
        </>
    )
}

export default DateItem