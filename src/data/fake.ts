import { User } from "../models/user"
import { Task, TasksMap } from "../models/task"
import { Column } from "../models/column"

const jake: User = {
    Id: "1",
    Name: "Jake",
    AvatarUrl: "http://adventuretime.wikia.com/wiki/Jake"
}

const BMO: User = {
    Id: "2",
    Name: "BMO",
    AvatarUrl: "http://adventuretime.wikia.com/wiki/BMO"
}

const finn: User = {
    Id: "3",
    Name: "Finn",
    AvatarUrl: "http://adventuretime.wikia.com/wiki/Finn"
}

const princess: User = {
    Id: "4",
    Name: "Princess bubblegum",
    AvatarUrl: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum"
}

export const tasks: Task[] = [
    {
        Id: "board-1",
        Title: "Sometimes life is scary and dark",
        Author: BMO
    },
    {
        Id: "board-2",
        Title: "Sucking at something is the first step towards being sorta good at something.",
        Author: jake
    },
    {
        Id: "board-3",
        Title: "You got to focus on what's real, man",
        Author: jake
    },
    {
        Id: "board-4",
        Title: "Is that where creativity comes from? From sad biz?",
        Author: finn
    },
    {
        Id: "board-5",
        Title: "Homies help homies. Always",
        Author: finn
    },
    {
        Id: "board-6",
        Title: "Responsibility demands sacrifice",
        Author: princess
    },
    {
        Id: "board-7",
        Title: "That's it! The answer was so simple, I was too smart to see it!",
        Author: princess
    },
    {
        Id: "board-8",
        Title: "People make mistakes. It's all a part of growing up and you never really stop growing",
        Author: finn
    },
    {
        Id: "board-9",
        Title: "Don't you always call sweatpants 'give up on life pants,' Jake?",
        Author: finn
    },
    {
        Id: "board-10",
        Title: "I should not have drunk that much tea!",
        Author: princess
    },
    {
        Id: "board-11",
        Title: "Please! I need the real you!",
        Author: princess
    },
    {
        Id: "board-12",
        Title: "Haven't slept for a solId 83 hours, but, yeah, I'm good.",
        Author: princess
    }
]

export const generateTasksMap = (): TasksMap => {
    return tasks.reduce((previous: TasksMap, task: Task) => {
        previous[task.Id] = task
        return previous
    }, {})
}

export const tasksMap = generateTasksMap()

export const columns: Column[] = [
    {
        Id: "open",
        Title: "Open",
        Tasks: ["board-1", "board-2", "board-3"]
    },
    {
        Id: "in-progress",
        Title: "In progress",
        Tasks: ["board-4", "board-5", "board-6"]
    },
    {
        Id: "code-review",
        Title: "Code review",
        Tasks: ["board-7", "board-8", "board-9"]
    },
    {
        Id: "testing",
        Title: "Testing",
        Tasks: []
    },
    {
        Id: "done",
        Title: "Done",
        Tasks: ["board-10", "board-11", "board-12"]
    }
]
