export const mapVariants = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 8,
        }
    }
}

export const citiesVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            duration: 0.4,
        }
    }
}

export const textButtonVariants = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.4
        }
    }
}