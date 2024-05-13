import React from 'react';

import Slide from './Slide';
import { useLoaderData } from 'react-router-dom';
// import Volunteer from '../Volunteer';
import VolunteerCard from '../VolunteerCard';

// import VolunteerNeedCard from '../../Routes/VolunteerNeedCard';

// import Services from '../../Routes/Services';
const Home = () => {
    const posts = useLoaderData()
    // console.log(posts);

    return (
        <div>
            <Slide></Slide>
            {/* <Volunteer></Volunteer> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:mt-16 xl:grid-cols-3'>
                {
                    posts.map(post => <VolunteerCard
                        key={post._id}
                        post={post}>
                    </VolunteerCard>
                    )


                }
            </div>
            {/* <Services></Services>
        <VolunteerNeedCard></VolunteerNeedCard> */}
        </div>
    );
};

export default Home;