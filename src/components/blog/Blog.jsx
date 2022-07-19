import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';


const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Reviews</span></a>
                        <a href="#"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">5 Best App Development Tool for Your Projects</h3>
                        <div className="blog__meta">
                            <span>09 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Greg</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Tutorial</span></a>
                        <a href="#"><img src={Image2} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Common Misconceptions About Payment</h3>
                        <div className="blog__meta">
                            <span>07 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Greg</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Business</span></a>
                        <a href="#"><img src={Image3} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">3 Things to know about startup business</h3>
                        <div className="blog__meta">
                            <span>05 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Greg</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog