import {ManType} from "./07.test";

type PropsType = {
    title: string
    man: ManType
    food: string
    car: string
}
export const ManComponents: React.FC<PropsType> = ({title, man, ...props}) => {
    return <div>
        <h1>{title}</h1>
        <div>{man.name}</div>
        <div>{props.food}</div>
    </div>
}