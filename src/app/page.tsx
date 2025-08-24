import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, professionalSummary, education, experience, projects, skills } from "@/lib/data";
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Lightbulb, Wrench, Send, FileText, Code, Smartphone, Database, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

const SectionTitle = ({ icon: Icon, children, id }: { icon: React.ElementType, children: React.ReactNode, id: string }) => (
  <div id={id} className="relative pt-24 -mt-24">
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 flex items-center justify-center gap-4 animation-fade-in">
      <Icon className="h-8 w-8 text-primary" />
      {children}
    </h2>
  </div>
);

const skillCategoryIcons: { [key: string]: React.ElementType } = {
  languages: Code,
  mobile_development: Smartphone,
  databases: Database,
  tools: Wrench,
  architecture: Network,
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        
        <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-20 sm:py-32 -mt-16">
          <div className="animation-fade-in space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {personalInfo.name}
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
             Software Engineer | Android Developer | AI & ML Enthusiast
            </p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
               <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild variant="outline">
                 <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <SectionTitle icon={Lightbulb} id="about">About Me</SectionTitle>
        <section className="pb-16 sm:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {professionalSummary}
            </p>
          </div>
        </section>

        <SectionTitle icon={Wrench} id="skills">Skills</SectionTitle>
        <section className="pb-16 sm:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => {
              const Icon = skillCategoryIcons[category] || Wrench;
              return (
                <Card key={category} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col">
                  <CardHeader className="flex-row items-center gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <CardTitle className="capitalize text-2xl">{category.replace(/_/g, ' ')}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <SectionTitle icon={Briefcase} id="projects">Projects</SectionTitle>
        <section className="pb-16 sm:pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        <SectionTitle icon={Briefcase} id="experience">Experience</SectionTitle>
        <section className="pb-16 sm:pb-24">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={job.role} className="relative flex items-start gap-4 sm:gap-8">
                  <div className="absolute left-4 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" aria-hidden="true"></div>
                  <div className="w-full sm:w-1/2 sm:text-right sm:pr-8 pt-0.5">
                     <p className="font-semibold text-primary">{job.period}</p>
                  </div>
                  <div className="flex-1 pl-8 sm:pl-0 sm:w-1/2">
                    <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>{job.role}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                          {job.tasks.map((task) => <li key={task}>{task}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <SectionTitle icon={GraduationCap} id="education">Education</SectionTitle>
        <section className="pb-16 sm:pb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

        <SectionTitle icon={Send} id="contact">Contact Me</SectionTitle>
        <section className="pb-16 sm:pb-24">
            <div className="max-w-xl mx-auto">
                <Card>
                    <CardContent className="p-6">
                        <ContactForm />
                    </CardContent>
                </Card>
                <div className="mt-8 text-center text-muted-foreground">
                    <p>You can also reach me via:</p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                            <span>Email</span>
                        </a>
                        <a href={`tel:${personalInfo.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone className="h-5 w-5" />
                            <span>Phone</span>
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                            <span>GitHub</span>
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
