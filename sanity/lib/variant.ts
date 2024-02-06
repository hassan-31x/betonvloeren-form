/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'variations',
    title: 'Variations',
    type: 'document',
    fields: [
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'mainHeading', // Set the field to base the slug on
          maxLength: 200, // Maximum length of the slug
        },
      },
      {
        name: 'homePageSmallImage',
        title: 'Home Page Small Image',
        type: 'image',
      },
      {
        name: 'navbarImage',
        title: 'Navbar Image',
        type: 'image',
      },
      {
        name: 'navbarTitle',
        title: 'Navbar Title',
        type: 'string',
      },
      {
        name: 'navbarText',
        title: 'Navbar Text',
        type: 'text',
      },
      {
        name: 'homePageImage',
        title: 'Home Page Main Image',
        type: 'image',
      },
      {
        name: 'homePageDescription1',
        title: 'Home Page Description 1',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'homePageImage1',
        title: 'Home Page Image 1',
        type: 'image',
      },
      {
        name: 'subHeading1',
        title: 'Sub Heading 1',
        type: 'string',
      },
      {
        name: 'homePageDescription2',
        title: 'Home Page Description 2',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'homePageImages',
        title: 'Home Page Images (Please upload 3 or 6 images.)',
        type: 'array',
        of: [{ type: 'image'}],
      },
      {
        name: 'homePageDescription3',
        title: 'Home Page Description 3',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'subHeading2',
        title: 'Sub Heading 2',
        type: 'string',
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'string',
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of : [{type : 'string'}]
      },
      {
        name: 'homePageDescription4',
        title: 'Home Page Description 4',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'innerPageHeading',
        title: 'Inner Page Heading',
        type: 'string',
      },
      {
        name: 'innerPageBackgroundImage',
        title: 'Inner Page Background Image',
        type: 'image',
      },
      {
        name: 'innerPageSubHeading1',
        title: 'Inner Page Sub Heading 1',
        type: 'string',
      },
      {
        name: 'innerPageDescription1',
        title: 'Inner Page Description 1',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'innerPageImage1',
        title: 'Inner Page Image 1',
        type: 'image',
      },
      {
        name: 'innerPageDescription2',
        title: 'Inner Page Description 2',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
  };
  