import React from 'react';
import './Boss.css';

const Boss = () => {
    return (
        <div
            className="hero w boss h-96 my-10"
            >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-black text-center bg-white rounded-sm w-2/3">
                <div className="px-10">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Boss;