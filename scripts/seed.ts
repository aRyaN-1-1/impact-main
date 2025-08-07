import { drizzle } from "drizzle-orm/node-postgres";
import { content_sections } from "../shared/schema";
import pg from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

const defaultContent = [
  {
    section_key: 'hero_title',
    title: 'Transform Your Giving Impact',
    content: 'Join thousands of changemakers creating meaningful social impact through strategic giving and community action.'
  },
  {
    section_key: 'hero_subtitle', 
    title: 'Sustainable Solutions',
    content: 'Building a better tomorrow through conscious giving and environmental stewardship.'
  },
  {
    section_key: 'audience_title',
    title: 'Perfect For Every Team',
    content: 'Whether you\'re a startup or enterprise, our platform adapts to your team\'s unique needs.'
  },
  {
    section_key: 'product_title',
    title: 'Powerful Features for Impact', 
    content: 'Everything you need to build stronger teams while making a positive environmental difference.'
  },
  {
    section_key: 'storytelling_title',
    title: 'Real Impact, Real Results',
    content: 'See how teams are transforming their collaboration while contributing to environmental sustainability.'
  },
  {
    section_key: 'faq_title',
    title: 'Frequently Asked Questions',
    content: 'Find answers to common questions about our platform and how it works.'
  },
  {
    section_key: 'contact_title',
    title: 'Ready to Make an Impact?',
    content: 'Join us in creating positive change for your team and the environment.'
  }
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    for (const content of defaultContent) {
      await db.insert(content_sections)
        .values(content)
        .onConflictDoNothing();
    }
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seed();