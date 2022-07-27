import React from 'react';
import './Resume.css';
import Tab from './Tab';
import Tabs from './Tabs';
import TabList from './TabList';
import Button from './Button';
import TabPanel from './TabPanel';

import WorkExperience from './WorkExperience';


const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs selected={1}>
                    <TabList>
                        {WorkExperience.map((experience) => {
                            const { id, company } = experience;
                            return (
                                <Tab key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            )
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel key={`panel-${id}`}>
                                <h2 className="tab__panel-title">{title} @ {company}</h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return (
                                            <li key={`info-${index}`}>{info}</li>
                                        )
                                    })}
                                </ul>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </div>
        </section>
    )
}

export default Resume