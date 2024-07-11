import Head from "next/head";
import Header from "@/components/header"
import Footer from "@/components/footer";


export default function About() {

    const generateSkillSet = (skills) => {
        return skills.map(skill => (
            <span key={skill} className="badge badge-outline m-1 bg-gradient-to-r hover:from-green-500 hover:to-sky-500">{skill}</span>
        ));
    }
    

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/web_logo.png" />
            </Head>
            <Header pageName={"about"}></Header>

            <main className="container p-4 mx-auto w-100 md:w-2/3 z-10 relative">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 w-full lg:order-1 order-2">
                        <div className="mb-4">
                            <h2 className="text-4xl 3xl:text-5xl font-bold">Hi!</h2>
                            <h2 className="text-5xl 3xl:text-6xl font-bold">You can call me, <span className="bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">Patar</span></h2>
                        </div>
                        <div className="mb-4">
                            <a className="m-1 btn bg-sky-500 text-white font-bold rounded-full bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500" href="https://linkedin.com/in/patarshn" target="_blank">
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                LinkedIn
                            </a>
                            <a className="m-1 btn bg-sky-500 text-white font-bold rounded-full bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500" href="https://linkedin.com/in/patarshn" target="_blank">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                Email
                            </a>
                        </div>
                        <div className="border-l-4 border-t rounded-tl-lg p-4">
                            <p className="text-white pb-2 3xl:text-2xl">Passionate and detail-oriented Software Engineer with 4 years of experience in backend and full-stack development. Skilled in optimizing system performance, developing scalable applications, and automating processes. Adept at problem-solving and collaborating with cross-functional teams to deliver high-quality software solutions. Love a clean, simple, and efficient code. Adaptable and quick learner person.</p>
                        </div>
                    </div>
                    <div className="3xl:w-1/3 xl:w-1/3 w-full lg:order-2 order-1">
                        <img src={"/me.jpeg"} className="m-auto pb-2 rounded-full" alt="logo" />
                    </div>
                </div>

                <h6 className="font-bold mt-2">Programming Language</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet(["PHP", "Javascript", "Python", "Golang", "Dart", "NodeJS"])}
                </div>

                <h6 className="font-bold mt-2">Backend Development</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet([ "Laravel", "ExpressJs", "Flask", "gRPC", "RESTful API"])}
                </div>

                <h6 className="font-bold mt-2">Frontend Development</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet(["ReactJS", "VueJS", "Flutter", "CSS", "Bootstrap", "Tailwind"])}
                </div>

                <h6 className="font-bold mt-2">Databases</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet([ "PostgreSQL", "MySQL", "MongoDB", "Redis"])}
                </div>

                <h6 className="font-bold mt-2">Message Queue</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet([  "NSQ", "Apache Kafka"])}
                </div>

                <h6 className="font-bold mt-2">CI/CD</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet([ "Jenkins", "Github"])}
                </div>

                <h6 className="font-bold mt-2">Others</h6>
                <div className="flex flex-wrap">
                    {generateSkillSet([ "Microservices", "Clean Architecture", "MVC Architecture"])}
                </div>

                <br />

                
            </main>

            <img className="fixed left-0 bottom-0 w-2/3 -translate-x-1/2 translate-y-1/2" src="/ccchaos.svg" />
            <img className="fixed right-0 bottom-0 w-2/3 -rotate-45 scale-y-[-1] translate-y-1/3 translate-x-1/4 fill-wi" src="/ttten.svg" />
            <Footer />

        </>
    );
}
