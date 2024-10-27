import { db, Personas } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	console.log("DB SEED ejecutado")

	await db.insert(Personas).values([
		{
			id: 1,
			nombres: 'Suki',		
			apellidos: 'Ikus',
			isActive: true
		},{
			id: 2,
			nombres: 'Biko',		
			apellidos: 'Okib',
			isActive: true
		},
		{
			id: 3,
			nombres: 'Pixie',		
			apellidos: 'Eixip',
			isActive: true
		},
	])
}
