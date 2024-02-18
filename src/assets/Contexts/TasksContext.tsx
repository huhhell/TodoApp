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
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });

        default:
            return tasks
    }
}