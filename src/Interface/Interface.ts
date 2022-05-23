export interface ImageType {
    title: string | undefined;
    img: string;
}

interface PlaceType {
    id: number;
    name: string;
}

export interface BuildingPlacesType{
    floor: number | undefined;
    places: PlaceType[];

}