import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import FloatingNavbar from '@/components/FloatingNavbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, Mail, Phone, SendHorizonal } from 'lucide-react'
import avatarImg from '@/assets/avatar.png'

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const profile = {
  name: 'Maisha Maliha Chowa',
  role: 'SQA Automation Engineer',
  headline: 'QA Automation & AI Testing Specialist',
  location: 'Dhaka, Bangladesh',
  email: 'maisha.chowa@gmail.com',
  phone: '+8801873073300',
  summary:
    'With 2+ years of experience ensuring quality for AI-driven products through Manual testing, UI/API automation, CI/CD pipelines, and performance testing using Playwright (Python), Selenium, Postman and Locust.',
  resumeUrl: '#',
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  stats: [
    { label: 'Years experience', value: '2+' },
    { label: 'Automation suites', value: '12+' },
    { label: 'Platforms tested', value: '6+' },
  ],
}

const aboutHighlights = [
  'Built and maintained UI/API automation suites in Playwright (Python) with reliable CI/CD.',
  'Migrated Selenium suites to Playwright to reduce flakiness and speed up execution.',
  'Validated AI-driven audio workflows with deep API, logging, and database checks.',
]

const skillGroups = [
  {
    title: 'Testing & QA',
    items: ['Manual Testing', 'Regression', 'E2E', 'Cross-browser', 'Mobile'],
  },
  {
    title: 'Automation',
    items: ['Playwright (Python)', 'Selenium WebDriver', 'Appium', 'PyTest'],
  },
  {
    title: 'API & Tools',
    items: ['Postman', 'REST Assured', 'Swagger', 'API mocking'],
  },
  {
    title: 'Performance',
    items: ['Locust', 'JMeter'],
  },
  {
    title: 'DevOps & Tools',
    items: ['GitHub Actions', 'Git', 'Docker', 'Jira', 'GitHub Projects'],
  },
  {
    title: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript'],
  },
]

const education = [
  {
    title: 'BSc in Computer Science & Engineering',
    org: 'Mawlana Bhashani Science & Technology University',
    timeline: '2019 – 2024',
    detail: 'CGPA: 3.59',
  },
]

const projects = [
  {
    title: 'Playwright Automation Framework',
    description: 'Modular framework for UI/API automation with CI integration and reporting.',
    links: [
      { label: 'View Code', href: '#' },
    ],
  },
  {
    title: 'AI Audio Platform QA',
    description: 'Full test strategy for an AI-powered audio editor including load and API testing.',
    links: [
      { label: 'Case Study', href: '#' },
    ],
  },
  {
    title: 'API Monitoring Suite',
    description: 'API regression suite with Postman collections and environment-driven checks.',
    links: [
      { label: 'View Tool', href: '#' },
    ],
  },
  {
    title: 'Performance Benchmarking',
    description: 'Locust-based load tests to define concurrency thresholds and bottlenecks.',
    links: [
      { label: 'Read More', href: '#' },
    ],
  },
]

function App() {
  const formRef = useRef(null)
  const [sendStatus, setSendStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSendStatus('sending')
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setSendStatus('sent')
        formRef.current.reset()
        setTimeout(() => setSendStatus('idle'), 4000)
      })
      .catch(() => {
        setSendStatus('error')
        setTimeout(() => setSendStatus('idle'), 4000)
      })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24">
        <section id="home" className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
          <div className="hidden flex-col items-center gap-6 md:flex">
            <a
              href={profile.links.find((l) => l.label === 'LinkedIn')?.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary transition-opacity hover:opacity-80"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={profile.links.find((l) => l.label === 'GitHub')?.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary transition-opacity hover:opacity-80"
            >
              <Github size={28} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-primary transition-opacity hover:opacity-80"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="shrink-0 md:order-last">
            <img
              src={avatarImg}
              alt={profile.name}
              className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Hi, I'm</p>
              <h1 className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">{profile.name}</h1>
              <p className="text-lg text-muted-foreground">{profile.role}</p>
              <p className="text-base text-muted-foreground">{profile.summary}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href={profile.resumeUrl}>Download Resume</a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 md:hidden">
              <a
                href={profile.links.find((l) => l.label === 'LinkedIn')?.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary transition-opacity hover:opacity-80"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={profile.links.find((l) => l.label === 'GitHub')?.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary transition-opacity hover:opacity-80"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-primary transition-opacity hover:opacity-80"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        <div className="md:px-[4.25rem]">
          <Separator className="my-12" />

          <section id="about" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-primary">About Me</h2>
              <p className="text-muted-foreground">
                {profile.summary} I enjoy partnering with product teams to ship stable, high-quality releases and turning
                manual checks into scalable automation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {aboutHighlights.map((item) => (
                <Card key={item}>
                  <CardContent className="py-5 text-sm text-muted-foreground">{item}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section id="skills" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-primary">Skills & Expertise</h2>
              <Badge variant="outline">Technical Arsenal</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <Card key={group.title}>
                  <CardHeader>
                    <CardTitle>{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section id="portfolio" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-primary">Portfolio</h2>
              <Badge variant="outline">Recent Projects</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <Button key={link.label} asChild variant="ghost">
                        <a href={link.href}>{link.label}</a>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <section id="qualification" className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Academic Background</h2>
            <Card>
              <CardContent className="space-y-4 pt-6">
                {education.map((item) => (
                  <div key={item.title} className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p>{item.org}</p>
                    <p>{item.timeline}</p>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          <section id="contact" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-primary">Contact Me</h2>
              <p className="mt-2 text-muted-foreground">Get in Touch</p>
            </div>

            <div className="grid items-start gap-10 md:grid-cols-2">
              <div className="space-y-8 pt-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">{profile.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">{profile.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Linkedin size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <a
                      href={profile.links.find((l) => l.label === 'LinkedIn')?.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      @maisha-chowa
                    </a>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      name="from_name"
                      required
                      className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Name"
                      type="text"
                    />
                    <input
                      name="from_email"
                      required
                      className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Email"
                      type="email"
                    />
                    <textarea
                      name="message"
                      required
                      className="min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Message"
                    />
                    <Button type="submit" className="gap-2" disabled={sendStatus === 'sending'}>
                      {sendStatus === 'sending' ? 'Sending...' : 'Send Message'} <SendHorizonal size={16} />
                    </Button>
                    {sendStatus === 'sent' && (
                      <p className="text-sm text-green-600">Message sent successfully!</p>
                    )}
                    {sendStatus === 'error' && (
                      <p className="text-sm text-red-600">Failed to send. Please try again.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-primary py-8">
        <p className="text-center text-sm text-primary-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
