// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTask, deleteTask, updateTask, setTasks } from '../slices/taskSlice';
// import { logout } from '../slices/authSlice';
// import { MdOutlineCalendarToday } from "react-icons/md";
// import { FaRegStar } from "react-icons/fa";
// import { MdOutlineClose } from "react-icons/md";
// import profile  from '../assets/profile.jpg';
// import { BiBookOpen } from "react-icons/bi";
// import { FaUserClock } from "react-icons/fa6";
// import { IoMdAdd,IoIosNotificationsOutline } from "react-icons/io";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { BsRepeat } from "react-icons/bs";
// import { CiCalendar } from "react-icons/ci";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { ImCheckboxChecked } from "react-icons/im";

// import { FaTasks } from "react-icons/fa";
// import axios from 'axios';
// import Navbar from './Navbar';


// const TodoApp = () => {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isaddtak,setIsAddTask]=useState(true);
//   const [addTask,setAddTask]=useState(true);
//   const toggleSidebar = () => {
//     setIsSidebarOpen(prevState => !prevState);
//   };

//   const handleTask = () =>{
//     setAddTask(!addTask);
//   }

//   const dispatch = useDispatch();
//   const tasks = useSelector(state => state.tasks.tasks);
  
//   const userEmail = useSelector(state => state.auth.email);

//   const [taskText, setTaskText] = useState('');
//   const [priority, setPriority] = useState('Medium');

//   useEffect(() => {
    
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     dispatch(setTasks(savedTasks));
//   }, [dispatch]);

