import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to my Portfolio</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Explore my projects and skills as a frontend developer.
        </p>
      </section>
    </div>
  );
}
