import projectImg from '../images/2.jpg';

export default function Projects() {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">My Projects</h2>

        <div className="bg-white rounded-xl shadow-lg p-6 md:flex items-center gap-6 transition hover:shadow-xl duration-300">
          <img
            src={projectImg}
            alt="Resume Builder Project"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          
          <div className="mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Resume Builder App</h3>
            <p className="text-gray-700 leading-relaxed">
              A simple web application created for a project execution event. I led the demonstration
              and explained how the app helps users quickly create and customize resumes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
