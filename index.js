
// let drivers = ['sam', 'samuel', 'sammy', 'sammoth'];
// const x = (drivers) => {
//     for (let i = 0; i < 3; i++)
//     return drivers[i]
// }

// const returnFirstTwoDrivers = (drivers) => {
//     const driver1 = drivers[0]
//     const driver2 = drivers[1]

//     return [driver1,driver2]
// }


const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    
    return drivers.slice(2, 5)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}



const fareDoubler = fare => fare *2

const fareTripler = fare => fare *3

const selectDifferentDrivers = function(drivers,eitherArray) {
    return eitherArray(drivers);
}