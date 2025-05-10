import React from 'react';
import TeamOne from '../../../assets/team-one.png';
import TeamTwo from '../../../assets/team-two.png';
import TeamThree from '../../../assets/team-three.png';

const teamMembers = [
    { image: TeamOne, name: 'Salsabillah R. P', role: 'UI/UX Designer' },
    { image: TeamTwo, name: 'Kadek Nandana T. M.', role: 'Back-End Developer' },
    { image: TeamThree, name: 'Cut Risfa Zuhra', role: 'Front-End Developer' },
];

const TeamCard = ({ image, name, role }) => (
    <div className="flex flex-col items-center text-center">
        <img src={image} alt={name} className="w-40 h-40 lg:w-full lg:h-full object-cover rounded-full" />
        <h1 className="mt-5 text-2xl lg:text-3xl font-bold text-secondary-50">{name}</h1>
        <p className="mt-2 text-zinc-600 text-lg lg:text-xl font-bold">{role}</p>
    </div>
);

const Team = () => {
    return (
        <section>
            <div className="container py-14 space-y-8">
                <h1 className="text-primary-90 text-center font-bold text-2xl lg:text-4xl mb-4">
                    Our Team
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} image={member.image} name={member.name} role={member.role} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;