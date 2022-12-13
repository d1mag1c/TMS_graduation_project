export const colorChange = (rating: number) => {
    switch (rating !== 0) {
        case rating < 7 && rating > 5 :
            return '#c4aa00'
        case rating >= 7 :
            return 'green'
        case rating <= 5 && rating > 0:
            return 'red'
        default:
            return 'grey'
    }
}