import { useState } from "React";
import { TeslaCarType } from "../interfaces/interfaces&types";

function TeslaCar({name,bgImages}: TeslaCarType) {
    const style: string = `w-screen flex h-screen bg-center bg-[url('${bgImages[0]}')]`
    return (
        <article className={style}>

        </article>
    )
}

export default TeslaCar