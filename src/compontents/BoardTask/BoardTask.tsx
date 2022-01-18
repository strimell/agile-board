import React from "react"
import { Task } from "../../models/task"
import styles from "./BoardTask.module.scss"
import UserCard from "../UserCard/UserCard"

export interface BoardTaskProps {
    task: Task
}

const BoardTask: React.FC<BoardTaskProps> = props => {
    const {
        task: { Id, Title, Author }
    } = props

    return (
        <div className={styles.boardTask}>
            <div className={styles.boardTask__summary}>
                <a className={styles.boardTask__id} href="/#" rel="noopener noreferrer">
                    {Id}
                </a>
                <span>{Title}</span>
            </div>
            <div className={styles.boardTask__footer}>
                <UserCard user={Author} />
            </div>
        </div>
    )
}

export default BoardTask
