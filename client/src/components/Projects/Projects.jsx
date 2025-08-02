import React, { useState } from "react";

function Projects() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="mx-auto flex flex-col items-center mt-10 px-4"> {/* Added horizontal padding */}
            <div className="bg-white rounded border-3 border-black shadow-md p-4 mb-6 w-full max-w-6xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Message Board</h1>

                {/* Responsive Flex Container */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Responsive Image */}
                    <img
                        src="/Message Board v2.png"
                        alt="Message Board"
                        className="w-full max-w-sm h-auto rounded"
                    />

                    {/* Text Block */}
                    <p className="text-lg text-center md:text-left">
                        Message Board is a full-stack mock social media application designed to showcase user interaction and dynamic content management.
                        Built using the MERN stack (MongoDB, Express, React, and Node.js) and styled with Tailwind CSS to make the website more mobile friendly.
                        It is fully deployed on Render, allowing for a seamless online experience.
                        Users can sign up and log in securely, create and share posts, comment on others’ posts, and customize their personal profiles.
                    </p>
                </div>

                {/* Show More Button */}
                <div className="flex justify-center">
                    <button
                        className="rounded bg-white text-black py-2 px-4 border-3 border-black mt-4 mb-4"
                        onClick={() => setShowMore(!showMore)}
                    >
                        Show {showMore ? "Less" : "More"}
                    </button>
                </div>

                {/* Expanded Details */}
                {showMore && (
                    <div className="flex flex-col items-center text-center md:text-left">
                        <p className="text-lg mt-2">
                            When you first visit Message Board, you're directed to a login page where you can sign up for a new account or log in to an existing one. 
                            After logging in, you can create and share posts, comment on other users’ posts, and personalize your own profile. 
                            User interaction is seamless—clicking on a username or using the search bar allows you to view other users’ profiles. 
                            Each profile displays the user’s posts, profile picture, and bio. 
                            On your own profile page, you have the ability to update your profile picture and bio, giving you control over how you represent yourself within the platform.
                        </p>

                        <p className="text-lg mt-4 break-all">
                            Visit the site:{" "}
                            <a
                                href="https://message-board-pqqk.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 underline"
                            >
                                https://message-board-pqqk.onrender.com/
                            </a>
                        </p>

                        <p className="text-lg mt-4 break-all">
                            View the code:{" "}
                            <a
                                href="https://github.com/00Kaiser00/Message-Board.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 underline"
                            >
                                https://github.com/00Kaiser00/Message-Board.git
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
