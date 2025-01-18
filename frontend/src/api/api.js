import { API_URL } from '../utils/utils';

export const CreateTodo = async (todoObj) => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoObj),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const GetAllTodos = async () => {
  const url = `${API_URL}/tasks`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const DeleteTodoByID = async (id) => {
  const url = `${API_URL}/tasks/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const updateTodoById = async (id, reqBody) => {
  const url = `${API_URL}/tasks/${id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
