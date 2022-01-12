import React from "react"
import styles from "./AgileBoard.module.scss"
import { Button } from "react-bootstrap"

const AgileBoard: React.FC = props => {
    return (
        <div className={styles.agileBoard}>
            <h2>Agile board</h2>
            <Button>Bootstrap test</Button>
        </div>
    )
}

export default AgileBoard
