class Driver {
  let id_counter = 0;
  constructer (name )){
    this.name = name;
    this.id = ++id_counter;
  }
}
class Passanger {
  let id_counter = 0;
  constructer(name){
    this.id = ++id_counter;
    this.name = name;
  }
}

class Trip {
  let id_counter = 0;
  constructer(driver,pass){
    this.driver_id = driver.id
    this.passanger_id = pass.id
    this.id = ++id_counter
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
}
