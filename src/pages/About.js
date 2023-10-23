import React from 'react';
import "./About.css"
import NavigationBar from '../components/navbar/NavigationBar';
function About() {
  return <div>
        <NavigationBar/>
      <div class="alert">
          <h2>Hey! Read Me...</h2>
          <div>
              <h1>Exploring My Passion for Movies and Recommending Them to Others</h1>

          <p>The world of cinema has always fascinated me, serving as an escape into different worlds, cultures, and experiences. My love for movies is not limited to a mere pastime; it is a genuine passion that has grown and evolved over the years. What truly ignites my enthusiasm is the art of recommending films to others. Whether it's to friends, family, or a broader audience, the power of suggesting a well-crafted movie can be a transformative and fulfilling experience. In this essay, I will delve into my passion for movies and the joy I find in sharing them with others.</p>

          <h2>The Magic of Movies</h2>

          <p>Movies, often referred to as "the art of storytelling," have the unique ability to transcend boundaries and connect people from various backgrounds. They have the power to transport viewers to different eras, far-off galaxies, or the depths of human emotion. For me, each movie is a new journey, a chance to immerse myself in unfamiliar stories, characters, and settings. It's a form of exploration, a way to better understand the diverse facets of life, and a medium through which I can experience the world's richness and complexity.</p>

          <h2>Personal Connection</h2>

          <p>My passion for movies isn't just about being an avid consumer of cinema. It's about connecting with the characters, understanding their motivations, and feeling their emotions. When I watch a film, I often find myself absorbed in the story, identifying with the struggles and victories of the characters. It's a deeply personal connection that brings me closer to the human experience, making each movie an opportunity for self-discovery and empathy.</p>

          <h2>Why Recommending Movies Matters</h2>

          <p>Sharing my favorite movies with others is a significant aspect of my passion. Recommending a film is not merely an act of imparting information; it's an act of giving a piece of myself. When I suggest a movie, I am essentially saying, "This touched me, and I believe it might touch you too." The ability to recommend movies to friends and family, and even to a broader audience, allows me to connect on a deeper level and initiate conversations about shared experiences.</p>

          <h2>The Medium of Recommendation</h2>

          <p>Medium plays an essential role in how I recommend movies. In today's digital age, social media, blogs, and various online platforms provide ample opportunities to share my cinematic experiences. I can write reviews, create curated lists, or engage in discussions about the movies that have impacted me. Social media platforms like Letterboxd and websites like IMDb have become my go-to spaces for sharing my thoughts and discovering new films.</p>

          <h2>The Joy of Impacting Others</h2>

          <p>There's immense joy in knowing that a movie I recommended resonated with someone. When a friend watches a film based on my suggestion and later expresses how much they loved it, it's a rewarding experience. It's not just about influencing their viewing choices; it's about deepening our connections and sharing meaningful conversations about the art of filmmaking.</p>

          <h2>Conclusion</h2>

          <p>My passion for movies is a journey of self-discovery, empathy, and the exploration of the human experience. Recommending films to others is the bridge that connects my world with theirs. It's about sharing the magic of cinema and the emotions it evokes, and it's an opportunity to impact others in a positive and lasting way. In the end, it's the joy of watching a recommendation come to life, enriching someone else's world, that fuels my passion for movies and the art of sharing them.</p>
      </div>

  </div><div class="About_container">

          <h2>Which is you favorite Genre</h2>

          <ul>
              <li>
                  <input type="radio" id="f-option" name="selector" />
                  <label for="f-option">Mystery</label>

                  <div class="check"></div>
              </li>

              <li>
                  <input type="radio" id="s-option" name="selector" />
                  <label for="s-option">Crime</label>

                  <div class="check"><div class="inside"></div></div>
              </li>

              <li>
                  <input type="radio" id="t-option" name="selector" />
                  <label for="t-option">Thriller</label>

                  <div class="check"><div class="inside"></div></div>
              </li>
          </ul>
      </div><div class="signature">
          <p>Made with <i class="much-heart"></i> by <a href="https://codepen.io/AngelaVelasquez">Keerthi Kiran</a></p>
      </div>
  </div>;
}

export default About;