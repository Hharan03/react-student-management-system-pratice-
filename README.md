# 🎓 React Student Management System

A beginner-friendly **Student Management System built with React.js**.

This project was created to practice and understand important React concepts such as **components, state management, controlled inputs, list rendering, conditional rendering, array methods, form validation, adding, editing, and deleting data**.

The application allows users to add students, view student information, edit existing students, and delete students from the list.

---

## 📌 Project Overview

The Student Management System provides a simple interface for managing student information.

A user can enter:

* Student Name
* Course
* Phone Number
* Age

After entering the information, the user can add the student to the student list.

Each student can also be:

* ✏️ Edited
* 🗑️ Deleted

The project uses React state to manage the student data and form inputs.

---

## 🚀 Features

### 1. Add Student

Users can enter student information and add a new student to the list.

The application checks whether all required fields are filled before adding the student.

---

### 2. Display Student List

All students are displayed dynamically using JavaScript's `.map()` method.

Each student contains:

* Name
* Course
* Phone
* Age
* Age category
* Edit button
* Delete button

---

### 3. Edit Student

The Edit feature allows users to update an existing student's information.

When the user clicks the **Edit** button:

1. The selected student's ID is stored.
2. The student's existing information is loaded into the input fields.
3. The user can modify the information.
4. The button changes from **Add Student** to **Update Student**.
5. The application finds the selected student using the ID.
6. The old information is replaced with the updated information.

---

### 4. Delete Student

Users can delete a student by clicking the **Delete** button.

The application uses JavaScript's `.filter()` method to create a new array without the selected student.

---

### 5. Form Validation

Before adding or updating a student, the application checks whether the required fields are empty.

If a field is missing, an appropriate message is displayed.

---

### 6. Conditional Rendering

The project uses React conditional rendering in different situations.

For example:

```jsx
{message && <p>{message}</p>}
```

This displays the message only when a message exists.

The project also checks whether students are available:

```jsx
students.length === 0
  ? <p>No Students Available</p>
  : students.map(...)
```

---

### 7. Adult / Child Status

The application determines the student's age category:

```jsx
student.age >= 18 ? "Adult" : "Child"
```

If the student's age is 18 or above, the application displays **Adult**.

Otherwise, it displays **Child**.

---

# 🛠️ Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Vite
* Git
* GitHub

---

# ⚛️ React Concepts Practiced

This project helped practice several important React concepts.

### `useState()`

React state is used to store:

* Student name
* Course
* Phone
* Age
* Message
* Student list
* Current editing student ID

Example:

```jsx
const [name, setName] = useState("");
```

---

### Controlled Inputs

The form inputs are controlled by React state.

Example:

```jsx
<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

The flow is:

```text
User types
    ↓
onChange
    ↓
setName()
    ↓
State changes
    ↓
value={name}
    ↓
Input updates
```

---

### List Rendering

Students are displayed using `.map()`:

```jsx
students.map((student) => (
  <div key={student.id}>
    <h2>{student.name}</h2>
  </div>
))
```

This allows React to create UI elements dynamically from the student array.

---

### Conditional Rendering

The project uses both:

#### Logical AND

```jsx
{message && <p>{message}</p>}
```

#### Ternary operator

```jsx
students.length === 0
  ? <p>No Students Available</p>
  : students.map(...)
```

---

### Array `map()` Method

`.map()` is used for:

* Displaying students
* Updating an existing student

---

### Array `filter()` Method

`.filter()` is used to delete a student.

```jsx
const updateStudents = students.filter(
  (student) => student.id !== id
);
```

This creates a new array without the selected student.

---

### Spread Operator

The spread operator is used when creating updated arrays and objects.

For example:

```jsx
setStudents([...students, newStudent]);
```

This copies the existing students and adds the new student.

During editing:

```jsx
{
  ...student,
  name: name,
  course: course,
  phone: phone,
  age: age
}
```

This copies the existing student and replaces the updated properties.

---

# 🔄 How the Application Works

## Adding a Student

The process works like this:

```text
Enter student information
        ↓
Click Add Student
        ↓
Check required fields
        ↓
Create new student object
        ↓
Add student to students array
        ↓
Update React state
        ↓
React re-renders the list
```

---

# ✏️ How the Edit Feature Works

The Edit functionality uses an `editId`.

Initially:

```jsx
editId = null
```

This means no student is being edited.

When the user clicks Edit:

```jsx
setEditId(student.id);
```

The selected student's ID is stored.

The student's information is then loaded into the input fields.

For example:

```text
Click Edit on Arun
        ↓
Arun's ID = 2
        ↓
editId = 2
        ↓
Load Arun's data into inputs
        ↓
User changes information
        ↓
Click Update Student
        ↓
students.map()
        ↓
Find student where student.id === editId
        ↓
Replace old student information
        ↓
setStudents()
        ↓
Updated student displayed
```

The important concept is:

```text
editId = WHO should be edited

input states = WHAT the new information is

map() = FIND and UPDATE the student
```

---

# 🗑️ How Delete Works

When the user clicks Delete:

```jsx
deleteStudent(student.id)
```

The student's ID is sent to the function.

Then:

```jsx
const updateStudents = students.filter(
  (student) => student.id !== id
);
```

The `filter()` method keeps every student except the selected student.

Then:

```jsx
setStudents(updateStudents);
```

updates the React state.

---

# 📂 Project Structure

```text
react-student-management-system/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# 💻 Installation and Setup

## 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Open the project

```bash
cd react-student-management-system
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The application will run locally using Vite.

---

# 🎯 Learning Objectives

The main purpose of this project was to understand how React handles data and user interactions.

Through this project, I practiced:

* React `useState`
* Controlled components
* Form handling
* Event handling
* List rendering
* Conditional rendering
* JavaScript `map()`
* JavaScript `filter()`
* Spread operator
* CRUD concepts
* Editing data using IDs
* Deleting data
* Basic form validation
* React state updates
* CSS styling

---

# 🔮 Future Improvements

Possible improvements for future versions:

* Add search functionality
* Add course filtering
* Add sorting
* Add student confirmation before deletion
* Store data in Local Storage
* Add React Router
* Connect the application to a backend API
* Add MongoDB database
* Add authentication
* Add responsive mobile design
* Add pagination
* Add student profile images

---

# 👨‍💻 Author

**Hariharan**

This project was created as part of my React.js learning journey and to strengthen my practical frontend development skills.
