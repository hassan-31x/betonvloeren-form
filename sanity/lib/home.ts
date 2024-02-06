/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'home',
    title: 'Home Page',
    type: 'document',
    fields: [
      {
        name: 'mainHeading',
        title: '3 - Main Heading',
        type: 'string',
      },
      {
        name: 'bgImage',
        title: '6 - Background Image',
        type: 'image',
      },
      {
        name: 'logo',
        title: '4 - Logo',
        type: 'image',
      },
      {
        name: 'introText',
        title: '7 - Intro Text',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'buttons',
        title: '9 - Top 3 Buttons',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image Variant',
                type: 'image',
              },
              {
                name: 'slug',
                title: 'Slug Variant',
                description: 'Please enter the exact slug used on the variant',
                type: 'string',
              },
              {
                name: 'title',
                title: 'Title Variant',
                type: 'string',
              },
              {
                name: 'tag',
                title: 'Tag Variant',
                type: 'string',
              },
            ],
          },
        ],
      },
      {
        name: 'sideImage',
        title: '11 - Side Image',
        type: 'image',
      },
      {
        name: 'boxText',
        title: '12 - Box Text',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'categoryHeading',
        title: ' 14 - Category Heading',
        type: 'string',
      },
      {
        name: 'categoryIntro',
        title: ' 15 - CategoryIntro',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'variantsIntroHeading',
        title: '17 - Short Variant Intro Heading',
        type: 'text',
      },
      {
        name: 'shortVariationsIntro',
        title: '18-  Short Variations Intro',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'domainName',
        title: '21 - Domain Name',
        type: 'string',
      },
      {
        name: 'advantageHeading',
        title: 'Advantages Heading',
        type: 'string',
      },
      {
        name: 'advantageIntro',
        title: 'Advantages Intro Text',
        type: 'string',
      },
      {
        name: 'advantagesBlocks',
        title: 'Advantages Blocks',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'advantage1Image',
                title: 'Advantage 1 Image',
                type: 'image',
              },
              {
                name: 'advantage1Heading',
                title: 'Advantage 1 Heading',
                type: 'string',
              },
              {
                name: 'advantage1Text',
                title: 'Advantage 1 Text',
                type: 'text',
              },
              {
                name: 'advantage2Image',
                title: 'Advantage 2 Image',
                type: 'image',
              },
              {
                name: 'advantage2Heading',
                title: 'Advantage 2 Heading',
                type: 'string',
              },
              {
                name: 'advantage2Text',
                title: 'Advantage 2 Text',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };
  
  