const ages = [13, 56, 21, 90, 100];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'Css', price: 110},
    {title: 'HTML', price: 100},
    {title: 'React', price: 150},
    {title: 'JS', price: 200},
]

const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: 'Css', price: 110},
    {title: 'HTML', price: 100},
    {title: 'React', price: 150},
]