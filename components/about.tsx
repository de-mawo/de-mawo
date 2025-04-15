"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A skilled and experienced software engineer with a background in network engineering
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Background</h3>
                <p className="text-muted-foreground">
                  I have a strong proficiency in both frontend and backend development, utilizing a variety of
                  technologies and frameworks to create scalable and efficient web applications. With a keen eye for
                  detail and a commitment to delivering high-quality software solutions, I excel in collaborating with
                  cross-functional teams to meet project deadlines and exceed client expectations.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Software Engineering (2023) - Holberton School/ALX</li>
                    <li>Network Engineering (2019)</li>
                    <li>B: TECH Project Management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Professional Profile</h3>
                <p className="text-muted-foreground">
                  I have a proactive approach to problem-solving, coupled with excellent communication skills. I am also
                  passionate about sharing my knowledge and expertise, as evidenced by my YouTube channel where I
                  explain code and my willingness to present and showcase my logic.
                </p>
                <p className="mt-4 text-muted-foreground">
                  I combine my technical expertise with entrepreneurial thinking to deliver innovative solutions that
                  address real-world problems. My experience spans from full-stack development to project management,
                  allowing me to understand both the technical and business aspects of software development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
