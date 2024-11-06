//The homepage for the user-api does not provide an interface for expected data
//This is therefore not a complete interface for everything available in the data
//To save time I only selected some properties
 
export interface User {
  cell: string;
  dob: {
    date: string;
    age: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
    timezone: {
      offset: string;
    };
  };
  phone: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  registred: {
    date: string;
    age: number;
  };
  nat: string;
}