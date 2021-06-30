import React from 'react';

export default function About() {
  return (
    <div>
        <h1>h0i events component</h1>
        <div topContainer>
            <h1>Get Involved</h1>
            <h2>Events and Contributions</h2>
            <p>Nullam tincidunt ut nunc et porttitor. Sed vel posuere enim, id aliquam lacus. Ut accumsan ipsum turpis, ut sagittis mi porta at. Aliquam erat volutpat. Pellentesque congue ipsum ut tempus luctus. Nullam tincidunt ut nunc et porttitor.</p>
        </div>
        <div className='upcomingContainer'>
            <h2>Upcoming events</h2>
            <p className='eventDate'>jul 4, 2021</p>
            <h3>Join us for the 4th of July parade.</h3>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed si</p>
        </div>
        <div className='countDownContainer'>
            <h2>Don't forget to vote!</h2>
            <p>Elit id est euismod, vel convallis arcu dignissim. Proin suscipit lectus eu ultricies blandit. Praesent tempus nibh id felis varius, vel mollis ante dignissim.</p>
            <h1>CountDown timer placeholder</h1>
        </div>
    </div>
  );
}
