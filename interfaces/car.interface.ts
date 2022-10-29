export interface IAvailability {
  maxDuration: number;
  maxDistance: number;
}

export interface ICar {
  id: number;
  brand: string;
  model: string;
  pricePerDay: number;
  pricePerKm: number;
  availability: IAvailability;
}
