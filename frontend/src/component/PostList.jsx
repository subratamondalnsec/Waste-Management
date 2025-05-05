import React from 'react';
import Post from './Post';

const postsData = [
    {
      name: "EcoExchange India",
      title: "Promoting Green Living 🌍",
      content: "Keeping the environment clean starts with us. Let's reduce waste and recycle whenever we can.",
      image: "/post/pc1.png",
      avatar: "/post/pa1.png",
      likes: 128
    },
    {
      name: "RePlanet Foundation",
      title: "Environmental NGO",
      content: "Plastic bottles, glass jars, paper, and aluminum cans are all recyclable! ♻️ Start segregating today.",
      image: "/post/pc2.png",
      avatar: "/post/pa2.png",
      likes: 242
    },
    {
      name: "Subrata Mondal",
      title: "EcoTech Innovator ",
      content: "Smart bins + community effort = cleaner neighborhoods! Let's lead the green tech revolution.",
      image: "/post/pc3.png",
      avatar: "/post/pa3.png",
      likes: 91
    },
    {
      name: "CleanEarth Collective",
      title: "Promoted",
      content: "Join our weekend drive to clean beaches and educate people about waste segregation!",
      image: "/post/pc4.png",
      avatar: "/post/pa4.png",
      likes: 401
    },
    {
      name: "Green School Club",
      title: "Students for Sustainability",
      content: "Recycling paper saves trees 🌳. Reuse notebooks, avoid printing unless necessary!",
      image: "/post/pc5.png",
      avatar: "/post/pa5.png",
      likes: 75
    },
    {
      name: "CitySanitize Initiative",
      title: "Urban Cleanup Program",
      content: "Proper disposal of e-waste ensures a toxin-free future. Donate or recycle your old gadgets today!",
      image: "/post/pc6.png",
      avatar: "/post/pa6.png",
      likes: 316
    },
    {
      name: "Zero Waste Living",
      title: "Sustainable Influencer",
      content: "Switch to reusable cloth bags, bamboo toothbrushes, and steel straws for a zero-waste lifestyle!",
      image: "/post/pc7.png",
      avatar: "/post/pa7.png",
      likes: 189
    },
    {
      name: "The Green Architect",
      title: "Eco-Designer | Urban Planner",
      content: "Rooftop gardens and vertical forests are the future of sustainable urban living.",
      image: "/post/pc8.png",
      avatar: "/post/pa8.png",
      likes: 226
    },
    {
      name: "RecycloTech",
      title: "Startup Spotlight",
      content: "We're turning plastic waste into 3D printing filament. Follow us to learn how innovation meets recycling.",
      image: "/post/pc9.png",
      avatar: "/post/pa9.png",
      likes: 309
    },
    {
      name: "Nurture Nature Club",
      title: "School Eco-Group",
      content: "Planting one tree can absorb over 20kg of CO₂ a year. Join our tree planting campaign 🌱!",
      image: "/post/pc10.png",
      avatar: "/post/pa10.png",
      likes: 142
    }
  ];

const PostList = ({ isDarkMode }) => (
  <div className=" max-w-screen-xl mx-auto space-y-6 px-4 py-2 ">
    {postsData.map((post, index) => (
      <Post key={index} post={post} isDarkMode={isDarkMode} />
    ))}
  </div>
);

export default PostList;
