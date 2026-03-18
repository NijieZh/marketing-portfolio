import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer, AT&T Services, Inc.</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Full-stack Web Development
            </p>
            <ul>
              <li> Led end-to-end frontend development across three enterprise platforms — building a 70+ page analytics app, a national-scale employee scheduling tool, and an internal AI-powered support chat from scratch using React, Next.js, TypeScript, and micro frontend architecture. </li>
<li> Delivered measurable impact through 80%+ test coverage, a 20% boost in user satisfaction, and scalable shared component systems serving 8 independent micro frontend applications.</li></ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer, ACV Auctions</h3>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p>
              Frontend Development
            </p>
            <ul>
              <li> Worked on the server-side web application using NodeJS and involved in the construction of UI using HTML5,
CSS3, JavaScript, React, and Bootstrap.</li>
<li> Architected and implemented REST API interfaces using NodeJS and Express.</li></ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer, SABEL Medical Software Inc</h3>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p>
              Frontend Development
            </p>
            <ul>
              <li>Developed user-facing single page application using Vue.</li>
<li>Created reusable components and routing to implement navigation between the components using Vue.</li></ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer, Bank of Communication</h3>
            <h4 className="vertical-timeline-element-subtitle">Shanghai, CN</h4>
            <p>
              Frontend Development
            </p>
            <ul><li>Developed user interface using HTML, CSS, UX, JSON, JavaScript, jQuery.</li><li>Implemented jQuery (CSS Layout and DOM manipulation and element selections) for several different business site
updates, such as page layout changes and content updates.</li></ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;