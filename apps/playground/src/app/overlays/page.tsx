'use client'

import {
  Container,
  Stack,
  Text,
  Button,
  Dialog,
  Popover,
  Tooltip,
  TooltipProvider,
  DropdownMenu,
  Input,
  Field,
} from '@mohamedd/ui'

export default function OverlaysPage() {
  return (
    <TooltipProvider delayDuration={200}>
      <Container size="md" className="py-16">
        <Stack gap="6">
          <Text as="h1" size="2xl" weight="semibold">
            Overlays
          </Text>

          <div className="flex flex-wrap gap-2">
            <Dialog>
              <Dialog.Trigger asChild>
                <Button>Open dialog</Button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Rename workspace</Dialog.Title>
                  <Dialog.Description>Existing links keep working.</Dialog.Description>
                </Dialog.Header>
                <Dialog.Body>
                  <Field>
                    <Field.Label>Name</Field.Label>
                    <Field.Control>
                      <Input defaultValue="Acme Inc." />
                    </Field.Control>
                  </Field>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.Close asChild>
                    <Button variant="outline">Cancel</Button>
                  </Dialog.Close>
                  <Button>Save</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>

            <Popover>
              <Popover.Trigger asChild>
                <Button variant="outline">Popover</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Text size="sm">Anchored content that keeps focus trap and dismiss on esc.</Text>
              </Popover.Content>
            </Popover>

            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline">Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Keyboard shortcut: ⌘K</Tooltip.Content>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="outline">Menu</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="start">
                <DropdownMenu.Label>Account</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Profile</DropdownMenu.Item>
                <DropdownMenu.Item>Billing</DropdownMenu.Item>
                <DropdownMenu.Item disabled>Settings</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Log out</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </Stack>
      </Container>
    </TooltipProvider>
  )
}
