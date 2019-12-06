const fs = require('fs')
let Hotel = require('../classes/Hotel');
let HotelFinder = require('../classes/HotelFinder');
let DayOfWeek = require('../classes/DayOfWeek');


class Main {
    exec(args) {
        let file = args[2]
        let data = fs.readFileSync(file, 'utf8');
        let lakewood = new Hotel("Lakewood", 3, 110.0, 80.0, 90.0, 80.0)
        let bridgewood = new Hotel("Bridgewood", 4, 160.0, 110.0, 60.0, 50.0)
        let ridgewood = new Hotel("Ridgewood", 5, 220.0, 100.0, 150.0, 40.0)
        let hotels = [lakewood, bridgewood, ridgewood]
        let splitted = data.split(":")
        let customerType = splitted[0]
        let days = splitted[1]
                    .split(",")
                    .map(date => {
                        let startIndex = date.indexOf("(")
                        let endIndex = date.indexOf(")")
                        return new DayOfWeek(date.substring(startIndex + 1, endIndex))
                    })
        let hotelFinder = new HotelFinder()
        let result = hotelFinder.getCheapestHotel(customerType, hotels, days)
       console.log(result)
    }
    
}


let main = new Main()
main.exec(process.argv)