export type StudentsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address:StudentsAddressType
    technologies: StudentsTechnologiesType[]
}

type StudentsAddressType = {
    streetTitle: string
    city: StudentsAddressCityType
}

type StudentsAddressCityType = {
    title: string
    countryTitle: string
}

type StudentsTechnologiesType = {
    id: number
    title: string
}

const student:StudentsType = {
    id: 1,
    name: 'Dima',
    age: 21,
    isActive: false,
    address: {
        streetTitle: 'Surganova, 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
        {
            id: 4,
            title: 'REACT'
        },
    ]
}