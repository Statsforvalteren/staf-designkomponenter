import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typography tokens and utilities available in the design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const TextAlignment: Story = {
  render: () => (
    <div>
      <p className="text-left bg-muted p-sm mb-sm">Left aligned text</p>
      <p className="text-center bg-muted p-sm mb-sm">Center aligned text</p>
      <p className="text-right bg-muted p-sm mb-sm">Right aligned text</p>
      <p className="text-justify bg-muted p-sm">Justified text creates even edges on both sides by adjusting word spacing. This can improve readability for longer paragraphs.</p>
    </div>
  ),
};

export const FontStyles: Story = {
  render: () => (
    <div>
      <p className="text-xs mb-sm">Extra small text (text-xs)</p>
      <p className="text-sm mb-sm">Small text (text-sm)</p>
      <p className="text-md mb-sm">Medium text (text-md)</p>
      <p className="text-lg mb-sm">Large text (text-lg)</p>
      <p className="text-xl mb-sm">Extra large text (text-xl)</p>
      <hr className="my-md" />
      <p className="font-normal mb-sm">Normal weight text (font-normal)</p>
      <p className="font-bold mb-sm">Bold weight text (font-bold)</p>
    </div>
  ),
};

export const LineHeight: Story = {
  render: () => (
    <div>
      <div className="bg-muted p-md mb-md">
        <h4 className="leading-tight mb-sm">Tight Line Height</h4>
        <p className="leading-tight">This paragraph uses tight line height for a more compact appearance. It's ideal for headings or short descriptions where space efficiency is important.</p>
      </div>

      <div className="bg-muted p-md mb-md">
        <h4 className="leading-normal mb-sm">Normal Line Height</h4>
        <p className="leading-normal">This paragraph uses normal line height, which is the default and provides good readability for most body text content.</p>
      </div>

      <div className="bg-muted p-md">
        <h4 className="leading-relaxed mb-sm">Relaxed Line Height</h4>
        <p className="leading-relaxed">This paragraph uses relaxed line height for improved readability, especially beneficial for longer text blocks or content that needs more breathing room.</p>
      </div>
    </div>
  ),
};

export const TextTransformation: Story = {
  render: () => (
    <div>
      <p className="text-uppercase mb-sm bg-muted p-sm">uppercase text</p>
      <p className="text-lowercase mb-sm bg-muted p-sm">LOWERCASE TEXT</p>
      <p className="text-capitalize mb-sm bg-muted p-sm">capitalize text</p>
    </div>
  ),
};

export const TextUtilities: Story = {
  render: () => (
    <div>
      <div className="bg-muted p-md mb-md">
        <h4 className="mb-sm">Text Truncate</h4>
        <p className="text-truncate" style={{width: '200px'}}>
          This is a very long text that will be truncated with ellipsis when it exceeds the container width.
        </p>
      </div>

      <div className="bg-muted p-md">
        <h4 className="mb-sm">Text Break</h4>
        <p className="text-break" style={{width: '150px'}}>
          Thisisaverylongwordthatwillbreakattheendwithoutbreakingthelayout.
        </p>
      </div>
    </div>
  ),
};

export const ArticleLayout: Story = {
  render: () => (
    <article>
      <h1 className="text-xl font-bold mb-lg">Article Title</h1>
      <p className="text-sm text-muted mb-md">By Author Name • Published on Date</p>
      <p className="leading-relaxed mb-lg">
        This is the main content of the article. It uses relaxed line height for optimal readability.
        Typography plays a crucial role in user experience and accessibility.
      </p>
      <h2 className="text-lg font-bold mb-md">Section Heading</h2>
      <p className="leading-normal mb-md">
        Section content with normal line height. The typography system provides consistent
        sizing and spacing throughout the application.
      </p>
      <blockquote className="text-md font-normal text-center p-lg bg-muted mb-lg">
        "Good typography is invisible. It's only when it's bad that you notice it."
      </blockquote>
    </article>
  ),
};