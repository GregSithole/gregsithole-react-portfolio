import React, { useState } from 'react';
import './Portfolio.css';
import Menu from './Menu';
import { RiLink } from 'react-icons/ri';

const Portfolio = () => {

    const [items, setItems] = useState(Menu);
    const filterItems = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">
                Recent Projects
            </h2>

            <div className="portfolio__filters">
                <span className="portfolio__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="portfolio__item" onClick={() => filterItems('Creative')}>Creative</span>
                <span className="portfolio__item" onClick={() => filterItems('Art')}>Art</span>
                <span className="portfolio__item" onClick={() => filterItems('Design')}>Design</span>
                <span className="portfolio__item" onClick={() => filterItems('Branding')}>Branding</span>
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;

                    return (
                        <div className="portfolio__card" key={id}>
                            <div className="portfolio__thumbnail">
                                <img src={image} alt="" className="portfolio__img" />
                                <div className="portfolio__mask"></div>
                            </div>

                            <span className="portfolio__category">{category}</span>
                            <h3 className="portfolio__title">{title}</h3>
                            <a href="#" className="portfolio__button">
                                <RiLink className='portfolio__button-icon' />
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio