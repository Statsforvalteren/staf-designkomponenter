import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@digdir/designsystemet-react';
import { useToast } from './use-toast';

const meta: Meta = {
  title: 'Components/Toast',
  parameters: {
    docs: {
      description: {
        component: 'Toast notification system for displaying temporary messages to users.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const ToastDemo = () => {
  const { addToast } = useToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
      <h2>Toast Notifications</h2>
      
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          onClick={() => addToast('Operasjonen var vellykket!', { type: 'success' })}
          variant="primary"
        >
          Success Toast
        </Button>
        
        <Button
          onClick={() => addToast('Dette er informasjon du bør vite om.', { type: 'info' })}
          variant="secondary"
        >
          Info Toast
        </Button>
        
        <Button
          onClick={() => addToast('Vær oppmerksom på denne advarselen.', { type: 'warning' })}
          variant="secondary"
        >
          Warning Toast
        </Button>
        
        <Button
          onClick={() => addToast('Det oppstod en feil. Prøv igjen.', { type: 'danger' })}
          variant="tertiary"
        >
          Danger Toast
        </Button>
      </div>

      <h3>Position Variants</h3>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          onClick={() => addToast('Toast på toppen', { position: 'top' })}
          variant="secondary"
        >
          Top Position
        </Button>
        
        <Button
          onClick={() => addToast('Toast i midten', { position: 'center' })}
          variant="secondary"
        >
          Center Position
        </Button>
        
        <Button
          onClick={() => addToast('Toast nederst', { position: 'bottom' })}
          variant="secondary"
        >
          Bottom Position
        </Button>
      </div>

      <h3>Custom Duration</h3>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          onClick={() => addToast('Kort varighet (1s)', { duration: 1000 })}
          variant="secondary"
        >
          Short Duration (1s)
        </Button>
        
        <Button
          onClick={() => addToast('Normal varighet (5s)', { duration: 5000 })}
          variant="secondary"
        >
          Normal Duration (5s)
        </Button>
        
        <Button
          onClick={() => addToast('Lang varighet (10s)', { duration: 10000 })}
          variant="secondary"
        >
          Long Duration (10s)
        </Button>
      </div>

      <h3>Long Message</h3>
      <Button
        onClick={() =>
          addToast(
            'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet.',
            { duration: 8000 }
          )
        }
        variant="secondary"
      >
        Long Message Toast
      </Button>

      <h3>Same ID (Won't Duplicate)</h3>
      <Button
        onClick={() =>
          addToast('Dette varselet vil ikke vises flere ganger', {
            id: 'unique-toast-id',
            duration: 10000
          })
        }
        variant="secondary"
      >
        Click Multiple Times (Same ID)
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};
