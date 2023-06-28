import {
    AddBooks, AddCompany, CompaniesType,
    makeHairStyle,
    movedUser, RemoveBook, UpdateBooks, UpdateCompany, UpdateCompany2,
    UpgradeHouse,
    UpgradeLaptop,
    UserType,
    UserWithBookType,
    UserWithLaptopType
} from "./10";


test('1', ()=>{
    let user: UserType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        }
    }
    const awesomeUser = makeHairStyle (user, 2)

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(awesomeUser.address).toBe(user.address);
})

test('2', ()=>{
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        }
    }
    const moveUser = movedUser (user, 'City 2')

    expect(moveUser).not.toBe(user);
    expect(moveUser.address).not.toBe(user.address);
    expect(moveUser.address.title).toBe('City 2');
    expect(moveUser.laptop).toBe(user.laptop);
})

test('3', ()=>{
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        }
    }
    const userWithNewLaptop = UpgradeLaptop (user, 'Macbook')

    expect(userWithNewLaptop).not.toBe(user);
    expect(userWithNewLaptop.laptop).not.toBe(user.laptop);
    expect(userWithNewLaptop.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Zenbook');
    expect(userWithNewLaptop.address).toBe(user.address);
})

test('4', ()=>{
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['ss', 'ddd', 'dddd']
    }
    const userCopy = UpgradeHouse (user, 99)

    expect(userCopy).not.toBe(user);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address.house).toBe(99);
    expect(userCopy.address).not.toBe(user.address);
})

test('5', ()=>{
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['ss', 'ddd', 'dddd']
    }
    const userCopy = AddBooks (user, ['aaa', 'bbb'])

    expect(userCopy).not.toBe(user);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[3]).toBe('aaa');
    expect(userCopy.books[4]).toBe('bbb');
})

test('6', ()=>{
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['ss', 'ddd', 'dddd']
    }
    const userCopy = UpdateBooks (user, 'ss', 'ss2')

    expect(userCopy).not.toBe(user);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[0]).toBe('ss2');
    expect(user.books[0]).toBe('ss');
})

test('7', ()=>{
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        books: ['ss', 'ddd', 'dddd']
    }
    const userCopy = RemoveBook (user, 'ss')

    expect(userCopy).not.toBe(user);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.books[0]).toBe('ddd');
    expect(user.books[0]).toBe('ss');
})

test('8', ()=>{
    let user: UserWithLaptopType & CompaniesType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        companies: [{id:1, title:'1'},{id:2, title:'2'}]
    }
    const userCopy = AddCompany (user, '3')

    expect(userCopy).not.toBe(user);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.companies[2].title).toBe('3');
})

test('9', ()=>{
    let user: UserWithLaptopType & CompaniesType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
        companies: [{id:1, title:'1'},{id:2, title:'2'}]
    }
    const userCopy = UpdateCompany (user, '1', '1.1') as UserWithLaptopType & CompaniesType

    expect(userCopy).not.toBe(user);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.companies[0].title).toBe('1.1');
    expect(user.companies[0].title).toBe('1');
})

test('10', ()=>{
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 32,
        address: {
            title: 'City',
            house: 12
        },
        laptop: {
            title:'Zenbook'
        },
    }
    const companies = {
        'Ivan1' : [{id:1, title:'1'},{id:2, title:'2'}],
        'Ivan2' : [{id:3, title:'3'}],
    }

    const user2 = UpdateCompany2(companies, 'Ivan1', 2, '2.2');

    expect(user2['Ivan1']).not.toBe(companies['Ivan1']);
    expect(user2['Ivan2']).toBe(companies['Ivan2']);
    expect(user2['Ivan1'][1].title).toBe('2.2');
})