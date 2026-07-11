import { Container, Stack, Text, Button, IconButton } from '@mohamedd/ui'

export default function ActionsPage() {
  return (
    <Container size="md" className="py-16">
      <Stack gap="6">
        <Text as="h1" size="2xl" weight="semibold">
          Actions
        </Text>

        <Stack gap="3">
          <Text weight="medium">Variants</Text>
          <div className="flex flex-wrap gap-2">
            <Button>Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </Stack>

        <Stack gap="3">
          <Text weight="medium">Sizes</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="md">md</Button>
            <Button size="lg">lg</Button>
            <Button size="xl">xl</Button>
          </div>
        </Stack>

        <Stack gap="3">
          <Text weight="medium">States</Text>
          <div className="flex flex-wrap gap-2">
            <Button loading>Saving…</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Stack>

        <Stack gap="3">
          <Text weight="medium">IconButton</Text>
          <div className="flex flex-wrap gap-2">
            <IconButton aria-label="Close" variant="outline">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </IconButton>
            <IconButton aria-label="Add" variant="solid">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </IconButton>
          </div>
        </Stack>
      </Stack>
    </Container>
  )
}
