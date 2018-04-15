class Driver {

  let id_counter = 0;

  constructer (name )){
    this.name = name;
    this.id = ++id_counter;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.find(trips => {
      return trips.driver_id === this.id;
    })
  }

  passengers(){
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
  
}

