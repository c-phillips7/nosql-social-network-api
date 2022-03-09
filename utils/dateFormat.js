// getter function to format the date given by created at by mongoose
// input format:
    // "createdAt": "2022-03-09T04:54:59.833Z"
// output format: 
    // "createdAt": "Tue Mar 08 2022 23:54:59 GMT-0500 (Eastern Standard Time)"

module.exports = ( timestamp ) => {
    const date = new Date(timestamp)
    const formattedTimeStamp = date.toString();
    return formattedTimeStamp;
}