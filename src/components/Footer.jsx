
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">IELTSPro</h3>
          <p>Empowering students to achieve their dream IELTS band score.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Courses</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p>Email: support@ieltspro.com</p>
          <p>Phone: +91 11111 11111</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} IELTSPro. All rights reserved.
      </div>
    </footer>
  );
}
