import {useState} from "react";
const useDemo = (a) => {
  const [count, setCount] = useState(a);
  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };

  return [count, Increase, Decrease];
};

export {useDemo};


// // /* General Styles */
// body {
//   font-family: Arial, sans-serif;
//   background-color: #f4f4f4;
//   margin: 0;
//   padding: 0;
// }

// /* Container */
// .container {
//   width: 80%;
//   margin: auto;
//   overflow: hidden;
// }

// /* Header */
// header {
//   background: #333;
//   color: #fff;
//   padding-top: 30px;
//   min-height: 70px;
//   border-bottom: #77aaff 3px solid;
// }

// header a {
//   color: #fff;
//   text-decoration: none;
//   text-transform: uppercase;
//   font-size: 16px;
// }

// header ul {
//   padding: 0;
//   list-style: none;
// }

// header li {
//   float: left;
//   display: inline;
//   padding: 0 20px 0 20px;
// }

// /* Main */
// main {
//   padding: 20px;
//   background: #fff;
//   margin-top: 20px;
// }

// /* Form */
// form {
//   background: #fff;
//   padding: 20px;
//   margin: 20px 0;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }

// form input[type="text"],
// form input[type="number"],
// form input[type="email"],
// form input[type="password"] {
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
// }

// form input[type="submit"] {
//   background: #333;
//   color: #fff;
//   border: 0;
//   padding: 10px 20px;
//   cursor: pointer;
// }

// form input[type="submit"]:hover {
//   background: #555;
// }

// /* Table */
// table {
//   width: 100%;
//   margin: 20px 0;
//   border-collapse: collapse;
// }

// table, th, td {
//   border: 1px solid #ddd;
// }

// th, td {
//   padding: 10px;
//   text-align: left;
// }

// th {
//   background: #333;
//   color: #fff;
// }

// tr:nth-child(even) {
//   background: #f4f4f4;
// }
