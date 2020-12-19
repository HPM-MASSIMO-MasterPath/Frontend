import React, { useEffect, useState } from 'react';
import { API } from '../../utils/config';
import './Sidebar.scss';

const Sidebar = () => {
  const [loading, setLoading] = useState(false)
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    setLoading(true)
    const getCoures = () => {
      fetch(`${API}path`)
        .then(res => res.json())
        .then(res => {
          const { path } = res;
          setCourse(path)
          setLoading(false)
        })
    }
    getCoures()
  }, [])
  return loading ? <h1 style={{
    padding: "18px 12px",
    color: "#fff",
    fontSize: "25px",
  }}>My learning path...</h1> : (
      <div className="sidebar">
        <h1>My learning path </h1>
        {
          courses?.map((course, index) => {
            return (
              <div className="sidebar__item" key={index}>
                <p>{course.name}</p>
              </div>
            )
          })
        }
      </div>
    );
};

export default Sidebar;