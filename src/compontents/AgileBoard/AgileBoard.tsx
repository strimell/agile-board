import React from "react"
import { Button } from "react-bootstrap"
import styles from "./AgileBoard.module.scss"
import Column from "../Column/Column"

const AgileBoard: React.FC = props => {
    return (
        <div className={styles.agileBoard}>
            {new Array<number>(4).fill(0).map((_, i) => (
                <Column key={i} />
            ))}
        </div>
    )
}

export default AgileBoard
