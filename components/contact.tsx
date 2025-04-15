"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MapPin, Mail,  Youtube } from "lucide-react"
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to collaborate? Let&apos;s connect!
            </p>
          </div>
        </motion.div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Cape Town, South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">contact@princemawonde.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="font-medium mb-3">Connect with me</p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild variant="outline" size="icon">
                          <Link
                            href="https://github.com/de-mawo"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="icon">
                          <Link
                            href="https://x.com/de_mawo"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                          >
                            <BsTwitterX className="h-5 w-5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="icon">
                          <Link
                            href="https://www.linkedin.com/in/prince-mawonde-98884a96/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="icon">
                          <Link
                            href="https://www.youtube.com/@demawocodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                          >
                            <Youtube className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="font-medium">Direct Message</p>
                      <div className="flex gap-3">
                        <Button asChild>
                          <Link href="https://x.com/de_mawo" target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className="mr-2 h-4 w-4" />
                            DM on X
                          </Link>
                        </Button>
                        <Button asChild variant="secondary">
                          <Link
                            href="https://www.linkedin.com/in/prince-mawonde-98884a96/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="mr-2 h-4 w-4" />
                            Connect on LinkedIn
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
