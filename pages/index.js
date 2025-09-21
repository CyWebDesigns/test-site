import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IT Company | Professional IT Services</title>
        <meta name="description" content="Reliable Hosting, Server Management, and IT Solutions for your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.svg" alt="IT Company Logo" className={styles.logo} />
        <h1>IT Company</h1>
        <p>Your Trusted IT Partner</p>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Empowering Your Business with Technology</h2>
          <p>We provide reliable hosting, expert server management, and scalable cloud solutions to help your business grow.</p>
        </section>

        <section className={styles.services}>
          <h3>Our Services</h3>
          <div className={styles.servicesList}>
            <div className={styles.serviceCard}>
              <h4>Web Hosting</h4>
              <p>Fast and secure hosting solutions tailored to your needs.</p>
            </div>
            <div className={styles.serviceCard}>
              <h4>Server Management</h4>
              <p>24/7 monitoring, security, and optimization for your servers.</p>
            </div>
            <div className={styles.serviceCard}>
              <h4>Cloud Solutions</h4>
              <p>Scalable cloud infrastructure and migration services.</p>
            </div>
            <div className={styles.serviceCard}>
              <h4>IT Consulting</h4>
              <p>Expert advice and planning to achieve your technology goals.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h3>Ready to Upgrade Your IT?</h3>
          <p>Contact us today for a free consultation.</p>
          <a href="mailto:info@itcompany.com" className={styles.ctaButton}>Contact Us</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} IT Company. All rights reserved.</p>
      </footer>
    </div>
  );
}