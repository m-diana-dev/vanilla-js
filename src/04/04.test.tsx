test("should take old men older then 90", () => {
    const ages = [13, 56, 21, 90, 100];


    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses chipper 160", () => {
    const courses = [
        {title: 'Css', price: 110},
        {title: 'HTML', price: 100},
        {title: 'React', price: 150},
        {title: 'JS', price: 200},
    ]


    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(3);
    expect(chipCourses[0].title).toBe('Css');
    expect(chipCourses[1].title).toBe('HTML');
    expect(chipCourses[2].title).toBe('React');
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Bread 2', isDone: false},
        {id: 3, title: 'Bread 3', isDone: false},
        {id: 4, title: 'Bread 4', isDone: true}
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Bread');
    expect(completedTasks[1].title).toBe('Bread 4');
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Bread 2', isDone: false},
        {id: 3, title: 'Bread 3', isDone: false},
        {id: 4, title: 'Bread 4', isDone: true}
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe('Bread 2');
    expect(uncompletedTasks[1].title).toBe('Bread 3');
})