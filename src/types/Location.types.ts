interface Location {
  lat: number;
  lon: number;
}

export interface UserLocationResult {
  user: {
    location: Location;
  };
}