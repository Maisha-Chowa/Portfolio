import FloatingNavbar from '@/components/FloatingNavbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const profile = {
  name: 'Maisha Maliha Chowa',
  role: 'SQA Automation Engineer',
  headline: 'QA Automation & AI Testing Specialist',
  location: 'Dhaka, Bangladesh',
  email: 'maisha.chowa@gmail.com',
  phone: '+8801873073300',
  summary:
    'SQA Automation Engineer with hands-on experience in UI/API automation, CI/CD integration, and performance testing for AI-powered products. Skilled in Playwright (Python), Selenium, and test strategy design.',
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

const experience = [
  {
    title: 'SQA Automation Engineer',
    company: 'Koolio.ai',
    timeline: 'Apr 2024 – Present · Remote',
    bullets: [
      'Engineered UI and API automation suites in Playwright (Python), reducing flaky tests and improving coverage.',
      'Built detailed test cases from PRDs and ensured end-to-end feature validation.',
      'Monitored GCP logs and PostgreSQL to troubleshoot performance bottlenecks.',
      'Integrated automated suites into GitHub Actions for continuous regression testing.',
    ],
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

const awards = [
  {
    title: 'QA Process Improvement Award',
    detail: 'Recognized for reducing regression time by migrating automation suites to Playwright.',
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

const certifications = [
  'ISTQB Foundation (in progress)',
  'Postman API Fundamentals',
  'GitHub Actions CI/CD',
]

const languages = ['Bangla (Native)', 'English (Fluent)', 'Hindi (Fluent)']

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-12">
        <section id="home" className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <Badge variant="secondary">QA Automation & AI Testing</Badge>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Hi, I'm</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{profile.name}</h1>
              <p className="text-lg text-muted-foreground">{profile.role}</p>
              <p className="text-base text-muted-foreground">{profile.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href={profile.resumeUrl}>Download Resume</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>{profile.location}</span>
              <span>•</span>
              <span>{profile.email}</span>
              <span>•</span>
              <span>{profile.phone}</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{profile.headline}</CardTitle>
              <CardDescription>Focused on test reliability, CI speed, and product confidence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-lg border px-4 py-3">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-lg font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.links.map((link) => (
                  <Button key={link.label} asChild variant="secondary">
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-[1px] w-10 bg-border" />
          <span>Scroll down</span>
        </div>

        <Separator className="my-12" />

        <section id="about" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">About Me</h2>
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
            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
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
            <h2 className="text-2xl font-semibold">Portfolio</h2>
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
          <h2 className="text-2xl font-semibold">Qualification</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Academic background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
            <Card>
              <CardHeader>
                <CardTitle>Work</CardTitle>
                <CardDescription>Recent roles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {experience.map((role) => (
                  <div key={role.company} className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{role.title}</p>
                    <p>{role.company}</p>
                    <p>{role.timeline}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Awards</CardTitle>
                <CardDescription>Recognition highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {awards.map((award) => (
                  <p key={award.title}>
                    <span className="font-medium text-foreground">{award.title}</span> — {award.detail}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>Professional learning</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="outline">
                    {cert}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="contact" className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
                <CardDescription>Open for QA automation roles and collaborations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>Email: {profile.email}</p>
                <p>Phone: {profile.phone}</p>
                <p>Location: {profile.location}</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <CardDescription>Fill in the form and I'll reply quickly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <textarea
                  className="min-h-[140px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Message"
                />
                <Button type="button">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React, Vite, Tailwind CSS, and shadcn/ui.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
