import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <article className={styles.home}>
      <PageHeader title="About" />
      <Section>
        <div className={styles.aboutContent}>
          <img 
            src={`${process.env.PUBLIC_URL}/media/192779170_3802560333185597_2105064126897618037_n.jpg`}
            alt="Jessica Taetle"
            className={styles.profileImage}
          />
          <div className={styles.textContent}>
            <h3 className={styles.secondaryHeader}>Hello! My name is Jessica Taetle.</h3>
            <p>
              I am a fifth year at the Georgia Institute of Technology, and my anticipated 
              graduation date is May, 2022.
            </p>
            
            <h3 className={styles.secondaryHeader}>I am a Computational Media Major.</h3>
            <p>
              This major allows me to not only take computer science classes, but also allows 
              me to further my education into disciplines that compliment my computer science 
              knowledge. My concentrations areas are: People and Interaction Design, which 
              allows me to focus on user interface implementation and design.
            </p>
            
            <p className={styles.contactTitle}>To contact:</p>
            <a 
              href="https://www.linkedin.com/in/jessica-taetle-32b390163/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/media/linkedin.png`}
                alt="LinkedIn"
                className={styles.linkedinIcon}
              />
            </a>
          </div>
        </div>
      </Section>
    </article>
  );
};

export default Home;

