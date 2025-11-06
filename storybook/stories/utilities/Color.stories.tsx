import type { Meta, StoryObj } from '@storybook/react';
import '@Statsforvalteren/designsystemet-theme/dist/staf-design.css';
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

export const ColorBrand1: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-brand1 text-brand1">Brand 1</p>
        </div>
    ),
};

export const ColorBrand2: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-brand2 text-brand2">Brand 2</p>
        </div>
    ),
};

export const ColorBrand3: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-brand3 text-brand3">Brand 3</p>
        </div>
    ),
};

export const ColorAccent: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-accent text-accent">Accent</p>
        </div>
    ),
};

export const ColorNeutral: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-neutral text-neutral">Neutral</p>
        </div>
    ),
};

export const ColorInfo: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-info text-info">Info</p>
        </div>
    ),
};

export const ColorSuccess: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-success text-success">Success</p>
        </div>
    ),
};

export const ColorWarning: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-warning text-warning">Warning</p>
        </div>
    ),
};

export const ColorDanger: StoryObj = {
    render: () => (
        <div className="p-md">
            <p className="bg-danger text-danger">Danger</p>
        </div>
    ),
};
