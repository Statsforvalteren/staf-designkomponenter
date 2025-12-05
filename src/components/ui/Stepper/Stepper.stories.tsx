import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@digdir/designsystemet-react';
import { Stepper } from './Stepper';
import type { StepperStep } from './Stepper.types';

const meta: Meta<typeof Stepper> = {
    title: 'Components/Stepper',
    component: Stepper,
    parameters: {
        docs: {
            description: {
                component: 'A stepper component for guiding users through multi-step processes. Supports both horizontal and vertical layouts with accessible navigation.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

function StepOne() {
    return (
        <div style={{ padding: '1rem' }}>
            <h3>Steg 1: Personopplysninger</h3>
            <p>Fyll inn dine personopplysninger for å komme videre.</p>
        </div>
    );
}

function StepTwo() {
    return (
        <div style={{ padding: '1rem' }}>
            <h3>Steg 2: Kontaktinformasjon</h3>
            <p>Oppgi kontaktinformasjon slik at vi kan nå deg.</p>
        </div>
    );
}

function StepThree() {
    return (
        <div style={{ padding: '1rem' }}>
            <h3>Steg 3: Bekreftelse</h3>
            <p>Gjennomgå og bekreft informasjonen din.</p>
        </div>
    );
}

const steps: StepperStep[] = [
    { title: 'Personopplysninger', component: StepOne },
    { title: 'Kontaktinformasjon', component: StepTwo },
    { title: 'Bekreftelse', component: StepThree },
];

function InteractiveStepperDemo() {
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    function handleNext() {
        if (activeStep < steps.length - 1) {
            if (!completedSteps.includes(activeStep)) {
                setCompletedSteps([...completedSteps, activeStep]);
            }
            setActiveStep(activeStep + 1);
        }
    }

    function handleBack() {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    }

    function handleStepChange(index: number) {
        setActiveStep(index);
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <Stepper
                steps={steps}
                activeStep={activeStep}
                completedSteps={completedSteps}
                onStepChange={handleStepChange}
            />
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Button onClick={handleBack} disabled={activeStep === 0} variant="secondary">
                    Tilbake
                </Button>
                <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                    {activeStep === steps.length - 1 ? 'Fullfør' : 'Neste'}
                </Button>
            </div>
        </div>
    );
}

export const Default: Story = {
    render: () => <InteractiveStepperDemo />,
};

export const Vertical: Story = {
    render: () => {
        const [activeStep, setActiveStep] = useState(0);
        return (
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    completedSteps={[0]}
                    vertical
                    onStepChange={setActiveStep}
                />
            </div>
        );
    },
};

export const WithoutStepIndicators: Story = {
    render: () => {
        const [activeStep, setActiveStep] = useState(1);
        return (
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    showSteps={false}
                />
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <Button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} variant="secondary">
                        Tilbake
                    </Button>
                    <Button onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}>
                        Neste
                    </Button>
                </div>
            </div>
        );
    },
};

export const AllCompleted: Story = {
    args: {
        steps,
        activeStep: 2,
        completedSteps: [0, 1, 2],
    },
};