import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Portfolio website built with React, TypeScript, and Tailwind CSS. Features responsive design and modern aesthetics.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/aleksaKis/aleksaKis.github.io",
    liveUrl: "https://aleksakis.github.io",
    category: "React",
  },
  {
    id: "rand-melody",
    title: "Rand Melody Generator",
    description:
      "Web app that generates random melodies with customizable tempo, octaves, and length using Web Audio API.",
    technologies: ["JavaScript", "Web Audio API"],
    githubUrl: "https://github.com/aleksaKis/rand-melody",
    category: "JavaScript",
  },
  {
    id: "beeptune",
    title: "Beeptune CLI",
    description:
      "CLI tool for organizing music collections by scanning folders and looking up albums via Spotify API.",
    technologies: ["Node.js", "Spotify API"],
    githubUrl: "https://github.com/aleksaKis/beptune",
    category: "Node.js",
  },
  {
    id: "chat-app",
    title: "Real-time Chat",
    description:
      "Full-stack chat application with Angular frontend and Express backend featuring real-time messaging.",
    technologies: ["Angular", "Express", "Socket.io"],
    githubUrl: "https://github.com/aleksaKis/chat-app",
    category: "Full Stack",
  },
  {
    id: "heart-disease",
    title: "Heart Disease Classifier",
    description:
      "Machine learning model for heart disease classification using scikit-learn and pandas.",
    technologies: ["Python", "scikit-learn", "Pandas"],
    githubUrl: "https://github.com/aleksaKis/heart-disease-classification",
    category: "Python",
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description:
      "Fast sudoku solver using backtracking algorithm. Solves any solvable puzzle efficiently.",
    technologies: ["Python", "Algorithms"],
    githubUrl: "https://github.com/aleksaKis/sudoku-solver",
    category: "Python",
  },
];

const categories = [
  "All",
  "React",
  "JavaScript",
  "Node.js",
  "Full Stack",
  "Python",
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="project-card">
      <h3 className="text-lg font-medium text-foreground mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-muted text-muted-foreground border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={14} />
          <span>Code</span>
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={14} />
            <span>Live</span>
          </a>
        )}
      </div>
    </article>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors duration-150 ${
                activeFilter === category
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/aleksaKis"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
