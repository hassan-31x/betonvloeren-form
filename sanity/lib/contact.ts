/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'CompanyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'CompanyTagline',
      title: 'Company Tagline',
      type: 'string',
    },
    {
      name: 'CompanyDescription',
      title: 'Company Description',
      type: 'text',
    },
    {
      name: 'contentBlock',
      title: 'Content Block',
      type: 'object',
      fields: [
        {
          name: 'contentBlockHeading',
          title: 'Content Block Heading',
          type: 'string',
        },
        {
          name: 'contentBlockDescription1',
          title: 'Content Block Description 1',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'contentBlockImage',
          title: 'Content Block Image',
          type: 'image',
        },
        {
          name: 'contentBlockDescription2',
          title: 'Content Block Description 2',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    // Add other fields as needed
  ],
};
