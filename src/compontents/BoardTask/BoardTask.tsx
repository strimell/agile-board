import React from "react"
import { Task } from "../../models/task"
import styles from "./BoardTask.module.scss"

export interface BoardTaskProps {
    task: Task
}

const BoardTask: React.FC<BoardTaskProps> = props => {
    const {
        task: { Title, Author }
    } = props

    return (
        <div className={styles.boardTask}>
            <div>{Title}</div>
            <div>{Author.Name}</div>
        </div>
    )
}

export default BoardTask
