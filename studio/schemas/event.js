export default {
  name: 'event',
  title: 'Arrangement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Dato',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Konsert', value: 'Konsert' },
          { title: 'Konferanse', value: 'Konferanse' },
          { title: 'Mat & Drikke', value: 'Mat & Drikke' },
          { title: 'Fest', value: 'Fest' },
          { title: 'Annet', value: 'Annet' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  orderings: [
    {
      title: 'Dato (stigende)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'image' },
    prepare({ title, date, media }) {
      return { title, subtitle: date, media }
    },
  },
}
