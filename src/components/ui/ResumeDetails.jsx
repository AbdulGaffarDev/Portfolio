import Button from "./Button";

const ResumeDetails = () => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <Button
          text="Download Resume"
          variant="solid"
          url="/assets/Abdul_Gaffar_Resume.pdf"
          className="w-full max-w-xs"
        />
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <div className="mb-4">
            <div className="flex justify-between font-semibold text-indigo-700 dark:text-indigo-400">
              <span>Senior MERN Developer</span>
              <span>2021 - Present</span>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <p>TechSolutions Inc.</p>
              <ul className="list-disc list-inside mt-1">
                <li>Led development of full-stack web applications using MERN stack</li>
                <li>Implemented RESTful APIs and database architecture</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-indigo-700 dark:text-indigo-400">
              <span>Frontend Developer</span>
              <span>2019 - 2021</span>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <p>WebCraft Studios</p>
              <ul className="list-disc list-inside mt-1">
                <li>Developed responsive user interfaces using React</li>
                <li>Collaborated with designers to implement UI/UX designs</li>
                <li>Optimized application performance and accessibility</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <div className="flex justify-between font-semibold text-indigo-700 dark:text-indigo-400">
            <span>BSc in Computer Science</span>
            <span>2015 - 2019</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">University of Technology</p>
        </section>
      </div>
    </div>
  );
};

export default ResumeDetails;
