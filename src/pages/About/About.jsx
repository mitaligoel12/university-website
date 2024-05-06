//Call for papers

import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Call for Papers </h1>
                <p className='text-center w-75 mb-5'> BJIT is published 06 issues in a year by Springer (The world’s largest publisher of scientific documents) w.e.f. Volume 09 Issue 01 from January, 2017 under ISSN: 2511-2104 (Print Version); ISSN: 2511-2112 (Electronic Version) entitled as International Journal of Information Technology [An official publication of Bharati Vidyapeeth’s Institute of Computer Applications and Management (BVICAM)], New Delhi, having its Journal No. 41870. It is enlisted in the approved list of University Grants Commission (UGC), New Delhi for the purpose of adjudicating the weightage of the published papers for Career Advancement Scheme (CAS) and Direct Recruitment of Teachers and other academic staff, as required under the UGC (Minimum Qualifications for Appointment of Teachers and other Academic Staff in Universities and Colleges). Further details, about the Journal, can be accessed from the homepage of the Journal at Springer’s Portal available at <a href="http://www.springer.com/computer/journal/41870" >http://www.springer.com/computer/journal/41870</a> </p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>AIMS</h2>
                    <p>It aims to publish original, theoretical and practical advances in Computer Science, Information Technology and all interdisciplinary streams of Engineering Sciences. It intends to disseminate original, scientific, theoretical or applied research in the field of Computer Sciences and allied fields. It provides a platform for publishing results and research with a strong empirical component. It aims to bridge the significant gap between research and practice by promoting the publication of original, novel, industry-relevant research. Original and unpublished research papers, based on theoretical or experimental works, are solicited for publication in BJIT. We publish two types of issues; Regular Issues and Theme Based Special Issues (announced from time to time).</p>
                    <p className='mb-4 mb-lg-5'>Papers for the regular issues of the BJIT can be submitted, round the year, electronically, at the Editorial Manager Portal of the Springer available at <a href ="https://www.editorialmanager.com/BJIT/default.aspx" >"https://www.editorialmanager.com/BJIT/default.aspx"</a>. After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online. However, assignment of the paper to an specific Volume / Issue of the Journal will be taken up by the Editorial Board later; and the author will be intimated accordingly. For Theme Based Special Issues, time bound Special Call for Papers will be announced and the same will be applicable for that specific issue only. Submission of a paper implies that the work described has not been published previously (except in the form of an abstract or academic thesis) and is not under consideration for publication elsewhere. The submission should be approved by all the authors of the paper and required ethical compliances, permission from sponsoring organizations must have been obtained. If a paper is finally accepted, the authorities, where the work had been carried out, shall be responsible for not publishing the work elsewhere in the same form. Paper, once submitted for consideration in BJIT, cannot be submitted anywhere else, unless the same is withdrawn or finally rejected.</p>
                 <p>We follow a double blind peer review system and carry out two rounds of review process. In the first round, all the submitted papers are first reviewed at editorial board level and assessed on the basis of their technical suitability of the paper for the journal, scope of work, plagiarism and other ethical compliances. If selected by the editorial board, the paper shall be subjected to a fair and unbiased double blind peer review by at-least three referees on the basis of their originality, novelty, clarity, completeness, relevance, significance and research contribution. Based on the Review Remarks, the papers may be placed in any one of the categories like Clear Reject, Reconsider After Major Revision, Reconsider After Minor Revision, Accept as it is. If recommended by the Board of Referees (BoR), the papers may undergo multiple cycles of review, before finally being accepted. The corresponding authors of qualifying submissions shall be intimated accordingly. Final acceptance of a paper is based on the review remarks by the referees and decision of the Editorial Board. The review process may take 02 to 12 months depending upon the cycles of review required, before the paper is finally accepted. Publication of papers in BJIT is FREE OF COST. We do not charge any publication fee from the authors for the papers to be published in BJIT, if the author accepts the publication of the paper under No Show Policy (Subscription Mode) of the Journal, in which the author need not to pay any publication fee, however, the readers will need to pay to download the full version of the papers.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;