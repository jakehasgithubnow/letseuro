// schemaTypes/tool.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Path)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Short Tagline (for Hero/Listings)',
      type: 'string',
    }),
    // --- NEW FIELD ---
    defineField({
      name: 'usAlternativeName',
      title: 'US Alternative Name',
      description: 'The name of the US tool this is an alternative to (e.g., "Hotjar", "Mailchimp")',
      type: 'string',
    }),
    defineField({
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
            defineField({
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
                 validation: Rule => Rule.required()
            })
        ]
    }),
     // --- REMAINING FIELDS ---
    defineField({
        name: 'primaryCTAText',
        title: 'Primary Call-to-Action Button Text',
        type: 'string',
        initialValue: 'Start Free Trial',
    }),
    defineField({
        name: 'secondaryCTAText',
        title: 'Secondary Call-to-Action Text (Optional)',
        description: 'E.g., "Request a Demo", "View Pricing"',
        type: 'string',
    }),
    defineField({
      name: 'uniqueDescription',
      title: 'Unique Description (Problem/Solution Section)',
      type: 'text',
    }),
    defineField({
      name: 'uniqueFeatures',
      title: 'Unique Features & Benefits',
      type: 'array',
      of: [{
          type: 'object',
          fields: [
              defineField({ name: 'title', title: 'Feature Title', type: 'string', validation: Rule => Rule.required() }),
              defineField({ name: 'description', title: 'Benefit/Description', type: 'text', validation: Rule => Rule.required() }),
          ]
      }],
    }),
    defineField({
      name: 'comparisonTitle',
      title: 'Comparison Section Title',
      description: 'The title for the feature comparison section (e.g., "FEATURE COMPARISON")',
      type: 'string',
      initialValue: 'FEATURE COMPARISON',
    }),
    defineField({
      name: 'comparisonSubtitle',
      title: 'Comparison Section Subtitle (First Line)',
      description: 'The first line of the subtitle (e.g., "Everything You Need—")',
      type: 'string',
      initialValue: 'Everything You Need—',
    }),
    defineField({
      name: 'comparisonTagline',
      title: 'Comparison Section Tagline (Second Line)',
      description: 'The second line of the subtitle (e.g., "Just Without the Brand Price Tag")',
      type: 'string',
      initialValue: 'Just Without the Brand Price Tag',
    }),
    defineField({
        name: 'comparisonPoints',
        title: 'Comparison Points (vs US Tool)',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'featureName', title: 'Feature / Aspect', type: 'string', validation: Rule => Rule.required() }),
                defineField({ name: 'euToolValue', title: 'This EU Tool', type: 'string', validation: Rule => Rule.required() }),
                defineField({ name: 'usToolValue', title: 'Original US Tool', type: 'string', validation: Rule => Rule.required() }),
            ]
        }]
    }),
    defineField({
        name: 'pricingTiers',
        title: 'Pricing Tiers',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'name', title: 'Tier Name', type: 'string', validation: Rule => Rule.required() }),
                defineField({ name: 'price', title: 'Price (e.g., €19/mo)', type: 'string', validation: Rule => Rule.required() }),
                defineField({ name: 'featuresList', title: 'Included Features (one per line)', type: 'array', of: [{type: 'string'}], validation: Rule => Rule.required() }),
                defineField({ name: 'ctaText', title: 'Button Text', type: 'string', initialValue: 'Get Started'}),
            ]
        }]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'usAlternativeName',
      media: 'heroImage',
    },
    prepare: ({title, subtitle, media}) => ({
      title,
      subtitle: subtitle ? `Alternative to ${subtitle}` : undefined,
      media,
    })
  },
})