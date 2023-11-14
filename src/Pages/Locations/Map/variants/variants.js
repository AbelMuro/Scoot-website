export const mapVariants = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            duration: 0.8
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
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.4
        }
    }
}