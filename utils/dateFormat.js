// getter function to format the date given by created at by mongoose
// "createdAt": "2022-03-09T04:54:59.833Z"
// yyyy-MM-dd'T'HH:mm:ss.SSS'Z'

// const date = new Date("2022-03-09T04:54:59.833Z")
// console.log(date.toString());
// logs "Tue Mar 08 2022 23:54:59 GMT-0500 (Eastern Standard Time)"


module.exports = ( timestamp ) => {
    const date = new Date(timestamp)
    const formattedTimeStamp = date.toString();
    return formattedTimeStamp;
}