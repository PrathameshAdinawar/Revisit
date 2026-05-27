function bootNavigation(MapLoaded) {
    try {
        console.log('is navigation loaded')

        if (!MapLoaded) {
            throw new Error("Map was not passed in this function")
        }
        return 'nav_ok'
    } catch (error) {
        console.log(error)
        console.log('Nav failed' + error.message)
    } finally {
        console.log("Navigation sequence completed")
    }
}

//does not crash and gracefully handles the error
const status1 = bootNavigation(false)
console.log(`Result ${status1}`)