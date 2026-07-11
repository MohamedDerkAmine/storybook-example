import Link from 'next/link'
import { Container, Stack, Text, Card, Badge } from '@mohamedd/ui'
import { ThemeToggle } from '@/components/theme-toggle'

const routes = [
  { href: '/actions', label: 'Actions' },
  { href: '/forms', label: 'Forms' },
  { href: '/feedback', label: 'Feedback' },
  { href: '/overlays', label: 'Overlays' },
  { href: '/nav', label: 'Nav & Data' },
]

export default function Page() {
  return (
    <Container size="lg" className="py-16">
      <Stack gap="8">
        <Stack direction="row" justify="between" align="center">
          <Stack gap="1">
            <Text as="h1" size="3xl" weight="semibold">
              @mohamedd/ui playground
            </Text>
            <Text tone="muted">
              A smoke-test surface for the component library. Every route imports through the
              package barrel.
            </Text>
          </Stack>
          <ThemeToggle />
        </Stack>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="group">
              <Card className="transition-colors group-hover:border-[--color-border-strong]">
                <Card.Header>
                  <div className="flex items-center justify-between">
                    <Card.Title>{route.label}</Card.Title>
                    <Badge variant="outline">page</Badge>
                  </div>
                  <Card.Description>Open {route.label.toLowerCase()} surface.</Card.Description>
                </Card.Header>
              </Card>
            </Link>
          ))}
        </div>
      </Stack>
    </Container>
  )
}
