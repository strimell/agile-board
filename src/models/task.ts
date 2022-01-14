import { User } from "./user"

export type Task = {
    Id: string
    Title: string
    Author: User
}

export type TasksMap = Record<string, Task>
