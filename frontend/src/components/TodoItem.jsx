import { FaCheck, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export default function TodoItem({
  todo,
  handleTodoCheck,
  setUpdateTodo,
  handleDeleteTodo,
}) {
  return (
    <div className='flex justify-between items-center bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all'>
      <span
        className={`text-lg ${
          todo.done ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.taskName}
      </span>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => handleTodoCheck(todo)}
          className={`p-2 rounded-full ${
            todo.done
              ? 'bg-red-100 text-red-500 hover:bg-red-200'
              : 'bg-green-100 text-green-500 hover:bg-green-200'
          } transition-all`}
        >
          {todo.done ? <HiXMark size={18} /> : <FaCheck size={18} />}
        </button>
        <button
          onClick={() => setUpdateTodo(todo)}
          className='p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-all'
        >
          <FaPencilAlt size={18} />
        </button>
        <button
          onClick={() => handleDeleteTodo(todo._id)}
          className='p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all'
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  handleTodoCheck: PropTypes.func.isRequired,
  setUpdateTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};
