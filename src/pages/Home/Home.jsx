import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';


const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
];

function Home() {
  return (
    
        
   
    <div className='home-page'>
        
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            
                
            
            <div className='container d-flex flex-column align-items-center'>
            
            
                    
                
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>BJIT BVICAM</h1>
                <p>BJIT - BVICAM's International Journal of Information Technology having ISSN 0973 - 5658, being published by BVICAM, New Delhi, since last 08 years, is now being published 08 issues in a year by Springer (The world's largest publisher of scientific documents) w.e.f. Volume 09 Issue 01 from January, 2017 under ISSN: 2511-2104 (Print Version); ISSN: 2511-2112 (Electronic Version) entitled as International Journal of Information Technology [An official publication of Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM)], New Delhi, having its Journal No. 41870. It aims to publish original, theoretical and practical advances in Computer Science, Information Technology and all interdisciplinary streams of Engineering Sciences. It intends to disseminate original, scientific, theoretical or applied research in the field of Computer Sciences and allied fields. It provides a platform for publishing results and research with a strong empirical component. It aims to bridge the significant gap between research and practice by promoting the publication of original, novel, industry-relevant research. It is enlisted in the approved list of University Grants Commission (UGC), New Delhi for the purpose of adjudicating the weightage of the published papers for Career Advancement Scheme (CAS) and Direct Recruitment of Teachers and other academic staff, as required under the UGC (Minimum Qualifications for Appointment of Teachers and other Academic Staff in Universities and Colleges). Further details, about the Journal, can be accessed from the homepage of the Journal at Springer's Portal available at< a href= "http://www.springer.com/computer/journal/41870">http://www.springer.com/computer/journal/41870</a>.</p>
                
                <p>Call for Papers: Original and unpublished research papers, based on theoretical or experimental works, are solicited for publication in the Journal. Submission of a paper implies that the work described has not been published previously (except in the form of an abstract or academic thesis) and is not under consideration for publication elsewhere. Papers for BJIT can be submitted, round the year, electronically, at the Editorial Manager Portal of the Springer available at
                     <a href = "https://www.editorialmanager.com/BJIT/default.aspx">https://www.editorialmanager.com/BJIT/default.aspx </a>
                . After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online. However, assignment of the paper to an specific Volume / Issue of the Journal will be taken by the Editorial Board later; and the author will be intimated accordingly.</p>

                <p>We follow a double blind peer review system and carry out two rounds of review process. In the first round, all the submitted papers are first reviewed at editorial board level and assessed on the basis of their technical suitability of the paper for the journal, scope of work, plagiarism and other ethical compliances. If selected by the editorial board, the paper shall be subjected to a fair and unbiased double blind peer review by at-least three referees on the basis of their originality, novelty, clarity, completeness, relevance, significance and research contribution. Based on the Review Remarks, the papers may be placed in any one of the categories like Clear Reject, Reconsider After Major Revision, Reconsider After Minor Revision, Accept as it is. If recommended by the Board of Referees (BoR), the papers may undergo multiple cycles of review, before finally being accepted. The corresponding authors of qualifying submissions shall be intimated accordingly. Final acceptance of a paper is based on the review remarks by the referees and decision of the Editorial Board. The review process may take 03 to 12 months depending upon the cycles of review required, before the paper is finally accepted. Publication of papers in BJIT is FREE OF COST, upto six pages. We do not charge any publication fee from the authors for the papers to be published in BJIT, upto six pages, if the author accepts the publication of the paper under No Show Policy (Subscription Mode) of the Journal, in which the author need not to pay any publication fee, however, the readers will need to pay to download the full version of the papers. However, Extra Page Charges (EPC) shall be applicable @ Rs. 2000/- per page (B&W) for Indian authors, and USD 100/- per page (B&W) for International authors, to be paid by the authors, if it exceeds six pages. Details shall be informed to the author(s) after the paper is accepted and the same is typeset.</p>
                {/* <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div> */}
            </div>
          
        </header>
        

        <div className="py-5">
            <ChooseSection />
        </div>

        {/* <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div> */}

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                </Link>
            </div>
        </div>
    </div>
    
    
  )
}

export default Home;