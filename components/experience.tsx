"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Web Developer (Part-time)",
    company: "inOgital",
    period: "2021 - Present",
    website: "https://inogital.com",
    description: [
      "Engaged in a multifaceted array of responsibilities as a full stack developer at Inogital.",
      "Spanned UI/UX design, backend and frontend development, server configuration, software development, and deployment.",
      "Fulfilled the role of a product owner, translating user stories into tangible features within the web application.",
      "Collaborated closely with diverse teams to ensure alignment with end-user needs and deliver tailored products.",
      "Actively contributed to continuous improvement of development processes and technologies, striving for innovation and excellence.",
    ],
  },
  {
    title: "Systems Development Manager",
    company: "Dream Factory Foundation",
    period: "2022 - 2023",
    description: [
      "Translated Standard Operating Procedures (SOPs) into practical products and tools vital for organizational operations.",
      "Spearheaded project management efforts across diverse projects, ensuring timely delivery and adherence to quality standards.",
      "Collaborated closely with cross-functional teams to develop custom software solutions, utilizing coding expertise and no-code tools.",
      "Oversaw various tech-related projects, offering guidance on productivity-enhancing tools and pre-built applications.",
      "Managed a mix of technical and managerial tasks, including overseeing web application development, code writing and reviewing, debugging, and ensuring scalability and maintainability.",
      "Created and managed project schedules, assigned tasks, tracked progress, and communicated with stakeholders to meet project deadlines and requirements.",
      "Conducted comprehensive training sessions to equip staff with necessary technological skills and streamline processes.",
    ],
  },
  {
    title: "Product Owner",
    company: "Pimp My Book Pty Ltd",
    period: "2019",
    description: [
      "Defined product requirements and created user stories for the Stock Management System.",
      "Collaborated closely with the development team to ensure timely delivery and adherence to product requirements.",
      "Conducted user acceptance testing and provided constructive feedback to the development team.",
      "Managed the product backlog and prioritized tasks based on business needs and user feedback.",
      "Worked closely with the operations team to integrate the Stock Management System with other business systems.",
      "Analyzed data and provided insights to the management team to support decision-making regarding the Stock Management System.",
      "Developed and delivered training materials for end-users on how to utilize the Stock Management System.",
      "Coordinated deployment of updates across all branches to maintain compatibility with the latest technologies and ensure system currency.",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-20 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and roles
            </p>
          </div>
        </motion.div>

        <div className="space-y-8 mt-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription>
                        {experience.company} | {experience.period}
                        {experience.website && (
                          <span>
                            {" "}
                            |{" "}
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {experience.website}
                            </a>
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
