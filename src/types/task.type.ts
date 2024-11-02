export type Task = {
  id: string;
  name: string;
  description?: string;
  status: Status;
  creationDate: string;
};

export type Status = 'todo' | 'in-progress' | 'completed';

export type LabeledTasks = {
  heading: string;
  tasks: Array<Task>;
};
