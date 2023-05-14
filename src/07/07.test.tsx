export type ManType = {
    name: string
    age: number
    lessons: { title: string; }[]
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Ivan',
        age: 24,
        lessons: [{title: '1'}, {title:'2'}],
        address: {
            street: {
                title: 'Svobodi'
            }
        }
    }
})

test("1", () => {

    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(24);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Svobodi');
})

test("2", () => {
    // const l1 = props.lessons[0]
    // const l2 = props.lessons[1]
    const [l1, ...rest] = props.lessons


    expect(l1.title).toBe('1');
    expect(rest[0].title).toBe('2');
    expect(rest.length).toBe(1);
    expect(rest[0]).toStrictEqual({title:'2'});
})


