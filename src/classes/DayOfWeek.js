class DayOfWeek{
    constructor(value){
        this.isWeekend = this.checkIfWeekend(value)
    }
    checkIfWeekend(value){
        if(value === 'sat' || value === 'sun'){
            return true
        }
        return false
    }
}

module.exports = DayOfWeek;

