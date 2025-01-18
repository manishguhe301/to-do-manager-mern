import { FaPlus } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import {
  CreateTodo,
  DeleteTodoByID,
  GetAllTodos,
  updateTodoById,
} from '../api/api';
import { notify } from '../utils/utils';
import TodoItem from './TodoItem';

const TaskManager = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [copyTodos, setCopyTodos] = useState([]);
  const [updateTodo, setUpdateTodo] = useState(null);

  const handleTodo = () => {
    if (updateTodo && input) {
      const obj = {
        taskName: input.trim(),
        done: updateTodo.done,
        _id: updateTodo._id,
      };
      handleUpdateTodo(obj);
      setUpdateTodo(null);
      setInput('');
    } else if (updateTodo === null && input) {
      handleAddTodo();
    }
  };

  useEffect(() => {
    if (updateTodo) {
      setInput(updateTodo.taskName);
    }
  }, [updateTodo]);

  const handleAddTodo = async () => {
    if (input.trim() === '') {
      notify('Please enter a todo', 'error');
      return;
    }
    const obj = {
      taskName: input.trim(),
      done: false,
    };
    try {
      const { success, message } = await CreateTodo(obj);
      if (success) {
        notify(message, 'success');
      } else {
        notify(message, 'error');
      }
      setInput('');
      fetchTodos();
    } catch (error) {
      console.log(error);
      notify('Something went wrong, please try again', 'error');
      setInput('');
    }
  };

  const fetchTodos = async () => {
    try {
      const { data } = await GetAllTodos();
      setTodos(data);
      setCopyTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const { success, message } = await DeleteTodoByID(id);
      if (success) {
        notify(message, 'success');
      } else {
        notify(message, 'error');
      }
      fetchTodos();
    } catch (error) {
      console.log(error);
      notify('Something went wrong, please try again', 'error');
    }
  };

  const handleTodoCheck = async (todo) => {
    try {
      const { _id, done, taskName } = todo;
      const obj = {
        taskName,
        done: !done,
      };
      const { success, message } = await updateTodoById(_id, obj);
      if (success) {
        notify(message, 'success');
      } else {
        notify(message, 'error');
      }
      fetchTodos();
    } catch (error) {
      console.log(error);
      notify('Something went wrong, please try again', 'error');
    }
  };

  const handleUpdateTodo = async (todo) => {
    try {
      const { _id, done, taskName } = todo;
      const obj = {
        taskName,
        done: done,
      };
      const { success, message } = await updateTodoById(_id, obj);
      if (success) {
        notify(message, 'success');
      } else {
        notify(message, 'error');
      }
      fetchTodos();
    } catch (error) {
      console.log(error);
      notify('Something went wrong, please try again', 'error');
    }
  };

  const handleSearchTodo = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const oldTodos = [...copyTodos];
    const filteredTodos = oldTodos.filter((todo) =>
      todo.taskName.toLowerCase().includes(searchTerm)
    );
    setTodos(filteredTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center p-6'>
      <div className='w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8'>
        <h1 className='text-4xl font-bold text-gray-800 text-center mb-8'>
          To-Do List
        </h1>

        <div className='flex items-center gap-4 mb-6'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a new task...'
            className='flex-grow rounded-full border border-gray-300 py-3 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm'
          />
          <button
            onClick={handleTodo}
            className='flex justify-center items-center bg-blue-500 text-white rounded-full w-12 h-12 shadow-lg hover:bg-blue-600 transition-all'
          >
            <FaPlus size={18} />
          </button>
        </div>

        <div className='relative mb-8'>
          <FaSearch className='absolute left-4 top-4 text-gray-400' />
          <input
            type='text'
            placeholder='Search tasks...'
            onChange={handleSearchTodo}
            className='w-full rounded-full border border-gray-300 py-3 pl-12 pr-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm'
          />
        </div>

        <div className='space-y-4'>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                handleTodoCheck={handleTodoCheck}
                setUpdateTodo={setUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))
          ) : (
            <p className='text-center text-gray-500'>
              No tasks added yet. Start creating your tasks!
            </p>
          )}
        </div>

        {/* Toast Notification */}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          className='z-50'
        />
      </div>
    </div>
  );
};

export default TaskManager;
