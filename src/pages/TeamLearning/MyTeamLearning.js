import React, { useState } from "react";
import TeamLearningScss from '../../scss/ModuleFiles/TeamLearning.module.scss';

function MyTeamLearning() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const teamMembers = [
    {
      name: "Sanya Sharma",
      lastActive: "30 Days ago",
      coursesCompleted: "1/10 Courses Completed",
      progress: 10,
      avgScore: "10%",
      avgTimeSpent: "1hr 15mins",
      certificatesEarned: 0,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Arya Sharma",
      lastActive: "25 Days ago",
      coursesCompleted: "2/10 Courses Completed",
      progress: 20,
      avgScore: "20%",
      avgTimeSpent: "2hr 15mins",
      certificatesEarned: 1,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Pulkit Bansal",
      lastActive: "10 Days ago",
      coursesCompleted: "3/10 Courses Completed",
      progress: 30,
      avgScore: "30%",
      avgTimeSpent: "3hr 15mins",
      certificatesEarned: 2,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Harshat Mehta",
      lastActive: "05 Days ago",
      coursesCompleted: "4/10 Courses Completed",
      progress: 40,
      avgScore: "40%",
      avgTimeSpent: "4hr 15mins",
      certificatesEarned: 3,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Pranav Gupta",
      lastActive: "02 Days ago",
      coursesCompleted: "5/10 Courses Completed",
      progress: 60,
      avgScore: "60%",
      avgTimeSpent: "5hr 15mins",
      certificatesEarned: 4,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Ajay Arya",
      lastActive: "40 Days ago",
      coursesCompleted: "0/10 Courses Completed",
      progress: 5,
      avgScore: "5%",
      avgTimeSpent: "0hr 15mins",
      certificatesEarned: 0,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Amit Poonia",
      lastActive: "01 Days ago",
      coursesCompleted: "9/10 Courses Completed",
      progress: 90,
      avgScore: "80%",
      avgTimeSpent: "15hr 15mins",
      certificatesEarned: 8,
      photo: "/assets/img/teamLearning/person.svg"
    },
    {
      name: "Amit Poonia",
      lastActive: "01 Days ago",
      coursesCompleted: "9/10 Courses Completed",
      progress: 90,
      avgScore: "80%",
      avgTimeSpent: "15hr 15mins",
      certificatesEarned: 8,
      photo: "/assets/img/teamLearning/person.svg"
    },
  ];

  const filteredTeamMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
     <div className="container">
     <div className="mb-3 d-flex align-items-center w-100">
        <div className="d-flex align-items-center">
          <h1 className="mb-0 me-3">My Team </h1>
          <p className={`mb-0 ${TeamLearningScss["badge"]}`}>{teamMembers.length}</p>
        </div>
        <div className={`ms-auto ${TeamLearningScss["navbar-form"]}`}>
          <form action="" method="POST" name="search_form">
            <div
              className={`d-flex ${TeamLearningScss["form-group"]} ${
                isExpanded ? TeamLearningScss["expanded"] : ""
              }`}
            >
              <input
                type="text"
                className={`${TeamLearningScss["form-control"]}`}
                placeholder="Enter keyword"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={toggleExpand}
                onBlur={toggleExpand}
              />
              <button
                type="submit"
                className={`btn ${TeamLearningScss[" btn-search"]}`}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        {filteredTeamMembers.length > 0 ? (
        filteredTeamMembers.map((member, index) => (
          <div className="col-12 mb-3" key={index}>
            <div className={`p-3 ${TeamLearningScss["column"]}`}>
              <div className="d-flex align-items-center">
                <div className=" w-100">
                  <div className="d-flex w-100 mb-4 align-items-center">
                    <div className="d-flex me-auto">
                      <img src={member.photo} alt="" />
                      <div className="ms-2">
                        <p className={`mb-0 ${TeamLearningScss["name"]}`}>
                          {member.name}
                        </p>
                        <p className={`mb-0 ${TeamLearningScss["activity"]}`}>
                          Last Active: {member.lastActive}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <p className={`mb-1 ${TeamLearningScss["progress-label"]}`}>
                        {member.coursesCompleted}
                      </p>
                      <div className={`progress ${TeamLearningScss['progress-bar']}`}>
                        <div
                          className="progress-bar rounded-pill"
                          style={{ width: `${member.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-md-6 col-12">
                      <div className={`p-2 ${TeamLearningScss["inr_clm"]}`}>
                        <div className="d-flex">
                          <img src="/assets/img/teamLearning/avg_score.jpg" alt="" />
                          <div className="ms-4">
                            <p className={`mb-0 ${TeamLearningScss["avg_score"]}`}>
                              {member.avgScore}
                            </p>
                            <p className={`mb-0 ${TeamLearningScss["avg_score_txt"]}`}>
                              Average Score
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                      <div className={`p-2 ${TeamLearningScss["inr_clm"]}`}>
                        <div className="d-flex">
                          <img src="/assets/img/teamLearning/avg_time.jpg" alt="" />
                          <div className="ms-4">
                            <p className={`mb-0 ${TeamLearningScss["avg_score"]}`}>
                              {member.avgTimeSpent}
                            </p>
                            <p className={`mb-0 ${TeamLearningScss["avg_score_txt"]}`}>
                              Avg. Time Spent
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                      <div className={`p-2 ${TeamLearningScss["inr_clm"]}`}>
                        <div className="d-flex">
                          <img src="/assets/img/teamLearning/certified.jpg" alt="" />
                          <div className="ms-4">
                            <p className={`mb-0 ${TeamLearningScss["avg_score"]}`}>
                              {member.certificatesEarned}
                            </p>
                            <p className={`mb-0 ${TeamLearningScss["avg_score_txt"]}`}>
                              Certificates Earned
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <i className="ms-4 fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        ))
        ) : (
            <div className="col-12">
            <p>No results found.</p>
          </div> 
        )}
      </div> 
     </div>
    </>
  );
}

export default MyTeamLearning;
