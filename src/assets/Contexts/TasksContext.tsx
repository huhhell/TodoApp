import {ITask} from "../../App.tsx";

interface IAction {
    type: string;
    task: ITask;
}

export default function tasksReducer(tasks: ITask[], action: IAction): ITask[] {
    switch (action.type) {
        case 'add':
            return [...tasks, action.task]

        case 'delete':
            return tasks.filter(i => i.id !== action.task.id)

        case 'change':
            return [...tasks, {
                name: action.task.name,
                id: action.task.id,
                category: action.task.category,
                state: action.task.state
            }]

        default:
            return tasks
    }
}