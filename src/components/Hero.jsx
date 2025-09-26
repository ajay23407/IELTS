
export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-28 md:pt-32 bg-blue-50 dark:bg-gray-900"
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Achieve Your{" "}
          <span className="text-blue-600 dark:text-blue-400">Dream Band</span>{" "}
          in IELTS
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Get world-class training with expert guidance, mock tests, and
          AI-based scoring.
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Free Demo
          </button>

          <button
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800"
            onClick={() => {
              const el = document.getElementById("courses");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center -translate-y-6">
        <img
          src="img.jpg"
          alt="IELTS study"
          className="rounded-lg shadow-lg max-h-96"
        />
      </div>
    </section>
  );
}
