'use client';

import styles from './Stepper.module.css';
import type { StepperProps, StepperStep } from './Stepper.types';

export function Stepper({
	steps,
	activeStep,
	completedSteps = [],
	vertical = false,
	showSteps = true,
	onStepChange,
}: StepperProps) {
	const ContainerClass = vertical
		? styles.stepperContainerInline
		: styles.stepperContainer;
	const StepsClass = vertical ? styles.stepsVertical : styles.steps;
	const ContentClass = vertical ? styles.contentInline : styles.content;

	const handleActivate = (index: number) => {
		onStepChange?.(index);
	};

	const ActiveComp = steps[activeStep]?.component as
		| StepperStep['component']
		| undefined;
	const ActiveProps = steps[activeStep]?.props ?? {};

	return (
		<div className={ContainerClass}>
			{showSteps && (
				<div className={StepsClass} role="tablist">
					{steps.map((step, index) => {
						const isActive = index === activeStep;
						const isCompleted = completedSteps.includes(index);
						return (
							<div
								key={index}
								className={styles.step}
								role="tab"
								aria-selected={isActive}
								aria-controls={`panel-${index}`}
								tabIndex={0}
								onClick={() => handleActivate(index)}
								onKeyUp={(e) => {
									if (e.key === 'Enter') handleActivate(index);
								}}
							>
								<div
									className={`${styles.iconContainer} ${isCompleted ? styles.completed : isActive ? styles.active : ''}`}
								>
									{isCompleted ? (
										<span aria-hidden>✓</span>
									) : (
										<span
											className={`${styles.stepNumber} ${isActive ? styles.active : ''}`}
										>
											{index + 1}
										</span>
									)}
								</div>
								<div className={styles.stepTitle} id={`step-title-${index}`}>
									{step.title}
								</div>
								{index < steps.length - 1 && !vertical && (
									<div className={styles.line} />
								)}
								{index < steps.length - 1 && vertical && (
									<div className={styles.lineVertical} />
								)}
							</div>
						);
					})}
				</div>
			)}

			<div className={ContentClass}>
				{ActiveComp && (
					<div
						role="tabpanel"
						id={`panel-${activeStep}`}
						aria-labelledby={`step-title-${activeStep}`}
					>
						<ActiveComp {...ActiveProps} />
					</div>
				)}
			</div>
		</div>
	);
}