//   useEffect(() => {
    
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const handleAddTask = () => {
//     if (taskText.trim()) {
//       const newTask = {
//         id: Date.now(),
//         text: taskText,
//         priority,
//       };
//       dispatch(addTask(newTask));
//       setTaskText('');
//       setPriority('Medium');
//     }
//   };

//   const handleDeleteTask = (taskId) => {
//     dispatch(deleteTask({ id: taskId }));
//   };

//   const handlePriorityChange = (taskId, priority) => {
//     dispatch(updateTask({ id: taskId, updates: { priority } }));
//   };

//   const fetchTasksFromAPI = async () => {
//     try {
//       const response = await axios.get('/api/tasks'); 
//       dispatch(setTasks(response.data));
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const handleAddingTask = () =>{
//     setIsAddTask(!isaddtak)
//   }

  
  
  
//   return (
//     <div className='w-full flex-col'>
//       <Navbar toggleSidebar={toggleSidebar}/>
//       {/* Side bar */}
//       <div className='flex-row gap-3 mx-3 my-2'>
//         <div className={`fixed inset-y-0  z-50 transform ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full -left-14'} transition-transform duration-300 ease-in-out bg-custom-green w-[280px] h-full flex-col justify-center items-center rounded-md mt-24 ml-4 px-3`}>
//         {/* <div className='flex justify-end p-4'>
//           <MdOutlineClose onClick={toggleSidebar} className='text-3xl cursor-pointer' />
//         </div> */}
//           <div className='flex-col justify-center items-center'>
//             <img src={profile} alt=' No Profile pic ' className='rounded-full flex justify-center items-center ml-20 w-20 h-20'/>
//             <div className='flex justify-center items-center mt-2'>Hey, {userEmail}</div>
//           </div>
//           <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
//             <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//               <FaTasks className='text-2xl'/>
//               <div className=''>All Tasks</div>
//             </div>
//             <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//               <MdOutlineCalendarToday className='text-2xl'/>
//               <div className=''>Today</div>
//             </div>
//             <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//               <FaRegStar className='text-2xl'/>
//               <div className=' '>Important</div>
//             </div>
//             <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//               <BiBookOpen className='text-2xl'/>
//               <div className=''>Planned</div>
//             </div>
//             <div className='flex gap-3 justify-start items-center mt-2 mb-3  '>
//               <FaUserClock className='text-2xl'/>
//               <div className=''>Assigned to me</div>
//             </div>
//           </div>
//           <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
//             <div className='flex gap-3'>
//               <IoMdAdd className='text-2xl'/>
//               <div>Add List</div>
//             </div>
//           </div>
//           <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
//             <div className='flex gap-3 items-center justify-between'>
//               <div className=' font-semibold'>Today Task</div>
//               <div className="flex items-center justify-center w-5 h-5 bg-custom-grey text-white font-bold rounded-full">
//                 i
//               </div>
//             </div>
//             <div className='font-semibold text-2xl'>11</div>
//             <hr className='border-custom-grey mt-3 mb-3 border-2'/>
//           </div>
//         </div>
//         {/* Task Section */}
//         <div
//         onClick={handleTask}
//         className={`flex-col items-center gap-2  transition-all duration-300  mt-8 cursor-pointer ${
//           isSidebarOpen ? ' ml-[350px]' : 'ml-4'
//         }`}
//       >
//         <div className='flex items-center gap-2' onClick={handleAddingTask}>
//           To Do <IoMdArrowDropdown className='text-gray-600'/>
//         </div>
//         {isaddtak ? (
//           <div  className={`bg-custom-green w-full border-t-custom-grey border-t-2 px-4 py-3 transition-transform duration-300 ease-in-out ${
//             isaddtak ? 'translate-y-0' : 'translate-y-full'
//           } ${isaddtak ? 'opacity-100' : 'opacity-0'} `}
//           style={{ transformOrigin: 'top' }}>
//             <input type='text' placeholder='Add A Task' className=' placeholder:text-placeholder-text bg-transparent outline-none w-full text-placeholder-text font-semibold mt-4'/>
//             <div className='flex justify-between'>
//               <div className='flex gap-3 mt-10 justify-start items-center'>
//                 <IoIosNotificationsOutline className='text-3xl' />
//                 <BsRepeat className='text-3xl'/>
//                 <CiCalendar className='text-3xl'/>
//               </div>
//               <div className='flex justify-center mt-10'>
//                 <div className=' rounded-md px-3 py-1 bg-green-200 text-green-900 font-semibold cursor-pointer' >
//                   Add Task
//                 </div>
//               </div>
//             </div>
            
//           </div>
//           ):('')}
//           <div className='flex gap-2 items-center mt-3'>
//             <MdCheckBoxOutlineBlank className='text-2xl'/>
//             <ImCheckboxChecked/>
//             Complete Project
            
//           </div>
//           <hr className='border-custom-grey mt-3 mb-3 border-2'/>
//           <div className='flex gap-2 items-center mt-3'>
//             <MdCheckBoxOutlineBlank className='text-2xl'/>
//             <ImCheckboxChecked/>
//             Today's Task
            
//           </div>
//           <hr className='border-custom-grey mt-3 mb-3 border-2'/>
//           <div className='flex gap-2 items-center mt-3'>
//             <MdCheckBoxOutlineBlank className='text-2xl'/>
//             <ImCheckboxChecked/>
//             project
            
//           </div>
//           <hr className='border-custom-grey mt-3 mb-3 border-2'/>
//         </div>
        
//       </div>
//       {/* <h1>To-Do List</h1>
//       <p>Welcome,{userEmail}</p>
//       <button onClick={() => dispatch(logout())}>Logout</button>
//       <input
//         type="text"
//         value={taskText}
//         onChange={(e) => setTaskText(e.target.value)}
//         placeholder="Enter task"
//       />
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="High">High</option>
//         <option value="Medium">Medium</option>
//         <option value="Low">Low</option>
//       </select>
//       <button onClick={handleAddTask}>Add Task</button>
//       <button onClick={fetchTasksFromAPI}>Fetch Tasks</button>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             {task.text} - {task.priority}
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//             <button onClick={() => handlePriorityChange(task.id, 'High')}>Set High Priority</button>
//             <button onClick={() => handlePriorityChange(task.id, 'Low')}>Set Low Priority</button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default TodoApp;

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTask, deleteTask, updateTask, setTasks,toggleTaskCheck } from '../slices/taskSlice';
// import { logout } from '../slices/authSlice';
// import { MdOutlineCalendarToday } from "react-icons/md";
// import { FaRegStar } from "react-icons/fa";
// import profile from '../assets/profile.jpg';
// import { BiBookOpen } from "react-icons/bi";
// import { FaUserClock } from "react-icons/fa6";
// import { IoMdAdd, IoIosNotificationsOutline } from "react-icons/io";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { BsRepeat } from "react-icons/bs";
// import { CiCalendar } from "react-icons/ci";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { ImCheckboxChecked } from "react-icons/im";
// import { IoMdClose } from "react-icons/io";
// import { FaTasks } from "react-icons/fa";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import axios from 'axios';
// import Navbar from './Navbar';

// const TodoApp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
//   const [taskText, setTaskText] = useState('');
//   const [priority, setPriority] = useState('Medium');
//   const [selectedTask, setSelectedTask] = useState(null); // State to track the selected task
//   const[openSelectedTask,setOpenSelectedTask]=useState(false)
//   const dispatch = useDispatch();
//   const tasks = useSelector(state => state.tasks.tasks);
//   const userEmail = useSelector(state => state.auth.email);
 
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     dispatch(setTasks(savedTasks));
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const handleAddTask = () => {
//     if (taskText.trim()) {
//       const newTask = {
//         id: Date.now(),
//         text: taskText,
//         priority,
//         checked: false,
//       };
//       dispatch(addTask(newTask));
//       setTaskText('');
//       setPriority('Medium');
//       setIsAddTaskOpen(false);
//     }
//   };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task); // Set the selected task
//     setOpenSelectedTask(true)
//     //dispatch(toggleTaskCheck(task.id));
//   };

//   const handlecheck = (task) =>{
//     dispatch(toggleTaskCheck(task.id));
//   }

//   const handleCloseTask = () => {
//     setOpenSelectedTask(false); // Close the task details
//   };

//   return (
//     <div className=''>
//       <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
//       {/* Sidebar */}
//       <div className='flex'>
//         <div className={`fixed inset-y-0  z-50 transform ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full -left-14'} transition-transform duration-300 ease-in-out bg-custom-green w-[280px] h-full flex-col justify-center items-center rounded-md mt-24 ml-4 px-3`}>
//          {/* <div className='flex justify-end p-4'>
// //           <MdOutlineClose onClick={toggleSidebar} className='text-3xl cursor-pointer' />
// //         </div> */}
//            <div className='flex-col justify-center items-center'>
//              <img src={profile} alt=' No Profile pic ' className='rounded-full flex justify-center items-center ml-20 w-20 h-20'/>
//              <div className='flex justify-center items-center mt-2'>Hey, {userEmail}</div>
//            </div>
//            <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
//              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//                <FaTasks className='text-2xl'/>
//                <div className=''>All Tasks</div>
//              </div>
//              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//                <MdOutlineCalendarToday className='text-2xl'/>
//                <div className=''>Today</div>
//              </div>
//              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//                <FaRegStar className='text-2xl'/>
//                <div className=' '>Important</div>
//              </div>
//              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
//                <BiBookOpen className='text-2xl'/>
//                <div className=''>Planned</div>
//              </div>
//              <div className='flex gap-3 justify-start items-center mt-2 mb-3  '>
//                <FaUserClock className='text-2xl'/>
//                <div className=''>Assigned to me</div>
//              </div>
//            </div>
//            <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
//              <div className='flex gap-3'>
//                <IoMdAdd className='text-2xl'/>
//                <div>Add List</div>
//              </div>
//            </div>
//            <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
//              <div className='flex gap-3 items-center justify-between'>
//                <div className=' font-semibold'>Today Task</div>
//                <div className="flex items-center justify-center w-5 h-5 bg-custom-grey text-white font-bold rounded-full">
//                  i
//                </div>
//              </div>
//             <div className='font-semibold text-2xl'>11</div>
//            <hr className='border-custom-grey mt-3 mb-3 border-2'/>
//           </div>
//         </div>

//       {/* Task Section */}
//       <div className={` flex-1 font-semibold ${isSidebarOpen ? 'ml-[350px] ' : 'ml-4'} transition-all duration-300 w-[300px]`}>
      
//         <div onClick={() => setIsAddTaskOpen(!isAddTaskOpen)} className='cursor-pointer flex items-center gap-2 mt-8'>
//           To Do <IoMdArrowDropdown className='text-gray-600'/>
//         </div>
        
//         {isAddTaskOpen && (
//           <div className='bg-custom-green w-full border-t-custom-grey border-t-2 px-4 py-3 transition-transform duration-300'>
//             <input type='text' placeholder='Add A Task' value={taskText} onChange={(e) => setTaskText(e.target.value)} className='bg-transparent outline-none w-full mt-4'/>
//             <div className='flex justify-between mt-10'>
//               <div className='flex gap-3'>
//                 <IoIosNotificationsOutline className='text-3xl'/>
//                 <BsRepeat className='text-3xl'/>
//                 <CiCalendar className='text-3xl'/>
//               </div>
//               <div className='bg-green-200 text-green-900 px-3 py-1 rounded-md cursor-pointer' onClick={handleAddTask}>Add Task</div>
//             </div>
//           </div>
//         )}
//         <hr className='border-custom-grey border-2 mt-3'/>
//         {tasks.filter(task => !task.checked).map(task => (
//           <>
//             <div
//               key={task.id}
//               className='flex gap-2 items-center mt-3 cursor-pointer'
//               onClick={() => handleTaskClick(task)}
//             >
//               {task.checked ? (
//                 <ImCheckboxChecked className='text-2xl' onClick={()=>handlecheck}/>
//               ) : (
//                 <MdCheckBoxOutlineBlank className='text-2xl' onClick={()=>handlecheck}/>
//               )}
//               {task.text}
              
//             </div>
//             <hr className='border-custom-grey border-2 mt-3'/>
//           </>
//         ))}
//         <div className='mt-4'>
//         <h2 className='font-semibold mb-3'>Completed</h2>
//         <hr className='border-custom-grey border-2'/>
//         {tasks.filter(task => task.checked).map(task => (
//         <>
//           <div
//             key={task.id}
//             className='flex gap-2 items-center mt-3 cursor-pointer'
//             onClick={() => handleTaskClick(task)}
//           >
//             <ImCheckboxChecked className='text-2xl text-green-600'/>
//             <strike>{task.text}</strike>
//           </div>
//           <hr className='border-custom-grey border-2 mt-3'/>
//           </>
//         ))}
        
//       </div>
      
//       </div>

//       {/* Task Details Section */}
//       <div></div>
//       {selectedTask && openSelectedTask?(
//         <div className={`lg:w-1/5 sm:w-1/3 mt-4 bg-custom-green p-4 absolute  rounded-md flex-col  top-10 right-20 h-full transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <hr className='border-custom-grey border-2'/>
//         <div className='flex gap-3 items-center justify-start px-2 py-3'>
//           <MdCheckBoxOutlineBlank className='text-xl'/>
//           <h2 className='text-[13px] font-semibold'>{selectedTask.text}</h2>
//         </div>
//         <hr className='border-custom-grey border-2'/>
//         <div className='flex gap-3 items-center justify-start px-2 py-3'>
//           <IoMdAdd className='text-xl'/>
//           <h2 className='text-[13px] font-semibold'>Add Step</h2>
//         </div>
//         <hr className='border-custom-grey border-2'/>
//         <div className='flex gap-3 items-center justify-start px-2 py-3'>
//           <IoIosNotificationsOutline className='text-xl'/>
//           <h2 className='text-[13px] font-semibold'>Set Reminder</h2>
//         </div>
//         <hr className='border-custom-grey border-2'/>
//         <div className='flex gap-3 items-center justify-start px-2 py-3'>
//           <CiCalendar className='text-xl'/>
//           <h2 className='text-[13px] font-semibold'>Add Due Date</h2>
//         </div>
//         <hr className='border-custom-grey border-2'/>
//         <div className='flex gap-3 items-center justify-start px-2 py-3'>
//           <BsRepeat className='text-xl'/>
//           <h2 className='text-[13px] font-semibold'>Repeat</h2>
//         </div>
//         <hr className='border-custom-grey border-2'/>
//         <textarea className='bg-transparent w-full resize-none px-2 py-3 h-60'>
//           Add Notes
//         </textarea>
//         <hr className='border-custom-grey border-2'/>
//         <div className='flex justify-between items-center px-2 py-1 mt-2'>
//           <IoMdClose className='text-xl cursor-pointer' onClick={handleCloseTask}/>
//           <div>Created Today</div>
//           <RiDeleteBin6Fill className='text-xl'/>
//         </div>
//       </div>
      
//       ):null}
//     </div>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask, setTasks, toggleTaskCheck } from '../slices/taskSlice';
import { logout } from '../slices/authSlice';
import PieChart from './PieChart';
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegStar, FaTasks } from "react-icons/fa";
import profile from '../assets/profile.jpg';
import { BiBookOpen } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa6";
import { IoMdAdd, IoIosNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { BsRepeat } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { RiDeleteBin6Fill } from "react-icons/ri";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


import axios from 'axios';
import Navbar from './Navbar';

const TodoApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [selectedTask, setSelectedTask] = useState(null);
  const [openSelectedTask, setOpenSelectedTask] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const userEmail = useSelector(state => state.auth.email);
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(savedTasks));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const checkedCount = tasks.filter(task => task.checked).length;
  const uncheckedCount = tasks.filter(task => !task.checked).length;

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        priority,
        checked: false,
      };
      dispatch(addTask(newTask));
      setTaskText('');
      setPriority('Medium');
      setIsAddTaskOpen(false);
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      //console.log("Deleting task", selectedTask);
      dispatch(deleteTask(selectedTask.id));
      
      //console.log("Tasks after delete:", tasks);
      setSelectedTask(null);
      setOpenSelectedTask(false);
    }
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setOpenSelectedTask(true);
  };

  const handlecheck = (task) => {
    dispatch(toggleTaskCheck(task.id));
  };

  const handleCloseTask = () => {
    setOpenSelectedTask(false);
  };

  // Determine layout based on active sections
  const getMainContentClass = () => {
    if (isSidebarOpen && openSelectedTask) {
      return 'w-[60%]';
    } else if (isSidebarOpen) {
      return 'w-[90%]';
    } else if (openSelectedTask) {
      return 'w-[90%]';
    } else {
      return 'w-full';
    }
  };

  const getTaskDetailsClass = () => {
    if (openSelectedTask) {
      return 'w-[10%]';
    } else {
      return 'hidden';
    }
  };

  return (
    <div>
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'lg:w-[20%] sm:w-[10%]' : 'hidden'} bg-custom-green h-screen ml-4  overflow-y-scroll hide-scrollbar`}>
        <div className='flex-col justify-center items-center'>
              <img src={profile} alt=' No Profile pic ' className='rounded-full flex justify-center items-center sm:w-10 sm:h-10 sm:ml-4 sm:mt-3  lg:ml-24 lg:w-20 lg:h-20'/>
              <div className='flex justify-center items-center mt-2'>Hey, {userEmail}</div>
            </div>
            <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
                <FaTasks className='text-2xl'/>
                <div className='sm:hidden lg:block'>All Tasks</div>
              </div>
              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
                <MdOutlineCalendarToday className='text-2xl'/>
                <div className='sm:hidden lg:block'>Today</div>
              </div>
              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
                <FaRegStar className='text-2xl'/>
                <div className='sm:hidden lg:block'>Important</div>
              </div>
              <div className='flex gap-3 justify-start items-center mt-2 mb-3 '>
                <BiBookOpen className='text-2xl'/>
                <div className='sm:hidden lg:block'>Planned</div>
              </div>
              <div className='flex gap-3 justify-start items-center mt-2 mb-3  '>
                <FaUserClock className='text-2xl'/>
                <div className='sm:hidden lg:block'>Assigned to me</div>
              </div>
            </div>
            <div className='flex-col justify-center items-center  bg-white mx-2 my-2 lg:rounded-md px-3 py-3 mt-24 rounded-full'>
              <div className='flex gap-3'>
                <IoMdAdd className='text-2xl'/>
                <div className='sm:hidden lg:block'>Add List</div>
              </div>
            </div>
            <div className='flex-col justify-center items-center  bg-white mx-2 my-2 rounded-md px-3 py-3 mt-24'>
              <div className='flex flex-col lg:flex-row  gap-3 items-center justify-between'>
                <div className=' font-semibold lg:text-xl text-[10px]'>Today Task</div>
                <div className="flex items-center justify-center w-5 h-5 bg-custom-grey text-white font-bold rounded-full">
                  i
                </div>
              </div>
             <div className='font-semibold text-2xl sm:text-xl text-center lg:text-left'>{uncheckedCount+checkedCount}</div>
            <hr className='border-custom-grey mt-3 mb-3 border-2'/>
            <PieChart checkedCount={checkedCount} uncheckedCount={uncheckedCount} />
          </div>
        </div>

        {/* Main Content - Todo List */}
        <div className={`${getMainContentClass()} transition-all duration-300 ml-4`}>
          <div onClick={() => setIsAddTaskOpen(!isAddTaskOpen)} className="cursor-pointer flex items-center gap-2 mt-8">
            To Do <IoMdArrowDropdown className="text-gray-600" />
          </div>
          {isAddTaskOpen && (
            <div className="bg-custom-green w-full border-t-custom-grey border-t-2 px-4 py-3">
              <input
                type="text"
                placeholder="Add A Task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="bg-transparent outline-none w-full mt-4"
              />
              <div className="flex justify-between mt-10">
                <div className="flex gap-3">
                  <IoIosNotificationsOutline className="text-3xl" />
                  <BsRepeat className="text-3xl" />
                  <CiCalendar className="text-3xl" />
                </div>
                <div className="bg-green-200 text-green-900 px-3 py-1 rounded-md cursor-pointer" onClick={handleAddTask}>
                  Add Task
                </div>
              </div>
            </div>
          )}
          <hr className="border-custom-grey border-2 mt-3" />
          {tasks.filter((task) => !task.checked).map((task) => (
            <>
            <div key={task.id} className="flex gap-2 items-center mt-3 cursor-pointer" onClick={() => handleTaskClick(task)}>
              {task.checked ? (
                <ImCheckboxChecked className="text-2xl" onClick={() => handlecheck(task)} />
              ) : (
                <MdCheckBoxOutlineBlank className="text-2xl" onClick={() => handlecheck(task)} />
              )}
              {task.text}
             
            </div>
             <hr className='border-custom-grey border-2 mt-3'/>
             </>
          ))}
          <div className="mt-4">
            <h2 className="font-semibold mb-3">Completed</h2>
            <hr className="border-custom-grey border-2" />
            {tasks.filter((task) => task.checked).map((task) => (
              <>
                <div key={task.id} className="flex gap-2 items-center mt-3 cursor-pointer">
                  <ImCheckboxChecked className="text-2xl text-green-600" onClick={() => handlecheck(task)} />
                  <strike>{task.text}</strike>
                </div>
                <hr className='border-custom-grey border-2 mt-3'/>
              </>
            ))}
          </div>
        </div>

        {/* Task Details Section */}
        <div className={`${getTaskDetailsClass()} transition-all duration-300 bg-custom-green h-screen p-4   `}>
          {selectedTask && openSelectedTask && (
            <div className={`lg:w-1/4 sm:w-1/2 mt-4 bg-custom-green p-4 absolute  rounded-md flex-col  top-10 right-0 h-full transform transition-transform duration-200 ease-in-out overflow-y-auto hide-scrollbar ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                     <hr className='border-custom-grey border-2'/>
                     <div className='flex gap-3 items-center justify-start px-2 py-3'>
                       <MdCheckBoxOutlineBlank className='text-xl'/>
                       <h2 className='text-[13px] font-semibold'>{selectedTask.text}</h2>
                     </div>
                     <hr className='border-custom-grey border-2'/>
                     <div className='flex gap-3 items-center justify-start px-2 py-3'>
                       <IoMdAdd className='text-xl'/>
                       <h2 className='text-[13px] font-semibold'>Add Step</h2>
                     </div>
                     <hr className='border-custom-grey border-2'/>
                     <div className='flex gap-3 items-center justify-start px-2 py-3'>
                       <IoIosNotificationsOutline className='text-xl'/>
                       <h2 className='text-[13px] font-semibold'>Set Reminder</h2>
                     </div>
                     <hr className='border-custom-grey border-2'/>
                     <div className='flex-col gap-3 items-center justify-start px-2 py-3'>
                      <div className='flex gap-3 items-center justify-start mb-2'>
                        <CiCalendar className='text-xl'/>
                        <h2 className='text-[13px] font-semibold'>Add Due Date</h2>
                      </div>
                       
                       {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Select date"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider> */}
                         <div className="calendar-container">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DateCalendar />
                            </LocalizationProvider>
                          </div>

                     </div>
                     <hr className='border-custom-grey border-2'/>
                     <div className='flex gap-3 items-center justify-start px-2 py-3'>
                       <BsRepeat className='text-xl'/>
                       <h2 className='text-[13px] font-semibold'>Repeat</h2>
                     </div>
                     <hr className='border-custom-grey border-2'/>
                     <textarea className='bg-transparent w-full resize-none px-2 py-3 h-60'>
                       Add Notes
                     </textarea>
                     <hr className='border-custom-grey border-2'/>
                     <div className='flex justify-between items-center px-2 py-1 mt-2'>
                       <IoMdClose className='text-xl cursor-pointer' onClick={handleCloseTask}/>
                       <div>Created Today</div>
                       <RiDeleteBin6Fill className='text-xl cursor-pointer' onClick={handleDeleteTask}/>
                     </div>
                   </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;


