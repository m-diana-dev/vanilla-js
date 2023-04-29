import {addSkill, doesStudentLive, makeStudentActive} from "./03";
import {StudentsType} from "../02/02";

let student: StudentsType;

beforeEach(() => {
    student = {
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
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4);
    addSkill(student, 'angular');
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('angular');
    expect(student.technologies[4].id).toBeDefined();
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test("does student live in city?", () => {
    let result1 = doesStudentLive(student, "Moscow");
    let result2 = doesStudentLive(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})