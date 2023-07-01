// import React from 'react'

// export const Courses = () => {
//   return (
//     <div>
//       helllooo
//     </div>
//   )
// }

// // export default Courses
import React from 'react';
import './courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="container1">
      <div className="card1" style={{ '--clr': '#009688' }}>
        <div className="img-box1">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Leafs" />
        </div>
        <div className="content1">
          <h2>Project Management</h2>
          <p>
          Effectively plan, organize, execute, and control projects to achieve specific goals and objectives within defined constraints.
          </p>
          <Link to="/courses/table">Enroll</Link>
        </div>
      </div>
      <div className="card1" style={{ '--clr': '#FF3E7F' }}>
        <div className="img-box1">
          <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Fruits" />
        </div>
        <div className="content1">
          <h2>Web Development</h2>
          <p>
          Build functional and visually appealing online platforms that can be accessed through web browsers.
          </p>
          <a href="https://www.google.com/">Read More</a>
        </div>
      </div>

      <div className="card1" style={{ '--clr': '#009688' }}>
        <div className="img-box1">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Fruits" />
        </div>
        <div className="content1">
          <h2>Communication Skill</h2>
          <p>
          Build the ability to effectively convey and exchange information, ideas, and thoughts with others.
          </p>
          <a href="/">Enroll</a>
        </div>
      </div>


      
      <div className="card1" style={{ '--clr': '#FF3E7F' }}>
        <div className="img-box1">
          <img src="https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Fruits" />
        </div>
        <div className="content1">
          <h2>Personality Development</h2>
          <p>
            Explore yourself to your fullest.
          </p>
         
          <a href="/">Enroll</a>
        </div>
      </div>
      <div className="card1" style={{ '--clr': '#03A9F4' }}>
        <div className="img-box1">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" alt="Flowers" />
        </div>
        <div className="content1">
          <h2>Public Speaking</h2>
          <p>
            Ability to speak out boldly and contribute to the society.
          </p>
          <a href="/">Enroll</a>
        </div>
      </div>

      <div className="card1" style={{ '--clr': '#FF3E7F' }}>
        <div className="img-box1">
          <img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Flowers" />
        </div>
        <div className="content1">
          <h2>Digital Marketing</h2>
          <p>
            Finding out latest market trends and technologies.
          </p>
          <a href="/">Enroll</a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
