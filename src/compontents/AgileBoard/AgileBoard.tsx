import React from "react"
import styles from "./AgileBoard.module.scss"
import BoardColumn from "../BoardColumn/BoardColumn"
import { Column } from "../../models/column"
import { columns } from "../../data/fake"

const AgileBoard: React.FC = props => {
    return (
        <div className={styles.agileBoard}>
            {columns.map((column: Column) => (
                <BoardColumn column={column} key={column.Id} />
            ))}
        </div>
    )
}

export default AgileBoard
