import type { Meta, StoryObj } from '@storybook/react';
import "../../../src/utilities/color.css";

const meta: Meta = {
    title: 'Utilities/Color',
    parameters: {
        docs: {
            description: {
                component: 'Color utilities for setting background and text colors.',
            },
        },
    },
};

export default meta;

export const Brand1Colors: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-brand1 text-brand1">Brand1</p>
        </div>
    ),
};
