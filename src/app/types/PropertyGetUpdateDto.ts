export class PropertyGetUpdateDto {
  propertyName: string = "";
  propertyId: string = "";
  ImagesURLs: string[] = [];
  maxNumberOfGuests: number = 0;
  bedroomsCount: number = 0;
  bathroomsCount: number = 0;
  bedCount: number = 0;
  pricePerNight: number = 0;
  categories: any[] = [];
  countries: any[] = [];
  oldCategoryId: number[] = [];
  oldCityId: number = 0;
  oldCountryId: number = 0;
  address: string = "";
  description: string = "";
  amenities: any[] = [];
  oldAmenities: number[] = [];
}