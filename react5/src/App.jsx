import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="container">

        <section className="intro">
          <h2>Featured Recipes & Stories</h2>
          <p>
            Discover delicious recipes, inspiring stories, and simple ideas
            that bring warmth and joy to your kitchen.
          </p>
        </section>
        <div className="main-grid">

          <div className="featured">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwXG_yUwCQ0joLNZiQK2BQYeIVexRjx0hyGO5KYqwrA&s=10"
              alt="Family dinner"
            />

            <div className="featured-content">
              <span className="tag">FEATURED</span>
              <span className="tag yellow">RECIPES</span>

              <h2>Family Sunday Dinner</h2>

              <p>
                A warm and delicious collection of homemade dishes perfect
                for sharing with family and friends around the dinner table.
              </p>

              <small>Read more →</small>
            </div>
          </div>
          <div className="side-cards">

            <Card
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG80ZUWps0PL9UOUo49c8hSknI-SPP9cmMgnM5oLrkA&s=10"
              title="Weekend Cooking Table"
              desc="Simple and delicious ideas for a relaxing weekend meal."
            />

            <Card
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyO-t-bP80VExaG30rRBTGkPWjSW5D8Ri0mLuQ-KyQzg&s=10"
              title="Cooking With Friends"
              desc="Good food becomes even better when shared with friends."
            />

          </div>
        </div>
        <div className="bottom-grid">

          <Card
            img="https://t3.ftcdn.net/jpg/20/11/38/56/360_F_2011385650_1VOX3oODusp673OXh8nbB7FkdLzuFvNw.jpg"
            title="Homemade Parotaa....!!!"
            desc="Learn how to make soft, fresh and delicious homemade parota."
          />

          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsESvYGI4Ior9QTxEWlGpbm9kX8CzHlohhw0k-pI-0A&s=10"
            title="A Taste of Home"
            desc="Comforting food for the people in South-India, made with love and care."
          />

        </div>

      </main>
      <footer>
        <h3>Warm Hearth</h3>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
        </div>

        <p>© 2026 Warm Hearth. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;