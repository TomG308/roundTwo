import React, { Component } from 'react'

import coreySmile from '../../images/coreySmile.jpg'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

export default class About extends Component {
    render() {
        return (
            <div>
                <h2>h0i about component</h2>
                <div meetCoreyContainer>
                    <div imageContainer>
                        <img src={coreySmile} alt='coreySmile' />
                        <FaFacebookSquare />
                        <FaTwitter />
                        <FaInstagramSquare />
                    </div>
                    <div>
                        <h2>Meet Corey</h2>
                        <h3>Nullam tincidunt ut nunc etitor. Sed vel posuere enim, id aliquam lacus. Ut accumsan ipsum turpis, ut sagittis mi porta at. Aliquam erat volutpat.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit lacus, ultrices ut leo at, malesuada fringilla purus. Maecenas euismod risus vitae luctus sollicitudin. Donec vestibulum non nunc vitae porttitor. Curabitur vestibulum tincidunt finibus. Fusce tincidunt porta arcu, at dictum risus posuere id. Aliquam quis scelerisque odio. Etiam eleifend mi nec dui pharetra ullamcorper. Duis non ante lorem. Nullam a euismod lacus. Etiam lacus justo, tempor ac nisi eu, suscipit cursus velit. Morbi venenatis erat a convallis gravida.</p>
                    </div>
                </div>
                <div className='historyContainer'> 
                    <h2>A Strong History</h2>
                    <p>Fusce dui lacus, egestas sed risus fringilla, condimentum imperdiet nibh. Vestibulum consequat fringilla ante, vel pellentesque purus elementum non. Vivamus tincidunt cursus nisl, eu facilisis sem consectetur in. Integer non ultricies magna. Mauris condimentum urna placerat erat maximus varius. Donec dictum massa eget ex egestas lacinia. Suspendisse tempor molestie dignissim. Suspendisse eget nunc et nibh fringilla iaculis. Integer nec tellus dignissim, tempor ex vitae, varius massa. Nullam sollicitudin vitae lorem vitae euismod. Morbi non odio at quam sodales. Morbi non odio at quam sodales</p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            Nunc ultrices metus tempus, pretium libero eget.
                        </li>
                        <li>
                            Ut venenatis erat a augue euismod, in fermentum tellus eleifend.
                        </li>
                        <li>
                            Duis rhoncus lectus eget orci egestas ornare.
                        </li>
                        <li>
                            <p>Quisque molestie mollis aliquet.</p>
                        </li>
                    </ul>
                </div>
                <div className='resultsAndAccomplishments'>
                    <div className='rAContainer'>
                        <h3>Phasellus non mollis risus</h3>
                        <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elitar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </div>
                    <div className='rAContainer'>
                        <h3>Phasellus non mollis risus</h3>
                        <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elitar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </div>
                    <div className='rAContainer'>
                        <h3>Phasellus non mollis risus</h3>
                        <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elitar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    </div>
                </div>
                <div className='endoresementsContainer'>
                    <div className='notSureYet'>
                        <h3>Endoresements</h3>
                        <p>Vivamus tincidunt cursus nisl, eu facilisis sem consectetur in. Integer non ultricies magna. Mauris condimentum urna placerat erat maximus varius. Donec dictum massa eget ex egestas lacinia. Suspendisse tempor molestie dignissim eget nunc et nibh fringilla.</p>
                        <img src='https://placekitten.com/640/360' alt='placeholder' />
                    </div>
                    <div className='endoresemtBox'>
                        <h4>Organizations</h4>
                        <ul>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                        </ul>
                    </div>
                    <div className='endoresemtBox'>
                        <h4>Elected Leaders</h4>
                        <ul>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                        </ul>
                    </div>
                    <div className='endoresemtBox'>
                        <h4>Elected Leaders</h4>
                        <ul>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                            <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}