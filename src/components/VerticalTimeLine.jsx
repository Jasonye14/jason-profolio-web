import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaGamepad, FaAnchor, FaCode } from 'react-icons/fa';



const VerticalTimeLine = () =>{

    return (
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(58, 87, 149)', color: '#e6e6e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(58, 87, 149)' }}
    date="March 2023 - August 2023"
    iconStyle={{ background: 'rgb(58, 87, 149)', color: '#e6e6e6' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title"><strong>Software Development Intern to CEO</strong></h3>
    <h4 className="vertical-timeline-element-subtitle">Acronis SCS, San Francisco, CA</h4>
    <p>
    ● Leveraged React, Azure, and Microsoft SQL Server to create a robust application that intelligently manages traffic
    flow and network optimization. Implemented AI algorithms to predict user behavior and enhance the user experience.
    </p>
    <p>
    ● Utilized machine learning techniques to continuously analyze user data, enabling real-time improvements to the
    product and providing insights that contributed to the company's strategic decisions.
    </p>
    <p>
      ● Actively participated in an agile environment to streamline development processes, facilitate effective
      communication, and foster a culture of continuous improvement within the team.    
      </p>
  </VerticalTimelineElement>

  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(75, 75, 75)', color: '#e6e6e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(75, 75, 75)' }}
    date="November 2022 - February 2023"
    iconStyle={{ background: 'rgb(75, 75, 75)', color: '#e6e6e6' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title"><strong>Frontend Software Engineering Intern</strong></h3>
    <h4 className="vertical-timeline-element-subtitle">Bittorrent, San Francisco, CA</h4>
    <p>
    ● Worked closely with AI specialists to introduce machine learning algorithms that personalized user
    experiences. Analyzed user behavior to continually refine the design and functionality.
    </p>
    <p>
    ● Ensured optimal functionality and consistent user satisfaction by monitoring site performance, resolved
    issues, and executed updates, catering to a massive user base of over 10 million traffic per month.
    </p>
    <p>
    ● Embraced a culture of continuous improvement by regularly soliciting feedback from users and other
    stakeholders. Used insights to identify opportunities for innovation, making data-driven decisions that led to
    better product performance.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(58, 87, 149)', color: '#e6e6e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(58, 87, 149)' }}
    date="August 2022 - November 2022"
    iconStyle={{ background: 'rgb(58, 87, 149)', color: '#e6e6e6' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title"><strong>Backend Software Engineering Intern</strong></h3>
    <h4 className="vertical-timeline-element-subtitle">Bittorrent, San Francisco, CA</h4>
    <p>
    ● Worked closely with AI specialists to introduce machine learning algorithms that personalized user
    experiences. Analyzed user behavior to continually refine the design and functionality.
    </p>
    <p>
    ● Ensured optimal functionality and consistent user satisfaction by monitoring site performance, resolved
    issues, and executed updates, catering to a massive user base of over 10 million traffic per month.
    </p>
    <p>
    ● Embraced a culture of continuous improvement by regularly soliciting feedback from users and other
    stakeholders. Used insights to identify opportunities for innovation, making data-driven decisions that led to
    better product performance.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
   className="vertical-timeline-element--work"
   contentStyle={{ background: 'rgb(75, 75, 75)', color: '#e6e6e6' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(75, 75, 75)' }}
   date="October 2021 - July 2022"
   iconStyle={{ background: 'rgb(75, 75, 75)', color: '#e6e6e6' }}
   icon={<FaGamepad />}
  >
    <h3 className="vertical-timeline-element-title"><strong>Software Intern – Game Development</strong></h3>
    <h4 className="vertical-timeline-element-subtitle">Canvas Gaming, London, United Kingdom</h4>
    <p>
    ● Collaborated closely with cross-functional teams in an agile environment to conceptualize and develop innovative gaming features, contributing to a richer, more immersive player experience. Successfully launched new functionalities to approximately 3000 active users.
  </p>
  <p>
  ● Employed a methodical approach to identify, investigate, and resolve player-reported bugs and server-side errors. Worked proactively to minimize downtime and ensure a smooth gaming experience for our users.
    </p>
    <p>
  ● Fostered a strong working relationship with designers, product managers, QA testers, and fellow developers to ensure alignment and achieve shared goals.
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(120, 30, 144)', color: '#e6e6e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(120, 30, 144)' }}
    date="August 2021"
    iconStyle={{ background: 'rgb(120, 30, 144)', color: '#e6e6e6' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title"><strong>B.S. Computer Science and Business Honors Program</strong></h3>
    <h4 className="vertical-timeline-element-subtitle">Lehigh University, Bethlehem, PA</h4>
    <p>
    Graduation: May 2025
    </p>
    <p>
    Minors in Data Science
    </p>
    <p>
    Lehigh Trustees Scholarship (Top 1% of 15,000 applicants, half-tuition)
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
   className="vertical-timeline-element--work"
   contentStyle={{ background: 'rgb(75, 75, 75)', color: '#e6e6e6' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(75, 75, 75)' }}
   date="June 2020 - September 2020"
   iconStyle={{ background: 'rgb(75, 75, 75)', color: '#e6e6e6' }}
   icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title"><strong>Fullstack Intern</strong></h3>
    <h4 className="vertical-timeline-element-subtitle">Chiguru Foundation, San Francisco, CA</h4>
    <p>
    ● Volunteered as a Python engineer to lead frontend development and establish a robust SQL database, creating an
  essential online learning platform for children during Covid-19.
  </p>
  <p>
  ● Skillfully coordinated tasks and communication in an agile environment, ensuring efficient operations and
  contributing to a meaningful educational cause.
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(46, 204, 113)', color: '#e6e6e6' }}
    icon={<FaAnchor />}
  />
</VerticalTimeline>

    )
  }

export default VerticalTimeLine