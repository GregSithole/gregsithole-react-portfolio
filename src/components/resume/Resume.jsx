import React from 'react';
import './Resume.css';
import Tab from './Tab';
import Tabs from './Tabs';
import TabList from './TabList';
import Button from './Button';
import TabPanel from './TabPanel';


const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs selected={1}>
                    <TabList>
                        <Tab>
                            <Button>Kurtosys</Button>
                        </Tab>
                        <Tab>
                            <Button>Entrostat</Button>
                        </Tab>
                        <Tab>
                            <Button>Empire State</Button>
                        </Tab>
                        <Tab>
                            <Button>The Digital Academy</Button>
                        </Tab>
                        <Tab>
                            <Button>Varsity College</Button>
                        </Tab>
                        <Tab>
                            <Button>Varsity College</Button>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        Related to Kurtosys
                    </TabPanel>

                    <TabPanel>
                        Related to Entrostat
                    </TabPanel>

                    <TabPanel>
                        Related to Empire State
                    </TabPanel>

                    <TabPanel>
                        Related to The Digital Academy
                    </TabPanel>

                    <TabPanel>
                        Related to Varsity College
                    </TabPanel>

                    <TabPanel>
                        Related to Varsity College 2
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}

export default Resume