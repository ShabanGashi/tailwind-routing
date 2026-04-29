import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {course.title}
                </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.desc}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {course.price}
            </p>
            <Link to={`/courses/${course.id}`} className="text-sm font-semibold text-gray-900 hover:text-blue-600 flex items-center gap-1">
                View Project
                <span>&rarr;</span>
            </Link>
        </div>
    );
}

export default CourseCard;