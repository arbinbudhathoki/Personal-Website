import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <p className="education-minor">Minor: Computer Information Technology</p>
            <p className="education-school">Northern Kentucky University - Highland Heights, KY</p>
            <p className="education-gpa">GPA: 3.61 / 4.0 (Cum Laude)</p>
            <p className="education-date">Graduated: December 2025</p>
            <div className="education-coursework">
              <p className="coursework-title">Relevant Coursework:</p>
              <p className="coursework-list">Data Structures and Algorithms, Database Systems, Object-Oriented Programming, Mobile App Development, Software Engineering, Artificial Intelligence, Machine Learning</p>
            </div>
          </div>
          <div className="education-item">
            <h3 className="education-degree">Data Analyst Bootcamp</h3>
            <p className="education-school">Alex The Analyst</p>
            <p className="education-date">Completed: December 2025</p>
            <div className="education-coursework">
              <p className="coursework-list">Hands-on training in SQL, Excel, Python (Pandas), Tableau, and Power BI. Focused on data cleaning, ETL processes, exploratory data analysis and interactive dashboard creation using real-world datasets.</p>
            </div>
            <div className="certificate-container">
              <img 
                src="/BCcertificate.png" 
                alt="Data Analyst Bootcamp Certificate" 
                className="certificate-image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="education-item honors-section">
            <h3 className="education-degree">Honors & Involvement</h3>
            <div className="honors-list">
              <div className="honor-item">
                <h4 className="honor-title">Norse IoT Team Member</h4>
                <p className="honor-org">Northern Kentucky University</p>
                <p className="honor-period">Jan 2024 – Dec 2025</p>
                <p className="honor-description">Collaborated on technical projects involving the implementation and networking of IoT devices. Participated in technical workshops to advance expertise in networked systems.</p>
              </div>
              <div className="honor-item">
                <h4 className="honor-title">International Merit Scholarship and Edge Award</h4>
                <p className="honor-org">Northern Kentucky University</p>
                <p className="honor-period">Jan 2022 – Dec 2025</p>
                <p className="honor-description">Received multiple merit-based awards for academic excellence throughout my undergraduate career.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
