import React from 'react'

interface FraseTipo {
    text: string
}

export const Title: React.FC<FraseTipo> = ({text}) => {
    return <h1 className="font-bebasNeue text-[3.7rem] h-[4rem]">{text}</h1>
}

export const SubTitle: React.FC<FraseTipo> = ({text}) => {
    return <p className="font-bebasNeue text-[1.25rem]">{text}</p>
}

export const Option: React.FC<FraseTipo> = ({text}) => {
    return <p className="text-[0.938rem] text-[#7B9A41]">{text}</p>
}

export function Line() {
    return (
        <div className="w-[100%] flex justify-center">
            <div className="w-[90%] h-[0.3px] bg-[#00000066] mt-[1.3rem]"></div>
        </div>
    )
}
