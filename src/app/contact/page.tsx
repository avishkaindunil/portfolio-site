export default function Contact() {
  return (
    <div className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-4">Feel free to reach out via email or LinkedIn.</p>
      <p className="text-gray-700">Email: <a href="mailto:you@example.com" className="text-blue-600 hover:underline">you@example.com</a></p>
      <p className="text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 hover:underline">yourprofile</a></p>
    </div>
  );
}
