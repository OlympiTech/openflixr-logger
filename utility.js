function getTimeStamp(duration) {
    const dateOb = new Date()

    // current date YYYY:MM:DD
    const day = ('0' + dateOb.getDate()).slice(-2)
    const month = ('0' + (dateOb.getMonth() + 1)).slice(-2)
    const year = dateOb.getFullYear()

    // Setup for HH:MM:SS
    const hours = dateOb.getHours()
    const minutes = dateOb.getMinutes()
    const seconds = dateOb.getSeconds()

    // returns date & time in YYYY-MM-DD HH:MM:SS format
    if (duration === 'timeDate') {
        return (year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds)
    } else if (duration === 'date') {
        return (year + '-' + month + '-' + day)
    }
};

function isRequired(arg) {
    throw new Error(`${arg} is a required arguement`);
}