import type { Meta, StoryObj } from '@storybook/react'
import { NavigationMenu } from './navigation-menu'
import { Text } from './text'

const meta = {
  title: 'Nav/NavigationMenu',
  component: NavigationMenu as unknown as React.ComponentType,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-[320px] gap-3 p-2">
              {['Analytics', 'Deploys', 'Preview channels'].map((label) => (
                <li key={label}>
                  <NavigationMenu.Link
                    className="block rounded-md p-2 hover:bg-[--color-surface-hover]"
                    href="#"
                  >
                    <Text weight="medium" size="sm">
                      {label}
                    </Text>
                    <Text tone="muted" size="xs">
                      Description of {label.toLowerCase()}.
                    </Text>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={NavigationMenu.triggerStyle()}
            href="#"
          >
            Pricing
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className={NavigationMenu.triggerStyle()} href="#">
            Docs
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
}
