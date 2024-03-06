import { useState } from "react"

export function useHelp() {
    const [pictureId, setPictureId] = useState(0)

    function switchPicToRight() {
        if (pictureId == 0) {
            setPictureId(1)
        } else if (pictureId == 1) {
            setPictureId(2)
        }
    }

    function switchPicTLeft() {
        if (pictureId == 2) {
            setPictureId(1)
        } else if (pictureId == 1) {
            setPictureId(0)
        }
    }

    return {
        pictureId,
        setPictureId,
        switchPicTLeft,
        switchPicToRight
    }
}