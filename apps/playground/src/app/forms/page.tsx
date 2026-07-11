'use client'

import { Container, Stack, Text, Field, Input, Textarea, Checkbox, Switch, Select, Button } from '@mohamedd/ui'

export default function FormsPage() {
  return (
    <Container size="sm" className="py-16">
      <Stack gap="6">
        <Text as="h1" size="2xl" weight="semibold">
          Forms
        </Text>

        <Field>
          <Field.Label>Workspace name</Field.Label>
          <Field.Control>
            <Input placeholder="Acme Inc." />
          </Field.Control>
          <Field.Description>Shown at the top of every page.</Field.Description>
        </Field>

        <Field>
          <Field.Label>Description</Field.Label>
          <Field.Control>
            <Textarea placeholder="What does this workspace do?" />
          </Field.Control>
        </Field>

        <Field>
          <Field.Label>Region</Field.Label>
          <Field.Control>
            <Select>
              <Select.Trigger>
                <Select.Value placeholder="Pick a region" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="us-east-1">us-east-1</Select.Item>
                <Select.Item value="eu-west-1">eu-west-1</Select.Item>
                <Select.Item value="ap-south-1">ap-south-1</Select.Item>
              </Select.Content>
            </Select>
          </Field.Control>
        </Field>

        <label className="flex items-center gap-2 text-sm">
          <Checkbox defaultChecked /> Send weekly digest
        </label>

        <label className="flex items-center gap-2 text-sm">
          <Switch defaultChecked /> Enable telemetry
        </label>

        <div>
          <Button>Save changes</Button>
        </div>
      </Stack>
    </Container>
  )
}
