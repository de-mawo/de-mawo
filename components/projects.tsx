"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Google Calendar Clone",
    description:
      "A Google Calendar clone using Next.js, React, Day.js, Neon Postgres, and Drizzle ORM. Features include adding events and viewing in month, week, and day formats.",
    image: "/gcclone.png",
    github: "#",
    demo: "#",
    tags: [
      "React",
      "Next.js",
      "Shadcn UI",
      "TailwindCSS",
      "Neon/PostgreSQL",
      "Drizzle ORM",
    ],
  },
  {
    title: "Spana: Leave Management App",
    description:
      "A leave management application built with Next.js, Prisma, PostgreSQL, and Next-Auth for authentication.",
    image: "/spana.png",
    github: "https://github.com/de-mawo/spana-yt",
    demo: "#",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Next-Auth",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
    ],
  },
  {
    title: "DPSRESTO: Food Delivery App",
    description:
      "A food delivery application built with Next.js, Apollo Server, Prisma, and Stripe for payments.",
    image: "/dpsresto.png",
    github: "https://github.com/de-mawo/dpsresto-yt",
    demo: "#",
    tags: [
      "Next.js",
      "Apollo Server",
      "Pothos",
      "Urql",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Next-Auth",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Stripe",
      "MapBox",
    ],
  },
  {
    title: "Moto Moto: Driving Lessons Booking",
    description:
      "A web application for booking driving lessons, built with Next.js, Prisma, and PostgreSQL.",
    image: "/motomoto.png",
    github: "https://github.com/de-mawo/motomoto-yt",
    demo: "#",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Next-Auth",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Bath: Learning Management System",
    description:
      "A streamlined learning management solution tailored for startups offering BootCamps, designed to adapt to the contemporary landscape of predominantly online learning.",
    image: "/bathgraph.png",
    github: "#",
    demo: "#",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "shadcn/ui",
      "Next-Auth",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "Shared Memories (Client Project)",
    description:
      "The easiest way to collect photos and videos from your guests at any event—weddings, birthdays, parties, and everything in between. No apps. No sign-ups. Just a link.",
    image: "/sharedmemories.png",
    github: null,
    demo: "https://www.sharedmemories.app/",
    tags: ["Next.js", "React", "TailwindCSS", "Client Project"],
  },
  {
    title: "Emergent Academy (Client Project)",
    description:
      "Emergent Academy is an entrepreneurial ecosystem that supports youth entrepreneurs to conceptualize, build and scale sustainable businesses.",
    image: "/emergent.png",
    github: null,
    demo: "https://academy.dreamfactory.africa/",
    tags: ["Next.js", "React", "TailwindCSS", "Client Project"],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my recent development work
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col pt-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <Button asChild size="sm">
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
