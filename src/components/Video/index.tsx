import { useEffect, useRef, useState } from "react"

export default function VideoPlayer() {

    return (
        <>
            <div className="relative">
                <video className="w-full h-full scale-x-125" autoPlay muted loop>
                    <source src="/smiling-woman.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}