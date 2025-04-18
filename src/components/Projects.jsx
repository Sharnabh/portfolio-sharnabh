import React from "react";
import pm from '../assets/pm.png'
import wr from '../assets/wr.png'
import lb from '../assets/lb.jpg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title==='LangBridge' && (
                <div>
                    <img className="w-full rounded-t-lg h-auto object-cover " src={lb} alt="LangBridge" />
                </div>
            )}
            {title==='Password Manager' && (
                <div>
                    <img className="w-full rounded-t-lg h-auto object-cover " src={pm} alt="Password Manager" />
                </div>
            )}
            {title==='Weather Forcast' && (
                <div>
                    <img className="w-full rounded-t-lg h-auto object-cover " src={wr} alt="Weather Forcast" />
                </div>
            )}
            <div className="p-4 sm:p-6">
                <div>
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </div>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} target="_blank" rel="noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'LangBridge',
        description:'LangBridge is an innovative iOS application designed to assist individuals with various speech challenges. Built using SwiftUI and advanced speech recognition, the app offers interactive exercises and real-time feedback to enhance pronunciation and communication skills.',
        image: {lb},
        git:'https://github.com/Sharnabh/LangBridge',
        technologies:['SwiftUI' ,'XCode' , 'iOS']
    },
    {
        title:'Password Manager',
        description:'My Password Manager is a secure and efficient Python-based application designed to store, retrieve, update, and manage passwords with ease. Featuring a user-friendly interface, encryption, and authentication, it ensures seamless and safe password management.',
        image: {pm},
        git:"https://github.com/Sharnabh/Password-Manager",
        technologies:[ 'Python', 'SQLite']
    },
    {
        title:'Weather Forcast',
        description:'My Weather Forecast app is a sleek and intuitive application that provides real-time weather updates and forecasts. Built with a user-friendly interface, it delivers accurate temperature, humidity, and weather conditions to help users stay prepared.',
        image: {wr},
        git:"https://github.com/Sharnabh/Weather-Forcaster",
        technologies:[ 'Python', 'API']
    }
]

export default Projects