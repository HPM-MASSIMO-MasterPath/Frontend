import React, { useEffect, useState } from 'react';
import { API } from '../../utils/config';
import './Sidebar.scss';

const Sidebar = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    const getCoures = () => {
      fetch(`${API}path`)
        .then(res => res.json())
        .then(res => {
          const { path } = res;
          setCourse(path)
        })
    }
    getCoures()
  }, [])
  console.log(courses)
  return (
    <div className="sidebar">
      <h1>My learning path </h1>
      {
        courses?.map(course => {
          return (
            <div key={course.id} className="sidebar__item">
              <p>{course.name}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Sidebar;