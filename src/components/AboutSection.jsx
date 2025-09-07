import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    אודות יניב
                </h2>
                <div className="text-center text-gray-600 text-lg">
                    כאן יופיע מידע על יניב ישר והניסיון שלו בתחום הצילום
                </div>
            </div>
        </section>
    );
};

export default AboutSection;