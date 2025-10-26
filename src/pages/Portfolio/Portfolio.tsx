import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  return (
    <article className={styles.portfolio}>
      <PageHeader title="Design Portfolio" />
      
      <Section>
        <h2 className={styles.sectionHeader}>Photography: Leading the User Through Composition</h2>
        <p>
          For one of my projects for Introduction to Visual Design, I was 
          required to go out and taking 100 photographs, then pick 5 photos and combine them to create 
          a complex message, one that is more powerful than each image when viewed alone. the message 
          I tried to convey is the story of the chaos and commotion of living in a city told by the 
          abundance of lines. Since I really enjoyed the reading and lectures on the powers of lines, 
          I made it my goal when taking to picture for this project to find lines that actual, implied 
          or psychic that I found visually compelling. I particularly looked out for diagonal lines that
          are implied or actual, for they are the most fun to play with and visually appealing.
        </p>
        <p>
          In addition to demonstrating the prevalence of lines in our everyday lives, I wanted to use the powerfulness 
          of the lines in the pictures to demonstrate the chaos and confusion I associate with living in the 
          city. In order to do this, I chose to juxtapose the photos in complimentary ways and then flip the 
          entire photo vertically but keep the symmetrical composition, in order to blur and confuse the 
          boundary between the original photos and the upside down ones.
        </p>
        <img 
          src={`${process.env.PUBLIC_URL}/media/Taetle_003_Final_Comp_Combined.jpg`}
          alt="Photography composition with lines"
          className={styles.portfolioImage}
        />
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Remix of <em>Maleficent</em> Movie Poster</h2>
        <p>
          For one of my projects for Introduction to Visual Design, I was required to find a movie poster,
          rotate it 90 degrees, and change the mood of the poster using Photoshop. I chose to "remix" the poster
          for the movie <em>Maleficent</em>, and My goal for this project was to take the colorless, intense, 
          ominous poster for the movie Maleficent and make it resemble more of a traditional fairytale poster. 
          In order to do this, I added warm tones to Angelina Jolie and the backdrop of the cottage, and took 
          Angelina Jolie out of the center of the poster and followed the Rule of Thirds to still make her the 
          focal point, yet keeping the negative space of the original image. After receiving critiques on my 
          rough draft from my peers in the class, I decided to increase the warm tones even more to further this 
          mood shift as well as making the cottage more of a pivotal element in the piece by shifting the 
          placement of the gradient. While Angelina Jolie is still intimidating in the photo, my design 
          choices in the remix made the poster feel less maudlin, which is staying true to the original 
          message but changing the mood.
        </p>
        <div className={styles.imageComparison}>
          <div className={styles.comparisonItem}>
            <h3 className={styles.imageHeader}>Original Poster:</h3>
            <img 
              src={`${process.env.PUBLIC_URL}/media/Taetle_002_Final_Orig.jpg`}
              alt="Original Maleficent poster"
              className={styles.comparisonImage}
            />
          </div>
          <div className={styles.comparisonItem}>
            <h3 className={styles.imageHeader}>Remixed Poster:</h3>
            <img 
              src={`${process.env.PUBLIC_URL}/media/Taetle_002_FInal_Remix.jpg`}
              alt="Remixed Maleficent poster"
              className={styles.comparisonImage}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Fair Fight U at Georgia Tech's Instagram Posts</h2>
        <p>
          Started by Stacey Abrams, Fair Fight promotes free and fair elections in Georgia and around the country by advocating for election reform at all levels, encourages voter participation in elections, and educate voters about elections and their voting rights. A new development in this organization is Fair Fight U, which is now a club at every major university on campus promoting voting to the student population. I have created a few instagram posts for this organization. All posts are in Georgia Tech's official color scheme, to indicate the information is intended for Georgia Tech students.
        </p>
        
        <h3 className={styles.imageHeader}>Key Dates for the 2020 General Election in Georgia:</h3>
        <img 
          src={`${process.env.PUBLIC_URL}/media/FFKeyDates.jpg`}
          alt="Fair Fight key dates"
          className={styles.portfolioImage}
        />
        <p>
          For this post, I wanted to limit all the information about key dates to one picture, so that an Instagram user could easily repost it to their instagram story and educate their followers on key dates for the election. In terms of content, I organized the dates in bullets, and made the final bullet a different color than the rest to emphasize its importance. I wanted to include information about absentee ballots because it is important but isnt a date, so I included it in smaller text at the bottom. Finally, I added the yellow accent shape on the right to make it more visual appealing and more likely to get an Instagram user's attention.
        </p>
        <p className={styles.accentLink}>
          <a 
            href="https://www.instagram.com/p/CFNyaiehahw/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click Here to View Instagram Post
          </a>
        </p>
        
        <h3 className={styles.imageHeader}>Requesting an Absentee Ballot:</h3>
        <div className={styles.imageGrid}>
          <img src={`${process.env.PUBLIC_URL}/media/FFpage1.jpg`} alt="Absentee ballot page 1" className={styles.gridImage} />
          <img src={`${process.env.PUBLIC_URL}/media/FFpage2.jpg`} alt="Absentee ballot page 2" className={styles.gridImage} />
          <img src={`${process.env.PUBLIC_URL}/media/FFpage3.jpg`} alt="Absentee ballot page 3" className={styles.gridImage} />
          <img src={`${process.env.PUBLIC_URL}/media/FFpage4.jpg`} alt="Absentee ballot page 4" className={styles.gridImage} />
        </div>
        <p>
          For this post, I wanted the first picture to capture the user's eye and clearly state the purpose of the post because I knew all of the information about requesting an absentee ballot would not fit onto one picture. For the second, third, and fourth pictures in the post I wanted to include screenshots from the website official voting website to clearly walk a person through the process. Furthermore, I added key information for specfically requesting an absentee ballot to the Georgia Tech campus because I knew my audience for this post is located there.
        </p>
      </Section>

      <Section>
        <h2 className={styles.sectionHeader}>Eugie Award Title Cards</h2>
        <p>
          I work in a science fiction lab at Georgia Tech, and part of the work we do is creating media for well known science fiction companies and awards. For DragonCon 2020, because it was virtual, we were tasked with creating a video presenting The Eugie Award, which is presented to an author who wrote the best piece of innovative fiction that year.
        </p>
        <p>
          I was tasked with creating a title card for the award using Adobe Photoshop, which is pictured below. I was inspired by the flowing nature of the Eugie Award logo as well as the borders featured in old film title cards. I also created author cards for each of the nominees for The Eugie Award that complimented the title card. Each author card centered visually more around the story and less around the author because the Eugie Award is less about the authors and more focussed on the story.
        </p>
        
        <h3 className={styles.imageHeader}>Title Card:</h3>
        <img 
          src={`${process.env.PUBLIC_URL}/media/eugieawardfinal.jpg`}
          alt="Eugie Award title card"
          className={styles.portfolioImage}
        />
        
        <h3 className={styles.imageHeader}>Author Card:</h3>
        <img 
          src={`${process.env.PUBLIC_URL}/media/eugieawardauthorcardscarroll.jpg`}
          alt="Eugie Award author card"
          className={styles.portfolioImage}
        />
        
        <p className={styles.accentLink}>
          <a 
            href="https://www.youtube.com/watch?v=bahOebqUTkg&feature=emb_title" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to Watch The Eugie Award Program 2020
          </a>
        </p>
      </Section>
    </article>
  );
};

export default Portfolio;

