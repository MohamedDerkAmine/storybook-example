'use client'

import { Container, Stack, Text, Tabs, Avatar, Card, Badge, Button } from '@mohamedd/ui'

export default function NavPage() {
  return (
    <Container size="md" className="py-16">
      <Stack gap="6">
        <Text as="h1" size="2xl" weight="semibold">
          Nav &amp; Data
        </Text>

        <Tabs defaultValue="overview">
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="team">Team</Tabs.Trigger>
            <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">
            <Card>
              <Card.Header>
                <div className="flex items-center justify-between">
                  <Card.Title>Production</Card.Title>
                  <Badge variant="success">Live</Badge>
                </div>
                <Card.Description>Deployed 4 minutes ago from main.</Card.Description>
              </Card.Header>
              <Card.Body>
                <Text tone="muted" size="sm">
                  Traffic is nominal. Last 100 requests averaged 214 ms.
                </Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline" size="sm">
                  View logs
                </Button>
                <Button size="sm">Promote</Button>
              </Card.Footer>
            </Card>
          </Tabs.Content>
          <Tabs.Content value="team">
            <div className="flex items-center gap-3">
              {['MD', 'AL', 'GT'].map((initials) => (
                <Avatar key={initials}>
                  <Avatar.Fallback>{initials}</Avatar.Fallback>
                </Avatar>
              ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="billing">
            <Text tone="muted">Billing surface — plug your logic in here.</Text>
          </Tabs.Content>
        </Tabs>
      </Stack>
    </Container>
  )
}
