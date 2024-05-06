// aim and scope
import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
// import ArtCourseImg from '../../utils/images/art-course.jpg';
// import BusinessCourseImg from '../../utils/images/business-course.jpg';
// import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
// import EducationCourseImg from '../../utils/images/education-course.jpg';
// import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
// import LawCourseImg from '../../utils/images/law-course.jpg';
// import MusicCourseImg from '../../utils/images/music-course.jpg';
// import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

// const courses = [
//     {
//         id: 1,
//         img: [ArtCourseImg],
//         title: 'Art Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 2,
//         img: [BusinessCourseImg],
//         title: 'Business Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 3,
//         img: [ComputerScienceCourseImg],
//         title: 'Computer Science Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 4,
//         img: [EducationCourseImg],
//         title: 'Education Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 5,
//         img: [HealthcareCourseImg],
//         title: 'Healthcare Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 6,
//         img: [LawCourseImg],
//         title: 'Law Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 7,
//         img: [MusicCourseImg],
//         title: 'Music Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 8,
//         img: [SportCourseImg],
//         title: 'Sport Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
// ];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h3 className='text-center fw-semibold'>Aims & Scope </h3>
                <h6   className='text-center w-75 mb-5'>BJIT - BVICAM’s International Journal of Information Technology having ISSN 0973 – 5658, being published by BVICAM, New Delhi, since last 08 years, is now being published quarterly (March, June, September & December) by Springer (The world’s largest publisher of scientific documents) w.e.f. Volume 09 Issue 01 from January, 2017 under ISSN: 2511-2104 (Print Version); ISSN: 2511-2112 (Electronic Version) entitled as International Journal of Information Technology [An official publication of Bharati Vidyapeeth’s Institute of Computer Applications and Management (BVICAM)], New Delhi, having its Journal No. 41870. It aims to publish original, theoretical and practical advances in Computer Science, Information Technology and all interdisciplinary streams of Engineering Sciences.</h6>
                <p className='text-center w-75 mb-1'>Original and unpublished research papers, based on theoretical or experimental works, related to following subtopics, but not limited to, are solicited for publication in the journal:-</p>
                


        </div>
        </header>
        

       



        {/* <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div> */}

        {/* <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div> */}

<table>
      <tbody>
        <tr>
          <td style={{ border: '1px', margin:'20px' }}>
            <ul>
              <li>Algorithms and Computational Mathematics</li>
              <li>Green Technologies and Energy Efficient Systems</li>
              <li>Information and Communication</li>
              <li>Technologies (ICTs) based Applications</li>
              <li>E-Governance</li>
              <li>Knowledge Management</li>
              <li>E-Commerce, ERP, CRM & Knowledge Mining</li>
              <li>Technology for Convergence</li>
              <li>Distributed and Cloud Computing</li>
              <li>Parallel, Multi-core and Grid Computing</li>
              <li>Reconfigurable Architectures</li>
              <li>Changing Software Architectural Paradigms</li>
              <li>Programming Practices & Coding Standards</li>
              <li>Software Inspection, Verification & Validation</li>
              <li>Software Sizing and Estimation Techniques</li>
              <li>Agile Technologies</li>
              <li>Artificial Intelligence and Neural Networks</li>
              <li>Computer Vision, Graphics, and Image Processing</li>
              <li>Modelling and Simulation</li>
              <li>Operating Systems</li>
              <li>Data Communication, Computer Networks and Information Security</li>
              <li>Wireless Networking</li>
              <li>Network Monitoring Tools</li>
              <li>Next Generation Internet</li>

            </ul>
          </td>
          <td style={{ border: '0px' }}>
            <ul>
              <li>Robotics Modeling and Control</li>
              <li>Human Computer Interaction</li>
              <li>Databases</li>
              <li>Data Mining and Business Intelligence</li>
              <li>Big Data Analytics</li>
              <li>Operating Systems</li>
              <li>Data Communication, Computer Networks and Information Security</li>
              <li>Wireless Networking</li>
              <li>Network Monitoring Tools</li>
              <li>Next Generation Internet</li>
              <li>Mobile Computing</li>
              <li>Entertainment Technologies</li>
              <li>Multimedia Computing</li>
              <li>Information and Collaboration Systems</li>
              <li>Fuzzy and Soft Computing</li>
              <li>Bioinformatics</li>
              <li>Medical Informatics</li>
              <li>Education Informatics</li>
              <li>Computational Finance</li>
              <li>Research Methods for Computing</li>
              <li>Case Studies & Applications</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

    
  )
}

export default Courses;