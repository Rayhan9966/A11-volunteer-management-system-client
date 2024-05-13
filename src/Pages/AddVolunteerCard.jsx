import React from 'react';

const AddVolunteerCard = ({post}) => {
    const { name,thumbnail,title,description, category,location, volunteerneed,deadline,email } = post;
    return (
        <div>
            <div className="card card-side bg-base-100 text-white dark:bg-gray-800 container ml-4 mr-4 px-4 mx-auto shadow-xl">
  <figure><img src={thumbnail} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Title: "{title}"</h2>
                    <p className='font-bold'>Description:-{description}</p>

<p>Date:{deadline}</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddVolunteerCard;