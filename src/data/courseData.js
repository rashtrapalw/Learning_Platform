

// const coursesData = [
//   { id: 1, title: "React Basics", duration: "3 Months", price: "$199" },
//   { id: 2, title: "Java Full Stack", duration: "6 Months", price: "$399" },
//   { id: 3, title: "AWS Cloud", duration: "2 Months", price: "$149" },
// ];

// export default coursesData;
// src/data/coursedata.js
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";

const courseData = [
  {
    id: 1,
    img: featured1,
    category: "User Experience",
    title: "Fundamental of UX for Application Design",
    desc: "The automated process all your website tasks. Discover tools and techniques to engage effectively with children and young people.",
    rating: "★★★★☆",
    reviews: 120,
    price: "$135",
  },
  {
    id: 2,
    img: featured2,
    category: "User Experience",
    title: "Fundamental of UX for Application Design",
    desc: "The automated process all your website tasks. Discover tools and techniques to engage effectively with children and young people.",
    rating: "★★★★☆",
    reviews: 98,
    price: "$149",
  },
  {
    id: 3,
    img: featured3,
    category: "User Experience",
    title: "Fundamental of UX for Application Design",
    desc: "The automated process all your website tasks. Discover tools and techniques to engage effectively with children and young people.",
    rating: "★★★★☆",
    reviews: 75,
    price: "$120",
  },
];

export default courseData;
