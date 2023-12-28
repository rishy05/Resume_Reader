// import './App.css';
import FileUpload from './FileUpload';

// import Form from './form';

function App() {
  const link = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"
  return (
    <div className="App">
      <FileUpload></FileUpload>
      <div className="content">
      </div>
    </div>
  );
}

export default App;
// App.js
// App.js
// import React from 'react';
// import EmployeeForm from './components/EmployeeForm';
// import EmployeeTable from './components/EmployeeTable';
// import useEmployeeData from './hooks/useEmployeeData';

// function App() {
//   const { employees, addEmployee } = useEmployeeData();

//   return (
//     <div className="App">
//       <h1>EMPLOYEE DETAILS</h1>
//       <EmployeeForm addEmployee={addEmployee} />
//       <EmployeeTable employees={employees} />
//     </div>
//   );
// }

// export default App;
