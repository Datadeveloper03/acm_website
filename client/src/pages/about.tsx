export default function About() {
  return (
    <div>
      <div 
        className="h-64 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">About ACM-W</h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The St. Joseph's Institute of Technology ACM-W Student Chapter is dedicated to supporting, celebrating, and advocating for women in computing fields. We strive to create an inclusive environment that empowers women to pursue and excel in technology careers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The St. Joseph's Institute of Technology ACM-W Student Chapter was inaugurated on March 8th, 2025. We are a newly established community dedicated to promoting and supporting women in computing fields. Our chapter aims to create a vibrant platform for future tech leaders.
              </p>
              <p>
                Since our inauguration, we have begun organizing various activities including technical workshops, coding competitions, and industry expert talks. We are committed to fostering an inclusive environment that empowers women to excel in technology and take on leadership roles.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Goals</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
                <p className="text-muted-foreground">
                  Empower women to pursue leadership roles in technology and create a supportive network for professional growth.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-muted-foreground">
                  Provide learning opportunities through workshops, seminars, and hands-on projects.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  Build a strong community of women in computing through mentorship and networking events.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Foster innovation and research in computing through collaborative projects and competitions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}