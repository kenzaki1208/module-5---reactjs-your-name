import React from "react";
import ReactDOM from "react-dom/client";
import './students.css';

const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]

const Element = (
    <form>
        <h1>Students</h1>
        <table border={1} cellPadding={5} cellSpacing={0}>
          <thead>
            <tr>
                <th>company</th>
                <th>contact</th>
                <th>country</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
                <tr>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}
          </tbody>
        </table>
    </form>
);

const root = ReactDOM.createRoot(document.getElementById("root5"));
root.render(Element);