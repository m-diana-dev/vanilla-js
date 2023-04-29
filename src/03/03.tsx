import {StudentsType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const addSkill = (student: StudentsType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export const makeStudentActive = (student: StudentsType) => {
    student.isActive = true;
}

export const doesStudentLive = (student: StudentsType, cityName: string) => {
    return student.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
    building.budget += budget
}

export const repairHouse = (house: HouseType) =>{
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staff: number) =>{
    building.staffCount -= staff;
}

export const toHireStaff = (building: GovernmentBuildingType, staff: number)=> {
    building.staffCount += staff;
}
