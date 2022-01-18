import React from "react"
import { User } from "../../models/user"
import { Image } from "react-bootstrap"
import styles from "./UserCard.module.scss"

export interface UserCardProps {
    user: User
}

const UserCard: React.FC<UserCardProps> = props => {
    const {
        user: { Name, AvatarUrl }
    } = props

    return (
        <div className={styles.userCard}>
            <Image className={styles.userCard__avatar} src={AvatarUrl} />
            <span className={styles.userCard__name}>{Name}</span>
        </div>
    )
}

export default UserCard
