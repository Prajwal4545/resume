import { FaPython, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: 'Java', icon: <FaJava className="text-red-600 text-3xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
  ];

  return (
    <section className="bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">My Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center justify-center hover:shadow-xl transition">
            {skill.icon}
            <p className="mt-3 text-lg font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
