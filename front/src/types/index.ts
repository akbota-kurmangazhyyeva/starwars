export interface Starship{
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number,
    crew: string,
    passengers: number,
    cargo_capacity: number,
    consumables: number,
    hyperdrive_rating: number,
    MGLT: number,
    starship_class: string,
    pilots: Person[],
    films: Film[]
}

export interface Vehicle {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number,
    crew: number,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    vehicle_class: string,
    pilots: Person[],
    films: Film[]
}

export interface Species {
    name: string,
    classification: string,
    designation: string,
    average_height: number,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: number,
    homeworld: Planet,
    language: string,
    people: Person[],
    films: Film[]
}


export interface Film {
    _id: number,
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: Person[],
    planets: Planet[],
    starships: Starship[],
    vehicles: Vehicle[],
    species: Species[],
    created: string,
    edited: string,
  }
  
  export interface Person {
    _id: number,  
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: Planet,
    films: Film[],
    species: Species[],
    vehicles: Vehicle[],
    starships: Starship[]
  }
  
  export interface Planet {
    _id: number;
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: Person[],
    films: Film[],
  }