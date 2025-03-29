// schemaTypes/commonContent.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'commonContent',
  title: 'Common Content',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'aboutUs',
      title: 'About Us Section',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whyEu',
      title: 'Why EU Clone Section (General)',
      description: 'General benefits of using EU-hosted alternatives.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    // --- NEW FIELD ---
    defineField({
      name: 'gdprFocus',
      title: 'GDPR Focus Section',
      description: 'Specific points about GDPR compliance advantages.',
      type: 'text',
    }),
    defineField({
      name: 'globalTestimonials',
      title: 'Global Testimonials',
      type: 'array',
      of: [{type: 'text'}],
    }),
    // --- NEW FIELD (using image type) ---
    defineField({
        name: 'globalCustomerLogos',
        title: 'Global Customer Logos',
        description: 'Logos displayed across multiple pages.',
        type: 'array',
        of: [{
            type: 'image',
            options: { hotspot: true }, // Allows focal point selection
            fields: [ // Optional: Add alt text field to images
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility.',
                    validation: Rule => Rule.required()
                })
            ]
        }]
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Common Content Settings'}
    },
  },
})