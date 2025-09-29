// electronic
import blog_1 from "@assets/img/blog/blog-1.jpg";
import blog_2 from "@assets/img/blog/blog-2.jpg";
import blog_3 from "@assets/img/blog/blog-3.jpg";
// fashion
import blog_4 from '@assets/img/blog/2/blog-1.jpg';
import blog_5 from '@assets/img/blog/2/blog-2.jpg';
import blog_6 from '@assets/img/blog/2/blog-3.jpg';
// blog postbox 
// import blog_post_1 from '@assets/img/product/featured/aboutus.jpg';
import blog_post_1 from '@assets/img/blog/blog1.png';
import blog_post_2 from '@assets/img/blog/blog2.png';
// import blog_post_2 from '@assets/img/blog/blog-big-2.jpg';
import blog_post_3 from '@assets/img/blog/blog3.png';
// import blog_post_3 from '@assets/img/blog/blog-big-4.jpg';
import blog_post_4 from '@assets/img/blog/blog4.png';
import blog_post_5 from '@assets/img/blog/blog-big-6.jpg';
// blog grid 
import blog_grid_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import blog_grid_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import blog_grid_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import blog_grid_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import blog_grid_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import blog_grid_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import blog_grid_7 from '@assets/img/blog/grid/blog-grid-7.jpg';
import blog_grid_8 from '@assets/img/blog/grid/blog-grid-8.jpg';
// list img 
import list_img_1 from '@assets/img/blog/grid/blog-grid-1.jpg';
import list_img_2 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_3 from '@assets/img/blog/grid/blog-grid-3.jpg';
import list_img_4 from '@assets/img/blog/grid/blog-grid-4.jpg';
import list_img_5 from '@assets/img/blog/grid/blog-grid-5.jpg';
import list_img_6 from '@assets/img/blog/grid/blog-grid-6.jpg';
import list_img_7 from '@assets/img/blog/grid/blog-grid-2.jpg';
import list_img_8 from '@assets/img/blog/grid/blog-grid-3.jpg';

