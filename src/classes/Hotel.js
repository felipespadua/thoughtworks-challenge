'use strict';

class Hotel{
    constructor(name,classification,regularDayPriceForRegularClients,regularDayPriceForRewardsClients,weekendDayPriceForRegularClients,weekendDayPriceForRewardsClients){
        this.name = name
        this.classification = classification
        this.regularDayPriceForRegularClients = regularDayPriceForRegularClients
        this.regularDayPriceForRewardsClients = regularDayPriceForRewardsClients
        this.weekendDayPriceForRegularClients = weekendDayPriceForRegularClients
        this.weekendDayPriceForRewardsClients = weekendDayPriceForRewardsClients
    }
    calculatePrice(regularDaysCount, weekendDaysCount, customerType){
        
        if (customerType == "Regular") {
            return (this.regularDayPriceForRegularClients * regularDaysCount) + (this.weekendDayPriceForRegularClients * weekendDaysCount)
        } else {
            return (this.regularDayPriceForRewardsClients * regularDaysCount) + (this.weekendDayPriceForRewardsClients * weekendDaysCount)
        }
    }
}

module.exports = Hotel;