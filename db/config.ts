import { column, defineDb, defineTable } from 'astro:db';

const Personas = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    nombres: column.text(),
    apellidos: column.text(),
    isActive: column.boolean()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Personas,
  }
});
