import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga culpa autem, est asperiores molestiae exercitationem minus corrupti mollitia temporibus adipisci placeat labore eaque! Explicabo, doloribus sed labore ab natus consectetur architecto in, quod officia esse provident fuga recusandae blanditiis ipsum amet temporibus, incidunt voluptatum earum ad sunt sequi commodi!
                </p>
                <Link to='/'>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className='banner'>
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About