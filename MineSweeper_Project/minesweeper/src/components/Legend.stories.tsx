import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LegendComponent } from './Legend'

const Legend: Meta = {
  title: 'Top/Legend',
  component: LegendComponent
}

const Template: Story = (args) => <LegendComponent {...args} />

export const GameLegend = Template.bind({})

export default Legend
