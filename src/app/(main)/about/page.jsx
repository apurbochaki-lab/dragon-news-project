export const metadata = {
  title: "Dragon News | About"
};

const AboutPage = () => {
    return (
        <section className="mt-10 bg-gray-100 text-gray-800 min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto space-y-10">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Journalism without fear or favour. We bring you the truth that matters.
                    </p>
                </div>

                {/* Mission */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to deliver accurate, unbiased, and real-time news to our audience.
                        We believe in transparency, integrity, and accountability in journalism.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                        To become a trusted global news platform where readers can rely on verified
                        information and meaningful insights.
                    </p>
                </div>

                {/* What We Cover */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Cover</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                        <li>✔ Breaking News</li>
                        <li>✔ Politics</li>
                        <li>✔ Technology</li>
                        <li>✔ Business</li>
                        <li>✔ Health</li>
                        <li>✔ Entertainment</li>
                    </ul>
                </div>

                {/* Team */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Team</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are a team of passionate journalists, editors, and developers working together
                        to ensure high-quality news delivery. Our team verifies every piece of information
                        before publishing.
                    </p>
                </div>

                {/* Contact */}
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                    <p className="text-gray-600">
                        Have questions or suggestions? Reach out to us at:
                    </p>
                    <p className="text-blue-600 mt-2 font-medium">contact@yournews.com</p>
                </div>

            </div>
        </section>
    );
};

export default AboutPage;