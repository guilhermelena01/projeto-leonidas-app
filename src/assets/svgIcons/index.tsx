export function ArrowSvgToLeft({fill, width, height}: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 26 41"
        >
            <path
                fill={fill ?? "#fff"}
                d="M24.378 0c.412 0 .833.138 1.148.405.632.534.632 1.408 0 1.942L3.917 20.64l21.294 18.017c.631.534.631 1.408 0 1.942-.631.535-1.665.535-2.296 0L.474 21.611c-.632-.534-.632-1.408 0-1.943L23.23.405A1.794 1.794 0 0124.379 0z"
            ></path>
        </svg>
    )
}

export function ArrowSvgToRight({fill, height}: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            fill="none"
            viewBox="0 0 26 41"
            className="w-4 sm:w-2"
        >
            <path
                fill={fill ?? "#fff"}
                d="M24.378 0c.412 0 .833.138 1.148.405.632.534.632 1.408 0 1.942L3.917 20.64l21.294 18.017c.631.534.631 1.408 0 1.942-.631.535-1.665.535-2.296 0L.474 21.611c-.632-.534-.632-1.408 0-1.943L23.23.405A1.794 1.794 0 0124.379 0z"
            ></path>
        </svg>
    )
}