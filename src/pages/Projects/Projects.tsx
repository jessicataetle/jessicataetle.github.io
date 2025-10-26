import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <article className={styles.projects}>
      <PageHeader title="Coding Projects" />
      
      <Section>
        <h2 className={styles.sectionHeader}>jessicataetle.github.io</h2>
        <p>
          This website is a project for my Introduction to Computational Media class that I will continue 
          to add to throughout the semester. Right now, it is purely HTML and CSS, but I hope to add in 
          some React.js and Redux.js components as I continue to to develop it!
        </p>
        <p className={styles.accentLink}>
          <a 
            href="https://github.com/jessicataetle/jessicataetle.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to view GitHub Repository
          </a>
        </p>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Ask Docta! Telemedicine App</h2>
        <p>
          Over two semesters, I worked on a team of 5 other students to plan
          and implement a product for an assigned client. "Ask Docta: Telemedicine App" is the Android application
          my team created for our client, which provides health care consultation access to Southern Cameroonian 
          refugees living in Nigerian refugee camps.
        </p>
        <p>
          For this project, I was my group's project manager by managing and dividing up tasks in ZenHub. I also took the
          lead on the front-end implementation of the Android application in React Native.
        </p>
        <p>Here is a video of my group's elevator pitch and demo for this class:</p>
        <div className={styles.videoContainer}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/TxZDwX1olbU" 
            title="Ask Docta Demo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>"DropBox" Javascript Game</h2>
        <p>
          With a team of 3 other Computational Media majors, we created a JavaScript game with all 
          original artwork and music called "DropBox". DropBox is a strategy platformer with a space exploration 
          theme. The player, an astronaut, must navigate his way from the starting point to the portal at the 
          end of the level. The astronaut wears a backpack which he can drop and use as a platform. 
          While the astronaut is not wearing his backpack, he can fit into smaller spaces. The game includes 
          collectables which enhance the player's abilities, such as the "recycle" powerup which allows him to summon 
          his already dropped backpack from another place in the level for reuse.
        </p>
        <p>
          For this project, I was the group's primary programmer. I maintained the GitHub repository, 
          created the movement of the astronaut and other game mechanics, implemented the tiling of the levels, 
          and guided the team with instructions on how to make successful game art.
        </p>
        
        <h3 className={styles.subsectionHeader}>Instructions for Gameplay:</h3>
        <p>
          The game's objective is to navigate from the starting point to the portal using your backpack and any 
          power-ups available. Standard arrow key platforming controls are used. Pressing "x" drops and picks up 
          the astronaut's backpack, and "z" uses the "recycle" power-up.
        </p>
        
        <p className={styles.accentPrimary}>
          <a 
            href="https://jessicataetle.github.io/lmc-2700-dropbox/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to play DropBox
          </a>
        </p>
        <p className={styles.accentLink}>
          <a 
            href="https://github.com/jessicataetle/lmc-2700-dropbox" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to view GitHub Repository
          </a>
        </p>
        <p className={styles.warning}>
          <strong>WARNING: If you have bad internet connection, the game is very glitchy!</strong>
        </p>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Word Jumbler TwitterBot</h2>
        <p>
          Using Node.js, I created a TwitterBot (@WordJumblerBot) that when the program
          is running, any tweet directed at @WordJumblerBot will receive a reply to their Tweet with the letters
          in the word randomly re-organized except for the first and last letter of each word, so that each word is still 
          readable.
        </p>
        <p className={styles.accentPrimary}>
          <a 
            href="https://twitter.com/WordJumblerBot" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to view examples on @WordJumblerBot's profile
          </a>
        </p>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>3-D Piet Mondrian Art Gallery</h2>
        <p>
          For my Introduction to Computational Media class, I created a 3-Dimensional version of{' '}
          <a 
            href="https://society6.com/product/piet-mondrian1622787_poster" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            this Piet Mondrian painting
          </a>
          {' '}using A-Frame. I chose to replicate a Piet Mondrian for this assignment because I grew up going to 
          art museums with my mom, who is a fan of Piet Mondrian. I wanted to recreate the experience of going to 
          an outdoor sculpture garden by enhancing the sculptural elements of this painting as well as adding rain 
          and the gloomy backdrop to make the sculpture pop out of the screen.
        </p>
        <p className={styles.accentPrimary}>
          <a href={`${process.env.PUBLIC_URL}/aframe.html`} target="_blank" rel="noopener noreferrer">
            Click here to view the A-Frame Scene
          </a>
        </p>
        <p className={styles.accentLink}>
          <a 
            href="https://github.com/jessicataetle/lmc-2700-aframe-project" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to view GitHub Repository
          </a>
        </p>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Casanova</h2>
        <p>
          For my Media Device Architecture class, the final project was to make a Game Boy Advance game in C. 
          I chose to create Casanova, which is a game based on a bird "casanova" looking for love. Here is the 
          video presentation of me playing the game and explaining it in more detail:
        </p>
        <div className={styles.videoContainer}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/6jKdeP3tkfI" 
            title="Casanova Game Demo"
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
        <p className={styles.accentPrimary}>
          <a href={`${process.env.PUBLIC_URL}/media/Casanova.gba`} download>
            Click here to Download Casanova
          </a>
          {' '}(You will need an emulator such as{' '}
          <a 
            href="http://openemu.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            OpenEmu
          </a>
          {' '}to play it)
        </p>
        <p className={styles.accentLink}>
          <a 
            href="https://github.com/cs2261-gt/final-project-jtaetle" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click Here to View GitHub Repository
          </a>
        </p>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Snake</h2>
        <p>
          Another Game Boy Advance game that I coded in C was a basic snake game. Based off of the popular game Snake, 
          the user plays as a snake trying to collect 10 apples in order to win the game. Here is a video demo I did 
          explaining how to play the game:
        </p>
        <div className={styles.videoContainer}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/NE9ayP7qqko" 
            title="Snake Game Demo"
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
        <p className={styles.accentPrimary}>
          <a href={`${process.env.PUBLIC_URL}/media/Snake.gba`} download>
            Click here to Download Snake
          </a>
          {' '}(You will need an emulator such as{' '}
          <a 
            href="http://openemu.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            OpenEmu
          </a>
          {' '}to play it)
        </p>
        <p className={styles.accentLink}>
          <a 
            href="https://github.com/jessicataetle/cs2261-snake-game" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click Here to View GitHub Repository
          </a>
        </p>
      </Section>
    </article>
  );
};

export default Projects;

