import React from "react"
import styles from "./Column.module.scss"

export interface ColumnProps {}

const Column: React.FC<ColumnProps> = props => {
    return (
        <div className={styles.column}>
            <div className={styles.column__header}>
                <div className={styles.column__title}>Column</div>
            </div>
            <div className={styles.column__body}></div>
        </div>
    )
}

export default Column
