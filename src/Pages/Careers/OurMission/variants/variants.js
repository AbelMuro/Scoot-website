export const imageVariants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        }
    }
}

export const textVariants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
    transition: {
        duration: 0.4
    }
}

export const photoVariants = {
    hidden: {
        x: 50,
        opacity: 0,
        rotate: '360deg',
    },
    show: {
        x: 0,
        opacity: 1,
        rotate: '0deg',
        transition: {
            duration: 0.7
        }
    }
} 