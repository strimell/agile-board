import React from "react"
import styles from "./BoardColumn.module.scss"
import { Column } from "../../models/column"
import BoardTask from "../BoardTask/BoardTask"
import { tasksMap } from "../../data/fake"

export interface BoardColumnProps {
    column: Column
}

const BoardColumn: React.FC<BoardColumnProps> = props => {
    const {
        column: { Title, Tasks }
    } = props

    return (
        <div className={styles.boardColumn}>
            <div className={styles.boardColumn__header}>
                <div className={styles.boardColumn__title}>{Title}</div>
            </div>
            <div className={styles.boardColumn__body}>
                {Tasks.map((taskId: string) => (
                    <BoardTask task={tasksMap[taskId]} key={taskId} />
                ))}
            </div>
        </div>
    )
}

export default BoardColumn
