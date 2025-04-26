'use client'
interface Props {
    titulo: string
    onClick?: () => void
    //icon?: React.ReactNode
    secundaryButton?: boolean
}
export default function Button(props: Props) {
    return (
        <div className="flex-row items-center justify-center">
            {/* <div className="w-[21] h-[21]">{!props.icon}</div> */}
            <button
                className={
                    props.secundaryButton == undefined || props.secundaryButton == false
                        ? 'bg-[#328D66] hover:bg-green-800  dark:border-green-700 text-white font-medium py-2 px-4 rounded-xl transition duration-200'
                        : 'border hover:border-[#328D66] dark:border-green-700 text-black font-medium py-2 px-4 rounded-xl transition duration-200'
                }
                onClick={props.onClick || (() => {})}
            >
                {props.titulo}
            </button>
        </div>
    )
}
