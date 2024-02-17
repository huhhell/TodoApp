interface ITask {
    name: string;
    id: number;
    category: string;
    state: string;
}

interface IAction {
    type: string;
    task: ITask;
}

export default function TaskReducer(tasks: ITask[], action: IAction): ITask[] | void {
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
            console.error('nah its unknown action' + action.type)
    }
}