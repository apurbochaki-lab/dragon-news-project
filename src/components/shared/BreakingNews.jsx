import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const breakingNews = [
        {
            _id: 1,
            title: "Breaking News : Major Earthquake Hits Southeast Asia"
        },
        {
            _id: 2,
            title: "Breaking News : Global Oil Prices Surge Overnight"
        },
        {
            _id: 3,
            title: "Breaking News : New AI Technology Disrupts Job Market"
        },
        {
            _id: 4,
            title: "Breaking News : International Space Mission Announces Success"
        },
        {
            _id: 5,
            title: "Breaking News : Severe Flooding Affects Thousands"
        },
        {
            _id: 6,
            title: "Breaking News : Stock Markets See Sudden Drop Worldwide"
        },
        {
            _id: 7,
            title: "Breaking News : Government Announces New Economic Policy"
        },
        {
            _id: 8,
            title: "Breaking News : Cyberattack Targets Major Tech Companies"
        },
        {
            _id: 9,
            title: "Breaking News : Scientists Discover New Renewable Energy Source"
        },
        {
            _id: 10,
            title: "Breaking News : Massive Wildfire Spreads Across Forest Region"
        }
    ];

    return (
        <Marquee pauseOnHover={true}>
            {
                breakingNews.map(news => <p key={news.id}>{news.title}</p>)
            }
        </Marquee>
    );
};

export default BreakingNews;