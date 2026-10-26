import styles from "./page.module.css";

export default function Home() {

  fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`)
  
  return (
    <main>
      <section className={styles.hero}>
        <h1>Stories from Aarhus</h1>
        <p>
          City walks, food and places worth a visit. The content is written in
          WordPress and presented with Next.js.
        </p>
      </section>
    </main>
  );
}