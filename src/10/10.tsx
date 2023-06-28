export type UserType = {
    name: string
    hair: number
    address:{
        title: string
        house: number
    }
}

export type LaptopType = {
        title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = UserType & {
    books: string[]
}

export type CompaniesType = {
    companies: {id: number, title: string}[]
}

export function makeHairStyle (u: UserType, power: number) {
    const copy = {...u, hair: u.hair/power }
    return copy;
}

export function movedUser (u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, title: city} }
}

export function UpgradeLaptop (u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop} }
}

export function UpgradeHouse (u: UserWithLaptopType & UserWithBookType, house: number) {
    return {...u, address: {...u.address, house} }
}

export function AddBooks (u: UserWithLaptopType & UserWithBookType, books: string[]) {
    return {...u, books: [...u.books, ...books] }
}

export const UpdateBooks = (u: UserWithLaptopType & UserWithBookType,
                            book1:string,
                            book2:string) => ({...u, books: u.books.map(el=>el===book1 ? book2 : el) })
export const RemoveBook = (u: UserWithLaptopType & UserWithBookType,
                            book:string) => ({...u, books: u.books.filter(el=>el!==book) })

export function AddCompany (u: UserWithLaptopType & CompaniesType, title: string) {
    return {...u, companies: [...u.companies, {id: 3, title}] }
}

export function UpdateCompany (u: CompaniesType, title: string, newTitle:string) {
    return {...u, companies: u.companies.map(el=>el.title===title ? {...el, title: newTitle} : el) }
}

export function UpdateCompany2 (companies: { [key:string]: {id: number, title: string}[]}, UserName: string, companyId: number, newTitle: string) {
    return {...companies, [UserName]: companies[UserName].map(el=>el.id===companyId ? {...el, title: newTitle} : el)}
}