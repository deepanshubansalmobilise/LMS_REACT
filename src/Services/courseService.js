const courseService = [
    {
      topic: "UI DESIGN",
      title: "The Web Designing: Beginners",
      imageSrc: "assets/img/course/course_img.svg",
      chapters: 3,
      quizzes: 2,
      assignments: 1,
      progress: 0,
      completed: 0
    },
    {
      topic: "ADOBE ILLUSTRATOR",
      title: "Adobe Illustrator CC: Essentials Training Course",
      imageSrc: "assets/img/course/course_img.svg",
      chapters: 5,
      quizzes: 1,
      assignments: 5,
      progress: 0,
      completed: 0
    },
    {
      topic: "ADOBE PHOTOSHOP",
      title: "The Complete Graphic Design Theory for Beginners Course",
      imageSrc: "assets/img/course/course_img.svg",
      chapters: 10,
      quizzes: 12,
      assignments: 5,
      progress: 0,
      completed: 0
    },
    {
      topic: "GRAPHIC DESIGN",
      title: "How to Use Color Like a Pro",
      imageSrc: "assets/img/course/course_img.svg",
      chapters: 23,
      quizzes: 12,
      assignments: 10,
      progress: 0,
      completed: 0
    },
    {
      topic: "ADOBE PHOTOSHOP",
      title: "The Complete Graphic Design Theory ",
      imageSrc: "assets/img/course/course_img.svg",
      chapters: 10,
      quizzes: 12,
      assignments: 5,
      progress: 0,
      completed: 0
    },
    {
      topic: "GRAPHIC DESIGN",
      title: "How to Use Color",
      imageSrc: "assets/img/course/course_img.svg",
      chapters: 23,
      quizzes: 12,
      assignments: 10,
      progress: 0,
      completed: 0
    },
    {
        topic: "ADOBE PHOTOSHOP",
        title: "The Complete Graphic Design",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 10,
        quizzes: 12,
        assignments: 5,
        progress: 0,
        completed: 0
    },
    {
        topic: "ADOBE PHOTOSHOP",
        title: "The Complete Graphic ",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 10,
        quizzes: 12,
        assignments: 5,
        progress: 0,
        completed: 0
    },
  ];
  courseService.sort((a, b) => {
    // Courses with progress go before courses without progress
    if (a.progress !== 0 && b.progress === 0) {
      return -1; // a comes before b
    } else if (a.progress === 0 && b.progress !== 0) {
      return 1; 
    } else {
      return b.progress - a.progress; 
    }
  });
  
  export default courseService;
  