export default function About() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-pink-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 transition transform hover:scale-105 duration-300">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-6">
          About Me
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hello! I’m <span className="font-semibold text-blue-700">Prajwal</span>, a final-year Diploma student at 
          <span className="font-semibold text-blue-700"> Karnataka Government Polytechnic</span>. I’m deeply passionate about 
          <span className="text-blue-600 font-medium"> web development</span> and building a career in the IT field.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <span className="font-semibold text-blue-700">Education:</span> Completed SSLC and currently pursuing Diploma in Computer Science.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <span className="font-semibold text-blue-700">Skills:</span> HTML, CSS, JavaScript, React.js, Tailwind CSS, Git.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold text-blue-700">Goal:</span> To become a full-stack web developer and contribute to impactful projects.
        </p>
      </div>
    </section>
  );
}
