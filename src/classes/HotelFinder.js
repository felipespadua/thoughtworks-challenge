class HotelFinder {
    getCheapestHotel(customerType, hotels, days){
        let regularDaysCount = days.filter(day => !day.isWeekend ).length
        let weekendDaysCount = days.filter(day => day.isWeekend ).length
        let hotelPrice = hotels.map(hotel => {
            return hotel.calculatePrice(regularDaysCount, weekendDaysCount, customerType)
        })
        const min = Math.min(...hotelPrice);
        const res = [];
        hotelPrice.forEach((item, index) => item === min ? res.push(index): null);
        if(res.length === 1){
            return hotels[res[0]].name
        }else{
            if(hotels[res[0]].classification > hotels[res[1]].classification){
                return hotels[res[0]].name
            }else{
                return hotels[res[1]].name
            }
        }
    }
}

module.exports = HotelFinder;