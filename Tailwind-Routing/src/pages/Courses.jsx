import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../components/services/courseService';

function Courses() {
    const [courses, setCourses] = useState([]);

    async function loadCourses() {
        try {
            const data = await getAllCourses();
            setCourses(data);
        } catch (error) {
            console.error("not found", error);
        }
    }

    useEffect(() => {
        await loadCourses();
    }, []);

    return (
        <div>
            {courses.map((course) => (
                <div key={course.id || course.title}>
                    <h1>{course.title}</h1>
                    <h3>{course.level}</h3>
                    <p>{course.lessons}</p>
                    <h3>{course.price}</h3>
                </div>
            ))}
        </div>
    );
}

export default Courses;
