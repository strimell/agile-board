import { User } from "../models/user"
import { Task, TasksMap } from "../models/task"

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
        Id: "1",
        Title: "Sometimes life is scary and dark",
        Author: BMO
    },
    {
        Id: "2",
        Title: "Sucking at something is the first step towards being sorta good at something.",
        Author: jake
    },
    {
        Id: "3",
        Title: "You got to focus on what's real, man",
        Author: jake
    },
    {
        Id: "4",
        Title: "Is that where creativity comes from? From sad biz?",
        Author: finn
    },
    {
        Id: "5",
        Title: "Homies help homies. Always",
        Author: finn
    },
    {
        Id: "6",
        Title: "Responsibility demands sacrifice",
        Author: princess
    },
    {
        Id: "7",
        Title: "That's it! The answer was so simple, I was too smart to see it!",
        Author: princess
    },
    {
        Id: "8",
        Title: "People make mistakes. It's all a part of growing up and you never really stop growing",
        Author: finn
    },
    {
        Id: "9",
        Title: "Don't you always call sweatpants 'give up on life pants,' Jake?",
        Author: finn
    },
    {
        Id: "10",
        Title: "I should not have drunk that much tea!",
        Author: princess
    },
    {
        Id: "11",
        Title: "Please! I need the real you!",
        Author: princess
    },
    {
        Id: "12",
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
