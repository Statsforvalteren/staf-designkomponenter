import type { ComponentType } from 'react';

export interface StepperStep {
	title: string;
	component: ComponentType<any>;
	props?: Record<string, unknown>;
}

export interface StepperProps {
	steps: StepperStep[];
	activeStep: number;
	completedSteps?: number[];
	vertical?: boolean;
	showSteps?: boolean;
	onStepChange?: (index: number) => void;
}
