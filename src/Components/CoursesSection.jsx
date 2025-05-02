import Container from "../Components/Container";
import img1 from "../assets/images/robot (1).png";
import img2 from "../assets/images/robot (2).png";
import BannerNoise from "./BannerNoise";
import  './responsive.css';

function CoursesSection() {
  return (
    <div className="course-section">
      <BannerNoise />      
      <Container>
        <div className="course-header">
          <div className="course-title">
          <h2>Our Courses</h2>
          <p className="course-description">
           Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
           </p>
          </div>
          <div className="btn">
          <button className="view-all-btn">View All</button>
          </div>
        </div>

        <div className="courses">
          <div className="course-card">
            <img src={img2} alt="Course 1" />
            <div className="course-meta">
              <div className="week">
              <h5>4 Weeks</h5>
              </div>
              <div className="week">
              <h5>Beginner</h5>
              </div>
              <span className="author">By John Smith</span>
            </div>
            <h3>Web Design Fundamentals</h3>
            <p>
              Learn the fundamentals of web design, including HTML, CSS, and 
              responsive design principles. Develop the skills to create visually 
              appealing and user-friendly websites.
            </p>
            <button className="get-btn">Get it Now</button>
          </div>
          <div className="course-card">
            <img src={img1} alt="Course 1" />
            <div className="course-meta">
              <div className="week">
              <h5>4 Weeks</h5>
              </div>
              <div className="week">
              <h5>Beginner</h5>
              </div>
              <span className="author">By John Smith</span>
            </div>
            <h3>Web Design Fundamentals</h3>
            <p>
              Learn the fundamentals of web design, including HTML, CSS, and 
              responsive design principles. Develop the skills to create visually 
              appealing and user-friendly websites.
            </p>
            <button className="get-btn">Get it Now</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CoursesSection;
