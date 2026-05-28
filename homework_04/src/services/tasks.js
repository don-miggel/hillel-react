export const API = `https://6a13128378d0434e0d5dc658.mockapi.io/dev_tasks`;

 export const fetchTasks = async () => {
  const res = await fetch(API);
  if (!res.ok) throw new Error(`Failed tasks fetch`);
  const data = await res.json();
  return data;
};

export const promiseTasks = fetchTasks();