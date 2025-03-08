import React, { useState } from 'react';

const ClassesPage = () => {
  const [classes] = useState([
    { id: 1, name: 'Vocal Training', instructor: 'Sarah Lee', schedule: 'Mon, Wed, Fri' },
    { id: 2, name: 'Guitar Lessons', instructor: 'Tom Green', schedule: 'Tue, Thu' },
  ]);

  return (
    <div>
      <h2>Classes</h2>
      <p>Offer music lessons and vocal training on-demand here.</p>
      <table>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td>{classItem.name}</td>
              <td>{classItem.instructor}</td>
              <td>{classItem.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesPage;
