// this will include pictures and details about the lead team members, mostly Alex, Mari, Brian, and Jeff.

import React, { useState } from 'react';

function Team() {
    const teamMembers = [
        {
            id: 1,
            name: 'Alex',
            bio: 'A devoted family dad transformed his passion for Halloween into a full-scale community event by turning his own home into an elaborate haunted house. Initially a small project meant for family and friends, the setup grew in complexity and size over the years, attracting more and more visitors from the neighborhood and beyond. This annual tradition eventually became so popular that it turned into a full-time event during the Halloween season. He invests significant time and creativity into designing new spooky themes, building detailed props, and creating special effects to make the experience thrilling for everyone. His haunted house has become a fixture in the community, often drawing local media attention and inspiring others to contribute or create similar events. The dads dedication not only provides seasonal fun but also fosters a sense of togetherness among the local residents, with some even volunteering to help run the haunted house. This once personal hobby is now a well-known attraction, with thousands of visitors flocking each year, making it both a creative outlet and a small business that requires year-round planning and preparation.',
            image: 'haunt1.jpg', // Replace with real image URL
          },
          {
            id: 2,
            name: 'Mari',
            bio: 'My name is Mari Wakefield. I have a 2 year old beautiful daughter Shyanne .I have been married 20 years to the most supportive haunt husband ever. Raised in Pacifica, live in Tracy. I love: my horses, my truck, camping, fishing with my family, and my haunt. I started condemned compound 2014 in Tracy, CA. Alex Acosta and I merged together as haunt partners back in 2019. In 2022 our haunt had grown too big in Tracy and we needed to move; and here we are Brentwood. I was raised growing up with a halloween mom. She decorated inside the house and out; She was known for her halloween tree in Pacifica ca. I carried on the tradition each year and now in her memory. So halloween isnt just a holiday for me; it is life.',
            image: 'https://via.placeholder.com/150', // Replace with real image URL
          },
        ];
  return (
    <section>
      <div className="teamHeader">
        <h2>Our Team</h2>
        <p>Here are the members of our team:</p>
      </div>
      <div className="team">
        {teamMembers.map((member) => (
          <div
          key={member.id}
          className={`teamMember ${member.name === 'Mari' ? 'specialStyle' : ''}`} // Add special class for Mari
        >
            <img src={member.image} alt={member.name} className="teamImage" />
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
