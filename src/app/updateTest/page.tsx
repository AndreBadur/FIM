import { GeneralUpdate } from "@/components/UpdateTable";
// import { useSearchParams } from "next/navigation";

export default function UpdateTest(){
    // const searchParams = useSearchParams()
    const idFarm = 7
    return(
        <GeneralUpdate farmerId="1" caseToUpdateId={idFarm.toString()}/>
    )
}