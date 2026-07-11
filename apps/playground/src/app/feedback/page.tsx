'use client'

import {
  Container,
  Stack,
  Text,
  Alert,
  Badge,
  Spinner,
  Skeleton,
  Button,
  Toaster,
  toast,
} from '@mohamedd/ui'

export default function FeedbackPage() {
  return (
    <Container size="md" className="py-16">
      <Stack gap="6">
        <Text as="h1" size="2xl" weight="semibold">
          Feedback
        </Text>

        <Stack gap="3">
          <Alert tone="info" title="Heads up">
            Deploys temporarily route through the fallback region.
          </Alert>
          <Alert tone="success" title="Deployed">
            Version 1.4.0 is live in production.
          </Alert>
          <Alert tone="warning" title="Quota">
            You are using 82% of your monthly quota.
          </Alert>
          <Alert tone="danger" title="Failed">
            The build failed. See logs for details.
          </Alert>
        </Stack>

        <Stack gap="3">
          <Text weight="medium">Badges</Text>
          <div className="flex flex-wrap gap-2">
            <Badge>neutral</Badge>
            <Badge variant="accent">accent</Badge>
            <Badge variant="success">success</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="danger">danger</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge variant="solid">solid</Badge>
          </div>
        </Stack>

        <Stack gap="3">
          <Text weight="medium">Spinner + Skeleton</Text>
          <div className="flex items-center gap-4">
            <Spinner />
            <div className="flex w-[240px] items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          </div>
        </Stack>

        <Stack gap="3">
          <Text weight="medium">Toasts</Text>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast({ title: 'Saved' })}>Default</Button>
            <Button variant="soft" onClick={() => toast.success('Deploy succeeded')}>
              Success
            </Button>
            <Button variant="outline" onClick={() => toast.warning('Quota at 82%')}>
              Warning
            </Button>
            <Button variant="destructive" onClick={() => toast.error('Deploy failed')}>
              Error
            </Button>
          </div>
        </Stack>

        <Toaster />
      </Stack>
    </Container>
  )
}
