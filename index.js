class Driver {
  let id_counter = 0;
  constructer (name )){
    this.name = name;
    this.id = ++id_counter;
    store.drivers.push(this)
  }
}
class Passanger {
  let id_counter = 0;
  constructer(name){
    this.id = ++id_counter;
    this.name = name;
    store_passangers.push(this)
  }
}

class Trip {
  let id_counter = 0;
  constructer(driver,pass){
    this.driver_id = driver.id
    this.passanger_id = pass.id
    this.id = ++id_counter
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driver_id;
    });
  }

  passenger(){
    return store.passengers.find(passenger =>{
      return passenger.id === this.passenger_id;
    })
  }
}
