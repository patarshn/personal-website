import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header"
import Footer from "@/components/footer";
import ProjectCard from "@/components/projectCard";

export default function Project() {

    const projects = [
        {
            "picture" : "/project/tokopedia-affiliate.webp",
            "title" : "Affiliate - Tokopedia",
            "role" : "Software Engineer",
            "description" : "Worked in the Tokopedia Affiliate team, and handled 3 projects including Affiliate Core (Attribution Flow, Fraud Detection), Affiliate Internal Tools, and Affiliate Wallet Manager.",
            "responsibilities" : [
                "TBA",
            ],
            "techStack" : ["Golang", "gRPC", "Microservices", "Redis", "RESTful API", "PostgreSQL", "Git"]
        },
        {
            "picture" : "/project/tokopedia-seller-home.webp",
            "title" : "Seller Home & Analytic - Tokopedia",
            "role" : "Software Engineer",
            "description" : "Worked in the Tokopedia Seller Home & Analytics team, and handled 3 projects including Seller Insight Service, Merchant Data Center Service, Product Data Center Service.",
            "responsibilities" : [
                "TBA",
            ],
            "techStack" : ["Golang", "gRPC", "Microservices", "Git", "Redis", "GraphQL"]
        },
        {
            "picture" : "/project/kompas-gramedia-etl.webp",
            "title" : "ETL Project - Kompas Gramedia",
            "role" : "Data Engineer",
            "description" : "Collaborating with Kompas Gramedia to help with an automated ETL system using Microsoft Azure Data Factory.",
            "responsibilities" : [
                "TBA",
            ],
            "techStack" : ["Azure Data Factory", "Azure Data Flow", "MongoDB", "MySQL", "PostgreSQL"]
        },
        {
            "picture" : "/project/mighty.png",
            "title" : "MIGsys - Mitramas Infosys Global",
            "role" : "Software Engineer",
            "description" : "An enterprise resource planning system to boost your employee performance and productivity.",
            "responsibilities" : [
                "Analyze user requirement",
                "Collaborate with front-end",
            ],
            "techStack" : ["Laravel", "Restful API", "Postman", "MySQL"]
        },
        {
            "picture" : "/project/sigarpu-polda-lampung.webp",
            "title" : "SIGARPU - POLDA LAMPUNG",
            "role" : "Software Engineer",
            "description" : "an information system developed to track data on violations by Lampung regional police personnel.",
            "responsibilities" : [
                "Analyze user requirement",
                "Develop desktop-based systems and integrate with APIs.",
                "Develop API to manage personnel data.",
                "Perform module integration testing"
            ],
            "techStack" : ["Lumen", "RestAPI", "NodeJS", "ElectronJS", "ExpressJS", "Bootstrap", "Postman", "MySQL"]
        },
        {
            "picture" : "/project/brantas-abipraya-spreadsheet-converter.webp",
            "title" : "Spreadsheet Converter System - Brantas Abipraya",
            "role" : "Back-end Developer",
            "description" : "a system developed for data validation from excel or csv and then stored in the data warehouse.",
            "responsibilities" : [
                "Analyze user requirement",
                "Develop API for Authentication using JWT.",
                "Develop API to import data from 8 types of excel or csv to database. Before importing, all data in the file must be validated.",
                "Setup linux server (CentOS) for development or testing."
            ],
            "techStack" : ["CodeIgniter", "RestAPI", "Vultr", "JWT", "Postman", "PostgreSQL", "Linux"]
        },
        {
            "picture" : "/project/pekon-wonodadi-smart-village-information-system.webp",
            "title" : "Pekon Wonodadi Service Administration System",
            "role" : "Web Developer",
            "description" : "an information system developed to help the Wonodadi village in realizing the smart village concept in the industrial era 4.0 .",
            "responsibilities" : [
                "Analyze user requirement",
                "Develop an Administrative Letter Module which has 20 types of administrative letters.",
                "Perform module testing using the blackbox method and user acceptance testing",
                "Perform system deployment"
            ],
            "techStack" : ["CodeIgniter", "Bootstrap", "Linux", "MySQL"]
        },  
        {
            "picture" : "/project/polresta-bandar-lampung-informtaion-system.webp",
            "title" : "Polresta Bandar Lampung Infomation System",
            "role" : "Web Developer",
            "description" : "an information system created with the aim of facilitating the public in getting the latest news and facilitating the public in reporting security and public order issues.",
            "responsibilities" : [
                "Develop News Management Module",
                "Develop Gallery Management Module",
                "Develop Proof Management Module"
            ],
            "techStack" : ["Laravel", "Bootstrap", "MySQL"]
        },
    ]

  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/web_logo.png" />
      </Head>
      <Header pageName={"project"}></Header>

      <main className="container mx-auto w-3/4 md:w-2/3 mb-auto">
        <blockquote className="text-center text-xl italic font-semibold pt-2 pb-8">
            <p>You don&apos;t have to be great to start, but you have to start to be great!</p>
        </blockquote>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    {projects.map((value, index) => {
        return (
            <ProjectCard key={index} data={value}/>
        )
    })}
</div>

      </main>
      <Footer/>
    </>
  );
}
