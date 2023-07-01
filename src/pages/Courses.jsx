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

const Courses = () => {
  return (
    <div className="container1">
      <div className="card1" style={{ '--clr': '#009688' }}>
        <div className="img-box1">
          <img src="https://i.postimg.cc/t4w95jsf/img-01.png" alt="Leafs" />
        </div>
        <div className="content1">
          <h2>Leafs</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="/">Read More</a>
        </div>
      </div>
      <div className="card1" style={{ '--clr': '#FF3E7F' }}>
        <div className="img-box1">
          <img src="https://i.postimg.cc/pdjRc68d/img-02.png" alt="Fruits" />
        </div>
        <div className="content1">
          <h2>Fruits</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="/">Read More</a>
        </div>
      </div>
      <div className="card1" style={{ '--clr': '#03A9F4' }}>
        <div className="img-box1">
          <img src="https://i.postimg.cc/26fms7F7/img-03.png" alt="Flowers" />
        </div>
        <div className="content1">
          <h2>Flowers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
