import react from "react";

const Dashboard = () => {
    return (
        <div className="mx-auto flex flex-col items-center mt-10 px-4">
            {/* About Me */}
            <div className='bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-6xl text-center'>
                <h1 className="text-2xl font-bold mb-4">About me</h1>
                <div className="flex justify-between items-center">
                    <img src="/Me_Cruise.jpg" alt="Me" className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto" />
                    <p className="text-lg">
                        Hello Everyone, I am Erik — a Full Stack Developer based in Jacksonville, Florida. I hold a Bachelor of Science in Information Science with a minor in Leadership from the University of North Florida.
                        I specialize in full stack development and have built several projects using the MERN stack (MongoDB, Express, React, and Node.js). 
                        While MERN is my core strength, I also have hands-on experience with other frameworks and languages across the development spectrum.
                        I am currently seeking new opportunities where I can contribute, grow, and collaborate with others on impactful projects.
                    </p>
                </div>
            </div>

            {/* Other sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full max-w-6xl">
                {/* Frame Works */}
                <div className='bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-2xl text-center'>
                    <h1 className="text-2xl font-bold mb-4">Frame Works</h1>
                    <ul>
                        <li className="text-lg"><img src="/icons/React.svg" alt="React" className="w-10 h-10 rounded-full inline-block" /> React </li>
                        <li className="text-lg"><img src="/icons/Node.js.svg" alt="Node.js" className="w-10 h-10 rounded-full inline-block" /> Node.js </li>
                        <li className="text-lg"><img src="/icons/Express.svg" alt="Express" className="w-10 h-10 rounded-full inline-block" /> Express </li>
                        <li className="text-lg"><img src="/icons/Angular.svg" alt="Angular" className="w-10 h-10 rounded-full inline-block" /> Angular Version 13 </li>
                        <li className="text-lg"><img src="/icons/Tailwind.svg" alt="Tailwind css" className="w-10 h-10 rounded-full inline-block" /> Tailwind CSS </li>
                        <li className="text-lg"><img src="/icons/Vite.svg" alt="Vite" className="w-10 h-10 rounded-full inline-block" /> Vite </li>
                        <li className="text-lg"><img src="/icons/SpringBoot.svg" alt="SpringBoot" className="w-10 h-10 rounded-full inline-block" /> A bit of SpringBoot </li>
                    </ul>
                </div>

                {/* Programming Languages */}
                <div className='bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-2xl text-center'>
                    <h1 className="text-2xl font-bold mb-4">Programming Languages</h1>
                    <ul>
                        <li className="text-lg"><img src="/icons/JS.svg" alt="JavaScript" className="w-10 h-10 rounded-full inline-block" /> JavaScript </li>
                        <li className="text-lg"><img src="/icons/TS.svg" alt="TypeScript" className="w-10 h-10 rounded-full inline-block" /> TypeScript </li>
                        <li className="text-lg"><img src="/icons/HTML5.svg" alt="HTML" className="w-10 h-10 rounded-full inline-block" /> HTML </li>
                        <li className="text-lg"><img src="/icons/CSS.svg" alt="CSS" className="w-10 h-10 rounded-full inline-block" /> CSS </li>
                        <li className="text-lg"><img src="/icons/Java.svg" alt="Java" className="w-10 h-10 rounded-full inline-block" /> Java </li>
                        <li className="text-lg"><img src="/icons/Python.svg" alt="Python" className="w-10 h-10 rounded-full inline-block" /> Python </li>
                        <li className="text-lg"><img src="/icons/C.svg" alt="C" className="w-10 h-10 rounded-full inline-block" /> C </li>
                        <li className="text-lg"><img src="/icons/CSharp.svg" alt="C#" className="w-10 h-10 rounded-full inline-block" /> C# </li>
                    </ul>
                </div>

                {/* Technical Skills */}
                <div className='bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-2xl text-center'>
                    <h1 className="text-2xl font-bold mb-4">Technical Skills</h1>
                    <ul>
                        <li className="text-lg"><img src="/icons/Azure.svg" alt="Azure" className="w-10 h-10 rounded-full inline-block" /> Azure </li>
                        <li className="text-lg"><img src="/icons/Render.svg" alt="Render" className="w-10 h-10 rounded-full inline-block" /> Render </li>
                        <li className="text-lg"><img src="/icons/MongoDB.svg" alt="MongoDB" className="w-10 h-10 rounded-full inline-block" /> MongoDB </li>
                        <li className="text-lg"><img src="/icons/MySQL.svg" alt="MySQL" className="w-10 h-10 rounded-full inline-block" /> MySQL </li>
                        <li className="text-lg"><img src="/icons/VSCode.svg" alt="VS Code" className="w-10 h-10 rounded-full inline-block" /> VS Code </li>
                        <li className="text-lg"><img src="/icons/Eclipse.svg" alt="Eclipse" className="w-10 h-10 rounded-full inline-block" /> Eclipse </li>
                        <li className="text-lg"><img src="/icons/Git.svg" alt="Git" className="w-10 h-10 rounded-full inline-block" /> Git </li>
                        <li className="text-lg"><img src="/icons/Git.svg" alt="Git Workflows" className="w-10 h-10 rounded-full inline-block" /> Git Workflows </li>
                        <li className="text-lg"><img src="/icons/Jira.svg" alt="Jira" className="w-10 h-10 rounded-full inline-block" /> Jira </li>
                        <li className="text-lg"><img src="/icons/Agile.svg" alt="Agile" className="w-10 h-10 rounded-full inline-block" /> Agile </li>
                        <li className="text-lg"><img src="/icons/Agile.svg" alt="Scrum" className="w-10 h-10 rounded-full inline-block" /> Scrum </li>
                    </ul>
                </div>

                {/* Skills */}
                <div className='bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-2xl text-center'>
                    <h1 className="text-2xl font-bold mb-4">Skills</h1>
                    <ul>
                        <li className="text-lg"><img src="/icons/Leadership.svg" alt="Leadership" className="w-10 h-10 rounded-full inline-block" /> Leadership </li>
                        <li className="text-lg"><img src="/icons/Teamwork.svg" alt="Teamwork" className="w-10 h-10 rounded-full inline-block" /> Teamwork </li>
                        <li className="text-lg"><img src="/icons/Communication.svg" alt="Communication" className="w-10 h-10 rounded-full inline-block" /> Communication </li>
                        <li className="text-lg"><img src="/icons/Problem_Solving.svg" alt="Problem Solving" className="w-10 h-10 rounded-full inline-block" /> Problem Solving </li>
                        <li className="text-lg"><img src="/icons/Time_Management.svg" alt="Time Management" className="w-10 h-10 rounded-full inline-block" /> Time Management </li>
                        <li className="text-lg"><img src="/icons/Microsoft.svg" alt="Microsoft" className="w-10 h-10 square-full inline-block" /> Microsoft 365 </li>
                    </ul>
                </div>
            </div>
            <div className='bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-6xl text-center'>
                <h1 className="text-2xl font-bold mb-4">Contacts</h1>
                <p>Email: ErikJKoivu@gmail.com</p>
                <p>GitHub: <a href="https://github.com/00Kaiser00" target="_blank">https://github.com/00Kaiser00</a></p>
                <a href="/Erik's_Resume.pdf" download="Erik's_Resume.pdf">Download Resume</a>
            </div>

        </div>
    );
};

export default Dashboard;