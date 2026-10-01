import { useState } from "react";
import "./App.css";


function App() {
  //controlled input states
  
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [age,setAge] = useState("");

  const [editId, setEditId] = useState(null);



  //message state
  const [message, setMessage] = useState("");

  //student list state
  const [students, setStudents] = useState([

    {
      id: 1, name: "Hari", course: "Computer Science", age : 18
    },
    {
      id: 2, name: "Arun", course: "Information Technology", age : 21
    },
    {
      id: 3, name: "Kumar", course: "Software Technology", age : 23
    },
    {
      id: 4, name: "Ashok", course: "Computer Application", age : 20
    },

  ]);


  
    

  //add student  function
  function addStudent() {
    //Conditional check
    if (name === "" || course === "" || phone === "" || age ==="") {
      setMessage("fill the requirement field");
      return; //stoped the below running function
    }


    if(editId !== null){
      const updateStudents = students.map((student) =>
      student.id === editId
      ? {
        ...student,
        name: name,
        course: course,
        phone: phone,
        age: age,
      }
      : student
    );

    setStudents(updateStudents);

     //clear inputs
      setName("");
      setCourse("");
      setPhone("");
      setAge("");

    setMessage("student updated successfully!!!");
    }

    else{
      
      const newStudent = {
        id: students.length + 1,
        name: name,
        course: course,
        phone: phone,
        age: age,
      };
  
      setStudents([...students, newStudent]);
  
      //clear inputs
      setName("");
      setCourse("");
      setPhone("");
      setAge("");
  
      //Show messages
      setMessage("student added successfully");
    }

    }


  //delete student  fucntion

  function deleteStudent(id) {
    const updateStudents = students.filter((student) => student.id !== id);

    setStudents(updateStudents);
  }

  //Edit Student Function

  function editstudent(student) {
    
    setEditId(student.id);

    setName(student.name);
    setCourse(student.course);
    setPhone(student.phone || "");
    setAge(student.setAge);

  }

  return (
    <div>
      <h1>Student Management App</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter student Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label>Course:</label>

        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

      </div>

      <div>


        <label>Phone:</label>
        <input 
        type="string"
        placeholder="Enter a Phone number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        />

      </div>


      <div>

        <label>Age:</label>
        <input 
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          
        />

        <button onClick={addStudent}>
        {editId == null ? "Add student" : "Update student"}
        </button>



        {/*condtional rendering*/}

        
        {message && <p>{message}</p>}
      </div>

      

      <hr />


      {/*display the data in the browser*/}

      <h2>Student List</h2>

  

      {/*List rendering + Conditional rendering */}

      {students.length === 0 ? (
        <p> No Students Available</p>
      ) : (
        students.map((student) => (
          <div className="student-card"  key={student.id}>
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <p>{student.phone}</p>
            <p>
            {student.age} {student.age > 18 ? "Adult" : "child"}
            </p>
           
            <button className="edit-button" onClick={()=> editstudent(student)}>
            Edit
            </button>

            <button className="delete-button" onClick={() => deleteStudent(student.id)}>
            Delete
            </button>
          </div>
        ))
      )}

      <hr />
    </div>
  );
}

export default App;
