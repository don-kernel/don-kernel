const HomeScreen = () => {
  return (
    <div className="grid gap-4 pt-4">
      <main className="grid gap-6 md:w-2/3 mx-auto px-4">
        <section className="bg-stone-200/80 dark:bg-stone-900/80 outline outline-2 outline-sky-700 p-4 rounded-xl grid gap-y-4">
          <p>
            <span className="text-2xl md:text-3xl md:pl-6">¡Hola Mundo!</span>, bienvenidos a sean mi página web.
          </p>
          <p>
            Me presento como <span className="text-2xl italic">&quot;Don Kernel&quot;</span>, soy programador con experiencia en tecnologías web, aplicaciones móviles, testing y videojuegos.<br />
          </p>

          <p>
            <span className="text-2xl italic">Mi objetivo</span> es incorporarme a los equipos que necesiten desarrolladores de confianza para escalar sus proyectos.<br />
          </p>
          <p>
            <span className="text-2xl italic">Tengo experiencia</span> en educación y formación, aportes en sistemas para instituciones de uso público/privado, y diseño de interfaces de usuario centradas en la experiencia.<br />
          </p>
        </section>

        <section className="bg-stone-200/80 dark:bg-stone-900/80 outline outline-2 outline-sky-700 p-4 rounded-xl">
          <header>
            <h2 className="text-3xl text-center">El camino de la informatica me llevo a conocer</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-4">
            <article className="p-2">
              <h3 className="text-2xl">Lenguajes</h3>

              <ul className="list-disc italic px-6">
                <li>HTML, CSS</li>
                <li>JavaScript, TypeScript</li>
                <li>PHP, C#, Python</li>
                <li>SQL (MySQL), NoSQL (MongoDB)</li>
                <li>JSX, JSON</li>
              </ul>
            </article>

            <article className="p-2">
              <h3 className="text-2xl">Herramientas</h3>

              <ul className="list-disc italic px-6">
                <li>WordPress</li>
                <li>.NET Framework</li>
                <li>SQL Server</li>
                <li>Android Studio</li>
                <li>Inteligencia Artificial</li>
              </ul>
            </article>

            <article className="p-2">
              <h3 className="text-2xl">Librerías y Frameworks</h3>

              <ul className="list-disc italic px-6">
                <li>React.js, Redux, Express</li>
                <li>Next.js, React Native (para aplicaciones móviles Android)</li>
                <li>AngularJS</li>
                <li>Bootstrap, Tailwind CSS, Material UI</li>
                <li>jQuery</li>
              </ul>
            </article>

            <article className="p-2">
              <h3 className="text-2xl">Otros Softwares</h3>

              <ul className="list-disc italic px-6">
                <li>Linux, Windows</li>
                <li>Adobe Photoshop</li>
                <li>Figma (diseño UI/UX)</li>
                <li>Blender</li>
                <li>Unreal Engine</li>
              </ul>
            </article>
          </div>
        </section>


        <section className="bg-stone-200/80 dark:bg-stone-900/80 outline outline-2 outline-sky-700 p-4 rounded-xl grid gap-y-4">
          <p>
            <span className="text-2xl italic">Ser uno con el equipo</span> es lo que me hará crecer.<br />
          </p>
          <p>
            <span className="text-2xl italic">Soy feliz programando</span>, disfrutaré construyendo y brindando soporte a cualquier proyecto, sistema o programa.<br />
          </p>
        </section>
      </main>

      <footer className="border-t-2 border-sky-700 py-10 bg-stone-900">
        <p className="text-2xl text-center text-stone-200">Mi correo: <a href="mailto:don.kernel.dev@gmail.com" className="hover:text-sky-700 hover:underline">don.kernel.dev@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export { HomeScreen };