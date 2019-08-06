export class FuelGauge {
    static minAmount = 0;
    static maxAmount = 70; 
    amount: number
    constructor(amount: number){
    this.amount = amount; 
    }

    decrease(amount: number){
        this.amount--;
        // if (this.amount === FuelGauge.minAmount){
        //     console.log("No fuel left")
        // } else {
        //     console.log('Driving..... ' + this.amount + ' litres left')
        // }
    }

    increase(amount: number){
       }
    

    report (){
        // console.log(this.amount)
    }
}

export class Odometer {
    static minMilage = 0; 
    static maxMileage = 999999; 
    fuelGauge: FuelGauge; 
    mileage: number; 
    counter: number; 
  
    

    constructor(mileage: number, fuelGauge: FuelGauge){
        this.mileage = mileage; 
        this.fuelGauge = fuelGauge; 
        this.counter = 0; 
    }

    report(){
    // console.log("Mileage is " + this.mileage)
    }

    increase(mileage: number){
        this.counter++
        this.mileage++
        if (this.counter % 10 === 0){
        fuelGauge.decrease(1); 
        this.counter = 0; 
        }
    }
}

Odometer.minMilage = 0
Odometer.maxMileage = 999999

const fuelGauge = new FuelGauge(10)
const odometer = new Odometer(100000, fuelGauge)

for (let i = 0; i < 10; i++) {
    // console.log('Filling up at Circle K......')
    fuelGauge.increase(1)
}

for (let i = 0; i < 200; i++) {
    odometer.increase(1) 
}

fuelGauge.report() // 10L in the tank 
odometer.report() // 100_000 mileage 

