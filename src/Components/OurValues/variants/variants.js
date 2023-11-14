export const itemVariants = { 
    hidden: {
        opacity: 0,
        y: -100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.4
        }
    }
}

export const imageVariants = {
    hidden: {
        opacity: 0,
        y: -100,
        rotate: '360deg',
    },
    show: {
        opacity: 1,
        y: 0,
        rotate: '0deg',
        transition: {
            duration: 0.4,
            delay: 0.4
        }
    }
}

export const numberBoxVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            duration: 0.4,
            delay: 0.4
        }
    }
}