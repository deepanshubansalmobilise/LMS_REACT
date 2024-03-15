const users = [
  {
    id : 0,
    name: 'Deepanshu',
    email: "deepanshu@gmail.com",
    password: "deepanshu",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        chapterProgress: {
          chap1 : {
            topic1 : true,
          }
        },
        quizzes: 2,
        assignments: 1,
        progress: 30,
        completed: 40,
      },
      {
        topic: "ADOBE ILLUSTRATOR",
        title: "Adobe Illustrator CC: Essentials Training Course",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 5,
        quizzes: 1,
        assignments: 5,
        progress: 38,
        completed: 45,
      },
      {
        topic: "ADOBE PHOTOSHOP",
        title: "The Complete Graphic Design Theory for Beginners Course",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 10,
        quizzes: 12,
        assignments: 5,
        progress: 10,
        completed: 5,
      },
    ],
  },
  {
    id : 1,
    name: 'Charu',
    email: "charu@gmail.com",
    password: "charu",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 30,
        completed: 40,
      },
      {
        topic: "ADOBE ILLUSTRATOR",
        title: "Adobe Illustrator CC: Essentials Training Course",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 5,
        quizzes: 1,
        assignments: 5,
        progress: 38,
        completed: 45,
      },
    ],
  },
  {
    id : 2,
    name: 'Sanyog',
    email: "sanyog@gmail.com",
    password: "sanyog",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 30,
        completed: 40,
      },
    ],
  },
  {
    id : 3,
    name: 'Mukesh',
    email: "mukesh@gmail.com",
    password: "mukesh",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 50,
        completed: 10,
      },
    ],
  },
  {
    id : 4,
    name: 'Shrey',
    email: "shrey@gmail.com",
    password: "shrey",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 50,
        completed: 10,
      },
    ],
  },
];


const newUser = {
  0 :  {
    name: 'Deepanshu',
    email: "deepanshu@gmail.com",
    password: "deepanshu",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        chapterProgress: {
          chap1 : {
            topic1 : true,
          }
        },
        quizzes: 2,
        assignments: 1,
        progress: 30,
        completed: 40,
      },
      {
        topic: "ADOBE ILLUSTRATOR",
        title: "Adobe Illustrator CC: Essentials Training Course",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 5,
        quizzes: 1,
        assignments: 5,
        progress: 38,
        completed: 45,
      },
      {
        topic: "ADOBE PHOTOSHOP",
        title: "The Complete Graphic Design Theory for Beginners Course",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 10,
        quizzes: 12,
        assignments: 5,
        progress: 10,
        completed: 5,
      },
    ],
  },
  1 :  {
      name: 'Charu',
      email: "charu@gmail.com",
      password: "charu",
      courses: [
        {
          topic: "UI DESIGN",
          title: "The Web Designing: Beginners",
          imageSrc: "assets/img/course/course_img.svg",
          chapters: 3,
          quizzes: 2,
          assignments: 1,
          progress: 30,
          completed: 40,
        },
        {
          topic: "ADOBE ILLUSTRATOR",
          title: "Adobe Illustrator CC: Essentials Training Course",
          imageSrc: "assets/img/course/course_img.svg",
          chapters: 5,
          quizzes: 1,
          assignments: 5,
          progress: 38,
          completed: 45,
        },
      ],
    },
  2 : {
    name: 'Sanyog',
    email: "sanyog@gmail.com",
    password: "sanyog",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 30,
        completed: 40,
      },
    ],
  },
  3 : {
    name: 'Mukesh',
    email: "mukesh@gmail.com",
    password: "mukesh",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 50,
        completed: 10,
      },
    ],
  },
  4 :  {
    name: 'Shrey',
    email: "shrey@gmail.com",
    password: "shrey",
    courses: [
      {
        topic: "UI DESIGN",
        title: "The Web Designing: Beginners",
        imageSrc: "assets/img/course/course_img.svg",
        chapters: 3,
        quizzes: 2,
        assignments: 1,
        progress: 50,
        completed: 10,
      },
    ],
  },
}

export default users;
