import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "Next.js",
    "Redux",
    "Styled Component",
    "Material UI",
    "Node.js",
    "Nest.js",
    "RestfulAPI",
    "SQL",
    "GraphQL"
];

const labelsSecond = [
    "Module Federation",
    "Webpack",
];

const labelsThird = [
    "Vitest",
    "Jest",
    "Cypress",
    "Story book",
    "Azure App Service",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build complete web applications end-to-end — pixel-perfect React UIs paired with robust Node.js and Java backends. 9 years of experience delivering enterprise-scale products from requirements to production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Micro Frontend</h3>
                    <p>I contribute to scalable MFE systems that let independent packages ship in parallel — with shared component libraries and module federation keeping the experience consistent across the entire product.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Testing & Dev Tooling</h3>
                    <p>I embed quality into the development workflow — not as an afterthought. From unit tests to full E2E automation, I build testing pipelines that give teams the confidence to ship fast.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;