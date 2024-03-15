import OneCourseScss from "../../scss/ModuleFiles/OneCourse.module.scss";
import CompletedImg from "../../assets/img/oneCourse/section_completed.svg";
import CompletedTick from "../../assets/img/oneCourse/completed_tick.svg";
import PlayImg from "../../assets/img/oneCourse/play_btn.svg";
import LockedCourse from "../../assets/img/oneCourse/course_locked.svg";
import QuizImg from "../../assets/img/oneCourse/quiz.svg";
import { Link } from 'react-router-dom';

function OneCourse({ completedSteps = 5, totalSteps = 10 }) {

  const progressWidth = (1 / totalSteps) * 100;

   const renderProgressBars = () => {
    const progressBars = [];
    for (let i = 1; i <= totalSteps; i++) {
      progressBars.push(
        <div key={i} className={`progress-bar rounded-pill ${completedSteps >= i ? OneCourseScss["completed-progress"] : ''}`} style={{ width: `${completedSteps === 0 ? 0 : progressWidth}%` }}></div>
      );
      if (completedSteps <= i) {
        break;
      }
    }
    return progressBars;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="d-flex mb-3 align-items-center">
                <Link to="/dashboard/courses" className={`mb-0 ${OneCourseScss["course"]}`}>
                    Courses 
                </Link>
              <br />
              <p className={`ms-2 mb-0 ${OneCourseScss["course_name"]}`}>
                {" "}
                / The Web Designing : Beginning
              </p>
            </div>
            <h1 className={`${OneCourseScss["topic_title"]}`}>3.2: How to Decide Color Scheme </h1>
            <div>
              <iframe
                width="716"
                height="403"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          </div>
          <div className="col-xl-4">
            <div className={`py-4 px-3 ${OneCourseScss["bg_white"]}`}>
              <h2 className={`mb-3 ${OneCourseScss["side_head"]}`}>
                The Web Designing: Beginners
              </h2>
              <div className="mb-3 w-100 d-flex align-items-center">
                <p className={`me-auto mb-0 ${OneCourseScss["progress_report"]}`}>{completedSteps}/{totalSteps} COMPLETED </p>
                <img src="assets/img/course/trophy.svg" alt="" />
              </div>
              <div className={`progress h-5px ${OneCourseScss["progress-bar"]}`}>
                {renderProgressBars()}
              </div>
              <div className="accordion mt-4" id="accordion">
                <div className="accordion-item mb-2 border-0 bg-white">
                  <div className="d-flex align-items-center bg-white accordion-header" id="headingOne" >
                    <p className={`me-2 mb-0 ${OneCourseScss["numbering"]}`}> 1</p>
                    <button className={`accordion-button bg-white px-3 py-10px pointer-cursor ${OneCourseScss["accordion_btn"]}`} type="button" data-bs-toggle="collapse"data-bs-target="#collapseOne">
                      Getting Started
                      <img className="ms-2" src={CompletedTick} alt="" />
                    </button>
                  </div>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion" >
                    <div className="accordion-body mt-3 bg-white">
                      <div className="row">
                        <div className="col-1 px-2">
                          <img src={CompletedImg} className={`${OneCourseScss["tick_img"]}`} alt=""/>
                        </div>
                        <div className="col-11 px-4">
                          <h3 className={`${OneCourseScss["course_chapter"]}`}> 3.1 : Determine the Typography </h3>
                          <p className={`mb-3 mt-3 ${OneCourseScss["course_details"]}`} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <span className={`mb-0 ${OneCourseScss["course_time"]}`}>
                            25 min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2 border-0 bg-white">
                  <div className="d-flex align-items-center bg-white accordion-header mb-3" id="headingTwo" >
                    <p className={`me-2 mb-0 ${OneCourseScss["numbering"]}`}> 1</p>
                    <button className={`accordion-button bg-white px-3 py-10px pointer-cursor ${OneCourseScss["accordion_btn"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" >
                      Getting Started
                      <img className="ms-2" src={CompletedTick} alt="" />
                    </button>
                  </div>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion" >
                    <div className="accordion-body bg-white">
                      <div className="row">
                        <div className="col-1 px-2">
                          <img src={CompletedImg} className={`${OneCourseScss["tick_img"]}`} alt=""/>
                        </div>
                        <div className="col-11 px-4">
                          <h3 className={`${OneCourseScss["course_chapter"]}`}> 3.1 : Determine the Typography </h3>
                          <p className={`mb-3 mt-3 ${OneCourseScss["course_details"]}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <span className={`mb-0 ${OneCourseScss["course_time"]}`}>25 min </span>
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-body ${OneCourseScss['body_active']}`}>
                      <div className="row">
                        <div className="col-1 px-2">
                          <img src={PlayImg} className={`${OneCourseScss["play_img"]}`} alt=""/>
                        </div>
                        <div className="col-11 px-4">
                          <h3 className={`${OneCourseScss["course_chapter"]}`}>3.2: How to Decide Color Scheme</h3>
                          <p className={`mb-3 mt-3 ${OneCourseScss["course_details"]}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <span className={`mb-0 ${OneCourseScss["course_time"]}`}>25 min </span>
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-body ${OneCourseScss['']}`}>
                      <div className="row">
                        <div className="col-1 px-2">
                          <img src={LockedCourse} className={`${OneCourseScss["tick_img"]}`} alt=""/>
                        </div>
                        <div className="col-11 px-4">
                          <h3 className={`${OneCourseScss["course_chapter"]}`}>3.3: Using Icons </h3>
                          <p className={`mb-3 mt-3 ${OneCourseScss["course_details"]}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <span className={`mb-0 ${OneCourseScss["course_time"]}`}>25 min </span>
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-body ${OneCourseScss['']}`}>
                      <div className="row">
                        <div className="col-1 px-2">
                          <img src={QuizImg} className={`${OneCourseScss["tick_img"]}`} alt=""/>
                        </div>
                        <div className="col-11 px-4">
                          <h3 className={`${OneCourseScss["course_chapter"]}`}>Quiz 2: Type, color & Icons</h3>
                          <span className={`mb-0 ${OneCourseScss["course_time"]}`}>25 Questions </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneCourse;