const blogData = [
  {
    id: 1,
    img: blog_post_1,
    date: "14 January, 2023",
    author:'Mark Smith',
    title: "In the Depths of the Roast: Celebrating Tomoca’s Bar Type Dark Roast",
    tags: ["Tablet", "News"],
    category:'electronics',
    comments:2,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "electronics",
  },
  {
    id: 2,
    img: blog_post_3,
    date: "18 February, 2023",
    author:'Naim Ahmed',
    title: "From Bean to Brew: The Artistry Behind Tomoca’s Signature Blend",
    tags: ["Monitor", "Technology"],
    category:'electronics',
    comments:4,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "electronics",
  },
  {
    id: 3,
    img: blog_post_4,
    date: "20 January, 2023",
    author:'Salim Rana',
    title: "Awakening the Senses: Why Tomoca’s Coffee is a Journey, Not Just a Drink",
    tags: ["Microphone", "Computer"],
    category:'electronics',
    comments:5,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "electronics",
  },
  // fashion blog
  {
    id: 4,
    img: blog_4,
    date: "20 July, 2023",
    author:'John Smith',
    title: "The 'Boomerang' Employees Returning After Quitting",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:6,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  {
    id: 5,
    img: blog_5,
    date: "18 March, 2023",
    author:'John Smith',
    title: "In the Depths of the Roast: Celebrating Tomoca’s Bar Type Dark Roast",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:3,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  {
    id: 6,
    img: blog_6,
    date: "15 February, 2023",
    author:'John Smith',
    title: "The Sound Of Fashion: Malcolm McLaren Words",
    tags: ["Fashion", "Lift Style","News"],
    category:'fashion',
    comments:8,
    sm_desc:
      "The world is an amazing place providing an incredible assortment of interesting locations across.",
    blog: "fashion",
  },
  //postbox blog
  {
    id:7,
    img:blog_post_1,
    date:'July 21, 2023',
    author:'John Smith',
    comments:2,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'In the Depths of the Roast: Celebrating Tomoca’s Bar Type Dark Roast',
    desc:'There’s a certain magic in darkness. Quiet, confident, and unapologetically bold, darkness draws you in, and nowhere is that more true than in a cup of Tomoca’s Bar Type dark roast',
    blog:'blog-postbox'
  },
  {
    id:8,
    img:blog_post_2,
    date:'April 18, 2023',
    author:'Mark Smith',
    comments:5,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'The Heartbeat of Ethiopian Coffee: Discovering Tomoca’s Legacy',
    desc:'In the bustling streets of Addis Ababa, a legend brews quietly but powerfully—Tomoca Coffee. More than just a brand, Tomoca embodies the rich heritage of Ethiopian coffee culture, offering every cup as a heartfelt tribute to tradition, passion, and quality.',
    // video:true,
    // video_id:'457mlqV1gzA',
    blog:'blog-postbox'
  },
  {
    id:9,
    date:'March 15, 2023',
    // author:'Shahnewaz Sakil',
    comments:8,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'A Legacy Brewed in Ethiopia',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    blockquote:true,
    blog:'blog-postbox'
  },
  {
    id:10,
    img:blog_post_3,
    date:'January 20, 2023',
    author:'Salim Rana',
    comments:10,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'From Bean to Brew: The Artistry Behind Tomoca’s Signature Blend',
    desc:'Crafting the perfect cup of coffee is an art—and Tomoca masters it with every roast. From carefully selected beans to meticulous roasting techniques, Tomoca’s signature blend tells a story of dedication, flavor, and an unwavering commitment to excellence.',
    // audio:true,
    // audio_id:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    blog:'blog-postbox'
  },
  {
    id:11,
    img:blog_post_4,
    // slider:true,
    // slider_images:[blog_post_3,blog_post_4,blog_post_5],
    date:'February 20, 2023',
    author:'Smith Mark',
    comments:12,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Awakening the Senses: Why Tomoca’s Coffee is a Journey, Not Just a Drink',
    desc:'Coffee is more than a morning ritual—it’s a sensory experience. Tomoca transforms every sip into a journey through Ethiopia’s lush coffee landscapes, capturing the essence of its origin and awakening flavors that linger long after the last drop.',
    blog:'blog-postbox'
  },
  // blog grid data 
  {
    id:12,
    img:blog_grid_1,
    list_img:list_img_1,
    date:'January 8, 2023',
    author:'John Smith',
    comments:5,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Hiring the Right Sales Team at the Right Time',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:13,
    img:blog_grid_2,
    list_img:list_img_2,
    date:'February 12, 2023',
    author:'Salim Rana',
    comments:0,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Fully Embrace the Return of 90s fashion',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:14,
    img:blog_grid_3,
    list_img:list_img_3,
    date:'March 15, 2023',
    author:'John Smith',
    comments:12,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Exploring the English Countryside',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:15,
    img:blog_grid_4,
    list_img:list_img_4,
    date:'April 7, 2023',
    author:'John Smith',
    comments:8,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Here’s the First Valentino’s New Makeup Collection',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:16,
    img:blog_grid_5,
    list_img:list_img_5,
    date:'May 2, 2023',
    author:'John Smith',
    comments:4,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Follow Your own Design process, whatever gets',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:17,
    img:blog_grid_6,
    list_img:list_img_6,
    date:'April 5, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Freelancer Days 2022, What’s new?',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:18,
    img:blog_grid_7,
    list_img:list_img_7,
    date:'May 12, 2023',
    author:'John Smith',
    comments:6,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Hiring the Right Sales Team at the Right Time',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
  {
    id:19,
    img:blog_grid_8,
    list_img:list_img_8,
    date:'March 22, 2023',
    author:'John Smith',
    comments:15,
    tags: ["Fashion", "Lift Style","News"],
    category:'Beauty',
    title:'Quality Foods Requirments For Every Human Body’s',
    desc:'Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.',
    blog:'blog-grid'
  },
];

export default blogData;
