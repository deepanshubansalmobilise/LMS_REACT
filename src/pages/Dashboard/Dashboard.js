import React, { useEffect, useState } from "react";
import DashboardScss from "../../scss/ModuleFiles/Dashboard.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Panel,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { useSelector, useDispatch } from 'react-redux';
import Chart from "react-apexcharts";
import Calendar from "react-calendar";
import { login } from "../../Store/AuthSlice.js";

const data = [
  {
    id: 1,
    numberOfCourses: 30,
    imageName: "course.jpg",
    label: "To-Do Course",
  },
  {
    id: 2,
    numberOfCourses: 26,
    imageName: "course.jpg",
    label: "Forum Discussions",
  },
  {
    id: 3,
    numberOfCourses: 5,
    imageName: "certi.jpg",
    label: "Certificates Earned",
  },
  {
    id: 4,
    numberOfCourses: 6,
    imageName: "progress.jpg",
    label: "In-progres Courses",
  },
];

var pieChartSeries = [5, 1, 3];
var pieChartOptions = {
  labels: ["Completed", "Progress", "To-start"],
  chart: { type: "donut", height: 700, width: 380 },
  dataLabels: { enabled: false, style: { colors: ["#fff"] }, show: false },
  stroke: { show: false },
  colors: ["#34A866", "rgba(52, 168, 102, 0.6)", "rgba(52, 168, 102, 0.2)"],
  legend: {
    show: true,
    position: "bottom",
    formatter: function (seriesName, opts) {
      var total = opts.w.globals.seriesTotals[opts.seriesIndex];
      var percentage = (
        (total / opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0)) *
        100
      ).toFixed(2);
      return (
        "<span style='font-weight: bold;'>" +
        percentage +
        "%</span><br>" +
        seriesName
      );
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
  },
  plotOptions: {
    pie: {
      startingAngle: 90,
      endingAngle: 360,
      endingShape: "rounded",
      roundedRadius: 80,
      donut: {
        size: "60%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "Total",
            style: {
              fontSize: "18px",
              fontWeight: "bold",
            },
            formatter: function (w) {
              return w.config.series.reduce((a, b) => a + b, 0);
            },
          },
        },
      },
    },
  },
};

