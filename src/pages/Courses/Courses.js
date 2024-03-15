import CourseScss from "../../scss/ModuleFiles/Course.module.scss";
import React, { useState } from "react";
import Select from "react-select";
import { useSelector} from 'react-redux';
import courseService from "../../Services/courseService.js";
import users from '../../Services/loginDetails.js';
import { Link } from "react-router-dom";
import CourseImg from '../../assets/img/course/course_img.svg';

function Course() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const selectOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const user = useSelector(state => state.auth.user);
  const loggedInUser = user?.user
  console.log(loggedInUser)
  console.log(user , "user")

  // Filter courses ---- search query
  const filteredCourses = [];

  // courses from users array ---- progress > 0
  if (loggedInUser) {
    loggedInUser.courses.forEach(course => {
      if (course.progress > 0 && course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        filteredCourses.push(course);
      }
    });
    console.log(filteredCourses, 'filtered')
  }


  // courses from course array those are left
  courseService.forEach(course => {
    if (!filteredCourses.find(filteredCourse => filteredCourse.title === course.title)) {
      if (course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        filteredCourses.push(course);
      }
    }
  });

  const renderCourses = () => {
    if (filteredCourses.length === 0) {
      return (
        <div className="col-12 text-center">
          <p>No results found</p>
        </div>
      );
    } else {
      return filteredCourses.map((course, index) => (
        <div className="col-xl-3 mb-3" key={index}>
         
            <div className="card h-100">
              <img src={CourseImg} className={`card-img-top ${CourseScss["img"]}`} alt="unable to load img"/>
              <div className="card-body d-flex flex-column h-100">
                <div className="flex-1">
                  <p className={`${CourseScss["topic"]}`}>{course.topic}</p>
                  <h5 className={`mb-3 ${CourseScss["title"]}`}>{course.title}</h5>
                </div>
                <div className="mb-2 d-flex align-items-center">
                  <p className={`mb-0 ${CourseScss["course_content"]}`}> {course.chapters} Chapters</p>
                  <p className={`mb-0 ${CourseScss["course_content"]}`}> {course.quizzes} Quizzes </p>
                  <p className={`mb-0 ${CourseScss["course_content"]}`}>{course.assignments} Assignments</p>
                </div>
                <div className="">
                  <div  className={`progress h-5px ${CourseScss["progress-bar"]}`} >
                    <div className="progress-bar rounded-pill" style={{ width: `${course.progress}%` }} >
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center w-100 mt-3">
                  <div className="me-auto d-flex align-items-center">
                    {course.progress !== 0 ? (
                      <>
                        <p className={`me-1 mb-0 ${CourseScss["completed"]}`} > Completed:</p>
                        <span className={`mb-0 ${CourseScss["percent"]}`}> {course.completed} %</span>
                      </>
                    ) : (
                      <>
                        <p className="me-1 mb-0">Time:</p>
                        <span className="mb-0">Unknown</span>
                      </>
                    )}
                  </div>
                  <Link to={`/dashboard/courses/learn-course`}> 
                  {course.progress !== 0 ? (
                    <a href="#" className="btn btn-secondary">Resume </a>
                  ) : (
                    <a href="#" className="btn btn-primary"> Start{" "}</a>
                  )}
                  </Link>
                </div>
              </div>
            </div>
        </div>
      ));
    }
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <div className="mb-3 d-flex align-items-center">
            <h1 className="mb-0 me-3">Courses</h1>
            <p className={`mb-0 ${CourseScss["badge"]}`}>{filteredCourses.length} </p>
          </div>
          <div className="d-flex align-items-center w-100 mb-4">
            <div className={`me-auto ${CourseScss["navbar-form"]}`}>
              <form action="" method="POST" name="search_form">
                <div className={`d-flex ${CourseScss["form-group"]} ${isExpanded ? CourseScss["expanded"] : ""}`}>
                  <input type="text" className={`${CourseScss["form-control"]}`} placeholder="Enter keyword" onFocus={toggleExpand} onBlur={toggleExpand} onChange={(e) => setSearchQuery(e.target.value)} />
                  <button type="submit" className={`btn ${CourseScss[" btn-search"]}`} >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <Select placeholder="Sort by Category" options={selectOptions} classNamePrefix="react-select" />
          </div>
        </div>

        <div className="">
          <div className="row">
            {renderCourses()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
