import type { Meta, StoryObj } from '@storybook/react';
import '@digdir/designsystemet-css';
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
        <div className="p-md bg-brand1">
            <p className="text-brand1">Brand 1</p>
        </div>
    ),
};

export const ColorBrand2: StoryObj = {
    render: () => (
        <div className="p-md bg-brand2">
            <p className="text-brand2">Brand 2</p>
        </div>
    ),
};

export const ColorBrand3: StoryObj = {
    render: () => (
        <div className="p-md bg-brand3">
            <p className="text-brand3">Brand 3</p>
        </div>
    ),
};

export const ColorAccent: StoryObj = {
    render: () => (
        <div className="p-md bg-accent">
            <p className="text-accent">Accent</p>
        </div>
    ),
};

export const ColorNeutral: StoryObj = {
    render: () => (
        <div className="p-md bg-neutral">
            <p className="text-neutral">Neutral</p>
        </div>
    ),
};

export const ColorInfo: StoryObj = {
    render: () => (
        <div className="p-md bg-info">
            <p className="text-info">Info</p>
        </div>
    ),
};

export const ColorSuccess: StoryObj = {
    render: () => (
        <div className="p-md bg-success">
            <p className="text-success">Success</p>
        </div>
    ),
};

export const ColorWarning: StoryObj = {
    render: () => (
        <div className="p-md bg-warning">
            <p className="text-warning">Warning</p>
        </div>
    ),
};

export const ColorDanger: StoryObj = {
    render: () => (
        <div className="p-md bg-danger">
            <p className="text-danger">Danger</p>
        </div>
    ),
};
