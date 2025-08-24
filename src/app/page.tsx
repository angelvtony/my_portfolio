import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, professionalSummary, education, experience, projects, skills } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Lightbulb, Wrench } from 'lucide-react';

const SectionTitle = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 flex items-center justify-center gap-4">
    <Icon className="h-8 w-8 text-primary" />
    {children}
  </h2>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-20 sm:py-32 -mt-16">
          <div className="animate-fade-in-up space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {personalInfo.name}
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              {personalInfo.title}
            </p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
            <div className="flex justify-center gap-6 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle icon={Lightbulb}>About Me</SectionTitle>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {professionalSummary}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 sm:py-24">
          <SectionTitle icon={Briefcase}>Experience</SectionTitle>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
            <div className="space-y-16">
              {experience.map((job, index) => (
                <div key={job.role} className="relative flex items-center odd:flex-row-reverse">
                  <div className="flex-1 px-8">
                    <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{job.role}</CardTitle>
                            <CardDescription>{job.company}</CardDescription>
                          </div>
                          <Badge variant="outline" className="hidden sm:block">{job.period}</Badge>
                        </div>
                         <CardDescription className="pt-2 sm:hidden">{job.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                          {job.tasks.map((task) => <li key={task}>{task}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                   <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" aria-hidden="true"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24">
          <SectionTitle icon={Wrench}>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <Card key={project.name} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-24">
          <SectionTitle icon={Wrench}>Skills</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 text-center text-foreground capitalize">{category.replace(/_/g, ' & ')}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-16 sm:py-24">
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu) => (
              <Card key={edu.degree} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.university}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
