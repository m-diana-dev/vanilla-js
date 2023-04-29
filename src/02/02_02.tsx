export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingType[]
    citizensNumber: number
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    number: number
    street: StreetType
}
export type StreetType = {
    title: string
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
