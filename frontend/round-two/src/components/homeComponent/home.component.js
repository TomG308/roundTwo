import React, { Component } from 'react'

import ContactForm from '../contactForm/contactForm.component'

import { FaRegEye } from 'react-icons/fa'
import { FaInfo } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
// import { FaTwitterSquare } from 'react-icons/fa'

import './home.css'

import landingCoryThomas from '../../images/betterCoreyThomas-1-1024x683.jpg'

export default class componentName extends Component {
    render() {
        return (
            <div className='bg'>
                <div className='headingContainer'>
                    <div className='imageContainer'>
                        <img src={landingCoryThomas} alt='landingCoreyThomas' />
                    </div>
                    <div className='innerContainer'>
                        <h1>Corey Thomas</h1>
                        <h2>For South Salt Lake City Council</h2>
                        <p>Nullam tincidunt ut nunc et porttitor. Sed vel posuere enim, id aliquam lacus. Ut accumsan ipsum turpis, ut sagittis mi porta at. Aliquam erat volutpat. Pellentesque congue ipsum ut tempus luctus. Nullam tincidunt ut nunc et porttitor.</p>
                        <div className='socialIconContainer'>
                            <a href='https://www.facebook.com/CoreySSLcitycouncildistrict2/' target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className='socialIcon'/>
                            </a>
                            <a href='https://www.instagram.com/coreyforcitycouncil/?hl=en' target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare className='socialIcon'/>
                            </a>
                            {/* <FaTwitterSquare className='socialIcon'/> */}
                        </div>
                    </div>
                </div>
                <div className='topSeparator'></div>
                <div className='visionIssuesValues'>
                    <div className='transparentContainer'>
                        <FaRegEye className='vivIcon' />
                        <ul>
                            <li>
                                <p>Continue building good relationships with local businesses.</p>
                            </li>
                            <li>
                                <p>Increase green space when locations are available or the opportunity to work with a developer, business owner, or other property owners to beautify SSL.</p>
                            </li>
                            <li>
                                <p>Utilize the Columbus Center as a community gathering place with more city offered events.</p>
                            </li>
                            <li>
                                <p>Support and help implement the SSLs new general plan.</p>
                            </li>
                            <li>
                                <p>Improve and encourage better outreach from the City Council with residents and business owners.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='transparentContainer'>
                        <FaInfo className='vivIcon' />
                        <ul>
                            <li>
                                <p>Increase street lighting for better safety and protection, improve or create new crosswalk paths as the city continues to grow.</p>
                            </li>
                            <li>
                                <p>Hold developers accountable in creating projects and housing that benefit the residents.</p>
                            </li>
                            <li>
                                <p>Hold owners of abandoned buildings or empty lots to maintain the property per city code.</p>
                            </li>
                            <li>
                                <p>Make sure our fire department has the necessary tools and equipment to safely get them to emergency calls.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='transparentContainer'>
                        <FaHandHoldingHeart className='vivIcon' />
                        <ul>
                            <li>
                                <p>Partner with UDOT to improved shared roads in SSL.</p>
                            </li>
                            <li>
                                <p>Engage with the Youth City Council by partnering on city volunteer projects.</p>
                            </li>
                            <li>
                                <p>Protect our current single family home neighborhoods.</p>
                            </li>
                            <li>
                                <p>Increase community arts and craft classes for our adult and senior citizen population.</p>
                            </li> 
                            <li>
                                <p>Work on moving SSL toward a energy saving city such as solar panels on the fire stations</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='leadershipContainer'>
                        <div className='h3Container'>
                            <h3>The Leadership Our City Needs Right Now</h3>
                        </div>
                        <div className='aboutCorey'>
                            <p>Nunc ultrices metus tempus, pretium libero eget, tempus metus. Duis non varius augue. Maecenas ac risus tortor. Duis rhoncus lectus eget orci egestas ornare. Sed rhoncus eget massa quis aliquam. Quisque molestie mollis aliquet. Donec fermentum purus. Ut venenatis erat a augue euismod, in fermentum tellus eleifend. Fusce dui lacus, egestas sed risus fringilla, condimentum imperdiet nibh. Vestibulum conNunc ultrices metus tempus, pretium libero eget, tempus metus. Duis non varius augue. Maecenas ac risus tortor. Duis rhoncus lectus eget orci egestas ornare. Sed rhoncus eget massa quis aliquam. Quisque molestie mollis aliquet. Donec aliquet fermentum</p>
                    
                        </div>
                        <div className='supportContainer'>
                        <h3>Ready to support Corey for South Salt Lake City Council?</h3>
                        <p>click the button to donate today!</p>
                        <a href='https://www.paypal.com/donate?business=SLN79WSYADRVQ&no_recurring=1&currency_code=USD' target='_blank' rel='noopener noreferrer'><button type="button" className="btn btn-primary">Donate</button></a>
                    </div>
                </div>
                <ContactForm />

            </div>
        )
    }
}
