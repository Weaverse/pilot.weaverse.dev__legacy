import {
  type HydrogenComponentProps,
  type HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {clsx} from 'clsx';
import type {CSSProperties} from 'react';
import { forwardRef} from 'react';
import type {Alignment} from '~/lib/type';

type DescriptionProps = HydrogenComponentProps & {
  content: string;
  as?: 'p' | 'div';
  alignment?: Alignment;
  className?: string;
};

let alignmentClasses: Record<Alignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

let Description = forwardRef<
  HTMLParagraphElement | HTMLDivElement,
  DescriptionProps
>((props, ref) => {
  let {as: Tag = 'p', content, alignment, className, ...rest} = props;
  let style = {} as CSSProperties;
  return (
    <Tag
      ref={ref}
      {...rest}
      style={style}
      className={clsx(alignmentClasses[alignment!], className)}
    >
      {content}
    </Tag>
  );
});

Description.defaultProps = {
  as: 'p',
  content:
    "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
  alignment: 'center',
};

export default Description;

export let schema: HydrogenComponentSchema = {
  type: 'description',
  title: 'Description',
  inspector: [
    {
      group: 'Description',
      inputs: [
        {
          type: 'select',
          name: 'as',
          label: 'Tag name',
          configs: {
            options: [
              {value: 'p', label: 'Paragraph'},
              {value: 'div', label: 'Div'},
            ],
          },
          defaultValue: 'p',
        },
        {
          type: 'textarea',
          name: 'content',
          label: 'Content',
          defaultValue:
            "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
          placeholder:
            "Pair large text with an image or full-width video to showcase your brand's lifestyle to describe and showcase an important detail of your products that you can tag on your image.",
        },
        {
          type: 'toggle-group',
          name: 'alignment',
          label: 'Alignment',
          configs: {
            options: [
              {value: 'left', label: 'Left', icon: 'AlignLeft'},
              {value: 'center', label: 'Center', icon: 'AlignCenterHorizontal'},
              {value: 'right', label: 'Right', icon: 'AlignRight'},
            ],
          },
          defaultValue: 'center',
        },
      ],
    },
  ],
  toolbar: ['general-settings', ['duplicate', 'delete']],
};
