import type {
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import { forwardRef } from 'react';

interface VideoButtonProps extends HydrogenComponentProps {
  buttonLabel: string;
  buttonLink: string;
  enableNewtab: boolean;
}

let VideoButtonItem = forwardRef<HTMLDivElement, VideoButtonProps>((props, ref) => {
  let {buttonLabel, buttonLink, enableNewtab, ...rest} = props;
  return (
    <div ref={ref} {...rest} className='mt-3'>
      <a href={buttonLink} target={enableNewtab ? '_blank' : ''} className='bg-gray-900 text-white py-3 px-4 rounded'>{buttonLabel}</a>
    </div>
  );
});

export default VideoButtonItem;

export let schema: HydrogenComponentSchema = {
  type: 'video-button--item',
  title: 'Button item',
  limit: 1,
  inspector: [
    {
      group: 'Button',
      inputs: [
        {
          type: 'text',
          name: 'buttonLabel',
          label: 'Button label',
          defaultValue: 'Button',
        },
        {
          type: 'text',
          name: 'buttonLink',
          label: 'Button link',
          placeholder: 'https://',
        },
        {
          type: 'switch',
          name: 'enableNewtab',
          label: 'Open in new tab',
          defaultValue: true,
        },
        {
          type: 'toggle-group',
          label: 'Button style',
          name: 'buttonStyle',
          configs: {
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ],
          },
          defaultValue: '1',
        },
      ],
    },
  ],
}
