export const metadata = {
  title: "Dragon News | Career"
};

const CareerPage = () => {
    return (
        <section className="mt-10 bg-gray-100 text-gray-800 min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto space-y-10">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">Careers</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join our team and help shape the future of journalism.
                    </p>
                </div>

                {/* Intro */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Work With Us?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are a growing news platform committed to truth, transparency, and innovation.
                        Our team values creativity, integrity, and collaboration. If you're passionate
                        about storytelling and making an impact, we'd love to hear from you.
                    </p>
                </div>

                {/* Benefits */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                        <li>✔ Competitive Salary</li>
                        <li>✔ Remote Work Opportunities</li>
                        <li>✔ Flexible Hours</li>
                        <li>✔ Learning & Growth</li>
                        <li>✔ Friendly Work Environment</li>
                        <li>✔ Career Development</li>
                    </ul>
                </div>

                {/* Job Openings */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Open Positions</h2>

                    {/* Job Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">News Reporter</h3>
                        <p className="text-gray-500 text-sm">Full-time • Remote</p>
                        <p className="text-gray-600 mt-2">
                            Cover breaking news, conduct interviews, and create engaging stories.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>

                    {/* Job Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">Content Writer</h3>
                        <p className="text-gray-500 text-sm">Part-time • Remote</p>
                        <p className="text-gray-600 mt-2">
                            Write high-quality articles on trending topics and news updates.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>

                    {/* Job Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
                        <p className="text-gray-500 text-sm">Full-time • On-site</p>
                        <p className="text-gray-600 mt-2">
                            Build modern UI for our news platform using React & Next.js.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Apply Now
                        </button>
                    </div>

                </div>

                {/* CTA */}
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                        Didn’t find a suitable role?
                    </h2>
                    <p className="text-gray-600">
                        Send your resume to:
                    </p>
                    <p className="text-blue-600 mt-2 font-medium">
                        careers@yournews.com
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CareerPage;