import React, { useEffect, useState } from 'react'
import { getAllCourses } from '../components/services/courseService';
import CourseCard from './CourseCard';

function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getAllCourses()
            .then((data) => {
                console.log(data);
                setCourses(data);
            }).catch(() => {
                setError("issue with data")
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    if (loading) {
        return (
            <div>
                loading....
            </div>
        );
    }
    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    return (
        <div>
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}

export default Courses;