import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingType[]) => buildings.map(el=> el.address.street.title)
export function getStreetsTitlesOfHouses(houses: HouseType[]){
    return houses.map(el=>el.address.street.title)
}