export const itemVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.4
        }
    }
}

export const lineVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            duration: 0.8
        }
    }
}