function Dashboard() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    // if (!isAuthenticated) {
    //   // Redirect to login if user is not authenticated
    //   // You may replace '/login' with your actual login route 
    //   navigate("/login");
    // }

    // const user = JSON.parse(localStorage.getItem('user'));
    // if(user){
    //   // dispatch(login({ isAuthenticated: true, user  }));
    // }
    setLoading(false);

  }, [dispatch]);


   // useSelector hook to access the state
  //  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [courses, setCourses] = useState([])
   const user = useSelector(state => state.auth.user);
   console.log(user, 'user')

   useEffect(() =>{
    if(user){
      console.log(user.user, 'courses' , user.user.courses,  typeof user.user.courses.imageSrc)
      setCourses(user.user.courses)
    }
   }, [user]);

  const [activeTab, setActiveTab] = useState("Courses");

  const [mixedChartOptions, setMixedChartOptions] = useState(
    getMixedChartOptions()
  );

  const [code5, setCode5] = useState();

  // const [courses, setCourses] = useState(initialCourses.slice(0, 3));

  var mixedChartData = [
    {
      name: "Before 12",
      type: "column",
      data: [3.4, 0.8, 2.5, 1.5, 2.5, 2.8, 1.8],
    },
    {
      name: "After 12",
      type: "column",
      data: [0.1, 0.3, 6.1, 0.4, 13.1, 4.9, 0.5],
    },
  ];

  function getMixedChartOptions() {
    var themeColor = getComputedStyle(document.body).getPropertyValue("--bs-app-theme").trim();
    // var themeFont = getComputedStyle(document.body).getPropertyValue("--bs-body-font-family").trim();
    // var themeFontWeight = getComputedStyle(document.body).getPropertyValue("--bs-body-font-weight").trim();
    var gray300 = getComputedStyle(document.body).getPropertyValue("--bs-gray-300").trim();
    // var orange = getComputedStyle(document.body).getPropertyValue("--bs-orange").trim();
    // var bodyColor = getComputedStyle(document.body).getPropertyValue("--bs-body-color").trim();
    // var bodyColorRgb = getComputedStyle(document.body).getPropertyValue("--bs-body-color-rgb").trim();
    var borderColor = getComputedStyle(document.body).getPropertyValue("--bs-border-color").trim();

    return {
      chart: { stacked: true },
      dataLabels: { enabled: false },
      stroke: {
        width: [0, 0, 0],
        bar: {
          borderRadius: 50,
          colors: undefined,
        },
      },
      colors: ["#199CDA", "rgba(25, 156, 218, 0.3)"],
      grid: { borderColor: borderColor, strokeDashArray: 4 },
      xaxis: {
        categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        axisBorder: {
          show: false,
          color: gray300,
          height: 1,
          width: "100%",
          offsetX: 0,
          offsetY: -1,
        },
        axisTicks: {
          show: false,
          borderType: "solid",
          color: gray300,
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: [
        {
          categories: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
          ],
          axisTicks: { show: false },
          axisBorder: { show: false, color: themeColor },
          tooltip: { enabled: true },
        },
      ],

      tooltip: {
        fixed: { enabled: true, position: "topLeft", offsetY: 30, offsetX: 60 },
      },
      legend: { show: false },
    };
  }

  function setChartOptionsState() {
    setMixedChartOptions(getMixedChartOptions());
  }

  useEffect(() => {
    fetch("/assets/data/chart-apex/code-5.json")
      .then(function (response) {
        return response.text();
      })
      .then((html) => {
        setCode5(html);
      });

    setChartOptionsState();

    document.addEventListener("theme-reload", () => {
      setChartOptionsState();
    });
  }, []);

  var date = new Date();

  return (
    <>
      <div className={`container ${DashboardScss["dashboard"]}`}>
        <div className="row">
          <div className="col-xl-9">
            <h1 className={`mb-1 ${DashboardScss["client_name"]}`}>Hi, {!loading ? user ? user.user.name : "Guest" : ""}</h1>
            <p className={`mb-3 ${DashboardScss["learn_new"]}`}>Let's learn something new today !</p>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-8">
                    <div className="row">
                      {data.map((item) => (
                        <div key={item.id} className="col-xl-6 mb-2">
                          <div className={`mb-3 p-3 ${DashboardScss["widges"]}`}>
                            <h3 className={`mb-2 ${DashboardScss["no_of_course"]}`}> {item.numberOfCourses} </h3>
                            <img src={`assets/img/dashboard/${item.imageName}`} alt=""/>
                            <span className={`ms-2 ${DashboardScss["to_do"]}`}> {item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className={`mb-3 p-3 ${DashboardScss["widges"]}`}>
                      <div className="mb-4 d-flex flex-column">
                        <h3 className={`mb-1 ${DashboardScss["widges_heading"]}`}>Certificate</h3>
                        <p className={`${DashboardScss["latest_certi"]}`}> Your latest certificates</p>
                      </div>
                      <img className="d-block" src="assets/img/dashboard/select_frm_device.jpg"alt=""/>
                      <button className={`btn-primary btn mb-2 mt-4 ${DashboardScss[""]}`}>View All </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-8 mb-2">
                    <div className={`px-3 pt-3 pb-0 ${DashboardScss["widges"]}`} >
                      <h2 className={`mb-1 ${DashboardScss["widges_heading"]}`}> Time Spendings </h2>
                      <Panel>
                        <PanelBody className="p-0">
                          <Chart
                            type="line"
                            options={mixedChartOptions}
                            height={"270"}
                            series={mixedChartData}
                            className={`${DashboardScss["chart"]}`}
                          />
                        </PanelBody>
                      </Panel>
                    </div>
                  </div>
                  <div className="col-xl-4 mb-2">
                    <div className={`p-3 ${DashboardScss["widges"]}`}>
                      <h2 className={`mb-1 ${DashboardScss["widges_heading"]}`}> Statistics</h2>
                      <div className="">
                        <Chart
                          type="donut"
                          height={"300"}
                          options={pieChartOptions}
                          series={pieChartSeries}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className={`p-3 ${DashboardScss["widges"]}`}>
                  <h3 className={`mb-3 ${DashboardScss["widges_heading"]}`}>Continue Learning </h3>
                  <ul className="nav">
                    <li className={`nav-item ${DashboardScss["tabs_left"]} ${ activeTab === "Courses" ? DashboardScss.active : "" }`}>
                      <a className={`${DashboardScss["tabs-anchor_tag"]}`} onClick={() => setActiveTab("Courses")} href="#"> Courses</a>
                    </li>
                    <li className={`nav-item ${DashboardScss["tabs"]} ${activeTab === "Quiz" ? DashboardScss.active : ""}`}>
                      <a className={`${DashboardScss["tabs-anchor_tag_center"]}`} onClick={() => setActiveTab("Quiz")} href="#"> Quiz</a>
                    </li>
                    <li className={`nav-item ${DashboardScss["tabs_right"]} ${activeTab === "Activity" ? DashboardScss.active : ""}`} >
                      <a className={`${DashboardScss["tabs-anchor_tag"]}`}  onClick={() => setActiveTab("Activity")} href="#">Activity</a>
                    </li>
                  </ul>

                  <div className="row">
                    {courses.map((course, index) => (
                      <div className="col-12" key={index}>
                        <div className={`w-100 d-flex align-items-center p-3 ${DashboardScss["tabs_widges"]}`} >
                          <img className={`${DashboardScss['image_size']}`}  src={course.imageSrc} alt="img not found" />
                          <div className="ms-4 me-auto">
                            <p className={`mb-2 ${DashboardScss["course_name"]}`}> {course.title}</p>
                            <div className="mb-2 d-flex align-items-center">
                              <p className={`mb-0 ${DashboardScss["course_content"]}`}>{course.chapters} Chapters</p>
                              <p className={`mb-0 ${DashboardScss["course_content"]}`} > {course.quizzes} Quizzes</p>
                              <p className={`mb-0 ${DashboardScss["course_content"]}`}> {course.assignments} Assignments</p>
                            </div>
                            <div className="">
                              <div className={`progress h-5px ${DashboardScss["progress-bar"]}`} >
                                <div className="progress-bar rounded-pill" style={{ width: `${course.progress}%` }}></div>
                              </div>
                            </div>
                          </div>
                          <button className={`btn btn-primary ${DashboardScss[""]}`}> Continue</button>
                        </div>
                      </div>
                    ))}
                    <div className="mt-3">
                      <Link to="/dashboard/courses">
                        <button className={`btn btn-primary ${DashboardScss[""]}`}>View All</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="bg-white h-100">
              <Panel className="mb-0">
                <div>
                  <Calendar value={date} />
                </div>
              </Panel>
              <div className="p-3">
                <p className={`mb-2 ${DashboardScss["day"]}`}>Today</p>
                <h1 className={`${DashboardScss["course_for_day"]}`}> The Web Developer Bootcamp</h1>
                <p className={`${DashboardScss["course_summary"]}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  fermentum, felis at imperdiet accumsan, arcu erat
                </p>
                <img src="assets/img/Dashboard/course_certi.jpg" alt="" />
                <span className={`ms-2 ${DashboardScss["certi_name"]}`}>Lorem, ipsum.</span>
                <div className="d-flex align-items-center mt-4">
                  <img src="assets/img/Dashboard/duration.jpg" alt="" />
                  <div className="ms-3">
                    <p className={`mb-0 ${DashboardScss["time"]}`}>55 mins</p>
                    <p className={`mb-0 ${DashboardScss["time_duration"]}`}>Duration</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src="assets/img/Dashboard/lesson.jpg" alt="" />
                  <div className="ms-3">
                    <p className={`mb-0 ${DashboardScss["time"]}`}> 03 Lessons</p>
                    <p className={`mb-0 ${DashboardScss["time_duration"]}`}>Course Content</p>
                  </div>
                </div>
                <hr className="mt-4" />
                <div className="d-flex justify-content-evenly">
                  <button className={`btn btn-secondary ${DashboardScss[""]}`}>Start Course </button>
                  <button className={`btn btn-primary ${DashboardScss[""]}`}> Reschedule</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
