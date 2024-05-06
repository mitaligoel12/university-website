//archive page

import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        // img: [Blog1Img],
        title: 'Year 2016',
        description: '[Vol. 8 No. 1] [Vol. 8 No.2] '
    },
    {
        id: 2,
        // img: [Blog2Img],
        title: 'Year 2015 ',
        description: ' [Vol. 7 No. 1] [Vol. 7 No.2]'
    },
    {
        id: 3,
        // img: [Blog3Img],
        title: 'Year 2014',
        description: '[Vol. 6 No. 1] [Vol. 6 No.2]'
    },
    {
        id: 4,
        // img: [Blog4Img],
        title: 'Year 2013',
        description: ' [Vol. 5 No. 1] [Vol. 5 No.2]'
    },
    {
        id: 5,
        // img: [Blog5Img],
        title: 'Year 2012',
        description: ' [Vol. 4 No. 1] [Vol. 4 No.2]'
    },
    {
        id: 6,
        // img: [Blog6Img],
        title: 'Year 2011',
        description: ' [Vol. 3 No. 1] [Vol. 3 No.2]'
    },
    {
        id: 7,
        // img: [Blog7Img],
        title: 'Year 2010',
        description: ' [Vol. 2 No. 1] [Vol. 2 No.2]'
    },
    {
        id: 8,
        // img: [Blog8Img],
        title: 'Year 2009',
        description: '[Vol. 1 No. 1] [Vol. 1 No.2]'
    },
    // {
    //     id: 9,
    //     img: [Blog9Img],
    //     title: 'Blog 9',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Archive</h1>
                <p className='text-center w-75 mb-5'>
                 W.e.f. Vol. 9-Issue 1 i.e. Jaunuary 2017 BJIT publication can be access free of cost, if one has the Member ID and password at bvicam.ac.in. For details, click here .</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;