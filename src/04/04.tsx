const ages1 = [13, 56, 21, 90, 100];

const predicate1 = (age: number) => {
    return age > 90;
}

const oldAges1 = [100]

type CourseType = {
    title: string
    price: number
}

const courses1 = [
    {title: 'Css', price: 110},
    {title: 'HTML', price: 100},
    {title: 'React', price: 150},
    {title: 'JS', price: 200},
]

const chipPredicate1 = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses1 = [
    {title: 'Css', price: 110},
    {title: 'HTML', price: 100},
    {title: 'React', price: 150},
]