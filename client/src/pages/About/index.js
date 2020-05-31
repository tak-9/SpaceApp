import React from "react";
import { Link } from 'react-router-dom';
import "./About.css";

function About() {
    return (
        <div>

            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="aboutheader">About iSolution</h1>
                            <p className="lead">Why Manage Your Day?</p>
                        </div>
                    </div>
                </div>
            </header>


            <section className="py-5">
                <div className="container">
                    <h2 className="font-weight-light">Applying Tips given by Space Astronauts for Covid-19 Social Isolation</h2>
                    <p>
                        We have been asked to maintain social distancing and stay at home to protect everyone from COVID-19. While it's beneficial in limiting the spread of the COVID-19 virus, isolation for an extended period of time has its detrimental impact on mental and physical health. NASA astronauts, who are experts on isolation, share expert advice on about their training and the concept of expeditionary skills for life.
                </p>
                    <p><b>
                        Background
                </b></p>
                    <p>
                        <i>NASA astronauts have been flying to space for more than 50 years and for nearly 20 years, crew members have been staying in space for months-long missions living on the International Space Station with only a few other people in about as much space as a six-bedroom house. Astronauts experience various aspects of social isolation and confinement during their missions. </i>*
                </p>
                    <p>
                        From those experiences, NASA astronaut Anne McClain suggests the following <a target="blank" href="https://www.nasa.gov/feature/an-astronaut-s-tips-for-living-in-space-or-anywhere">five good expeditionary behavior skills</a> to minimise the detrimental effects of isolation:
                </p>
                    <p>
                        ♡ Communication
                </p>
                    <p>
                        ♡ Leadership/Followership
                </p>
                    <p>
                        ♡ Self-Care
                </p>
                    <p>
                        ♡ Team Care
                </p>
                    <p>
                        ♡ Group Living
                </p>


                    <p>
                        As another NASA astronaut Scott Kelly also wrote in the
                 <a href="https://www.nytimes.com/2020/03/21/opinion/scott-kelly-coronavirus-isolation.html" target="blank"> New York Times</a>:

                 </p>
                    <p>
                        <i>"Being stuck at home can be challenging. When I lived on the International Space Station for nearly a year, it wasn’t easy. When I went to sleep, I was at work. When I woke up, I was still at work. Flying in space is probably the only job you absolutely cannot quit. But I learned some things during my time up there that I’d like to share — because they are about to come in handy again, as we all confine ourselves at home to help stop the spread of the coronavirus."</i>
                    </p>

                    <p><b><i>
                        Follow a schedule, but pace yourself
                </i></b></p>

                    <p><i>
                        "You will find maintaining a plan will help you and your family adjust to a different work and home life environment.
                        When you are living and working in the same place for days on end, work can have a way of taking over everything if you let it.
                        Don’t forget to include in your schedule a consistent bedtime. NASA scientists closely study astronauts’ sleep when we are in space, and they have found that quality of sleep relates to cognition, mood, and interpersonal relations — all essential to getting through a mission in space or a quarantine at home."
                </i></p>
                    <p>
                        Self-Care means keeping track of how healthy you are on psychological and physical levels. It includes hygiene, managing your time, activities and responsibilities, getting sleep, and maintaining your mood. Through self-care, you demonstrate your ability to be proactive in staying healthy.</p>

                    <p>
                            To combat the effects on mental health, the iSolution team has worked to create a solution based on the tips from NASA astronauts. iSolution focuses on providing a day management tool for users to start their Self-Care journey by scheduling in Self-Care activities on top of being productive during work hours by easily creating a task list and pulling it into a daily calendar for easy time management.
                </p>
                        <p>
                            NASA offers more information on Self-Care in the <a href="https://www.nasa.gov/audience/foreducators/stem-on-station/expeditionary-skills-for-life.html">Expeditionary Skills for Life</a> section on their NASA STEM website.  There are tools available for people to learn how to plan their time, including setting SMART goals, creating a daily schedule and prioritising tasks and self-care activities, and managing stress. To stay healthy, it is paramount for everyone to learn how to manage our day in a productive and loving manner, and iSolution is here to do that with you.</p>
                        <br />
                        <small>
                            The information from <a href="https://www.nasa.gov/multimedia/guidelines/index.html" target="blank">NASA</a> and <a href="https://help.nytimes.com/hc/en-us/articles/115014891408-Obtaining-and-using-Times-content" target="blank">New York Times</a> was used in accordance with their terms and conditions.</small>
                </div>
            </section>


           
        </div>
    );
}

export default About;
