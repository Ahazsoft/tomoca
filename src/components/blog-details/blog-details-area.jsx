'use client';
import React from 'react';
import Image from 'next/image';
// internal
import BlogSidebar from '../blog/blog-postox/blog-sidebar';
import BlogPostCommentForm from '../forms/blog-post-comment-form';
import BlogDetailsAuthor from './blog-details-author';
import BlogDetailsComments from './blog-details-comments';
import PostboxDetailsNav from './postbox-details-nav';
import PostboxDetailsTop from './postbox-details-top';
import shape_line from '@assets/img/blog/details/shape/line.png';
import shape_line_2 from '@assets/img/blog/details/shape/quote.png';
import blog_details_big_img from '@assets/img/blog/details/blog-big-1.jpg';
import blog_details_sm_img from '@assets/img/blog/details/blog-details-sm-1.jpg';
import social_data from '@/data/social-data';
import comment_data from '@/data/blog-comment-data';

const BlogDetailsArea = ({blog}) => {
  return (
    <section className="tp-postbox-details-area pb-120 pt-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            {/* PostboxDetailsTop */}
            <PostboxDetailsTop blog={blog} />
            {/* PostboxDetailsTop */}
          </div>
          <div className="col-xl-12">
            <div className="tp-postbox-details-thumb">
              {/* <Image src={blog_details_big_img} alt="blog-big-img" /> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="tp-postbox-details-main-wrapper">
              <div className="tp-postbox-details-content">
                <p className="tp-dropcap">There’s something captivating about the dark.
                  It draws you in—quietly, confidently. Not with sweetness or softness, but with strength and mystery. That’s what it feels like to drink Tomoca’s Bar Type dark roast. It’s not just a coffee—it’s a mood, a moment, a memory brewed into a cup.
                </p>
              
                <p>We’ve long known that coffee tells stories. The Bar Type tells the story of power restrained, of fire mastered, of a bean pushed to its limit—and thriving there.
                  As the grinder whirs and the aroma rises, there’s a sense that something bold is on its way—notes of roasted nuts, bitter chocolate, and the unmistakable whisper of smoke from the fire it endured. These are not shy flavors. They speak in full sentences. They linger.
                </p>

                {/* <div className="tp-postbox-details-desc-thumb text-center">
                  <Image src={blog_details_sm_img} alt="details-sm-img" />
                  <span className="tp-postbox-details-desc-thumb-caption">Gucci’s Women’s Cruise Collection 2023 Lookbook Has Arrived</span>
                </div> */}
                <p>This is the kind of coffee that doesn’t ask for cream or sugar—it asks for attention.
                  It’s no surprise that espresso is its chosen stage. Under the pressure of steam and steel, 
                  the Bar Type releases its full expression—a rich, velvety shot with a lingering finish that holds its own.
                </p>

                <p>For those who love their coffee strong, assertive, and unapologetically bold, the Bar Type is more than a roast—it’s a ritual. 
                  It’s the kind of coffee you drink in the early hours before the world wakes, 
                  or in the quiet of late nights, when only the boldest thoughts remain.
                </p>

                <p>So the next time you need a cup that means business, remember:
                  Go dark. Go bold. Go Bar.
                  Because in the heart of the roast, that’s where the real flavor lives.

                </p>

                <div className="tp-postbox-details-quote">
                  <blockquote>
                    <div className="tp-postbox-details-quote-shape">
                      <Image className="tp-postbox-details-quote-shape-1" src={shape_line} alt="shape" />
                      <Image className="tp-postbox-details-quote-shape-2" src={shape_line_2} alt="shape" />
                    </div>
                    <p>Go dark. Go bold. Go Bar.</p>
                    <cite></cite>
                  </blockquote>
                </div>

                
                {/* <div className="tp-postbox-details-share-wrapper">
                  <div className="row">
                    <div className="col-xl-8 col-lg-6">
                      <div className="tp-postbox-details-tags tagcloud">
                        <span>Tags:</span>
                        <a href="#">Lifesttyle</a>
                        <a href="#">Awesome</a>
                        <a href="#">Winter</a>
                        <a href="#">Sunglasses</a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="tp-postbox-details-share text-md-end">
                        <span>Share:</span>
                        {social_data.map((s) => (
                          <a href={s.link} className="me-1" target="_blank" key={s.id}>
                            <i className={s.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* PostboxDetailsNav */}
                <PostboxDetailsNav />
                {/* PostboxDetailsNav */}

                {/* author details start */}
                <BlogDetailsAuthor />
                {/* author details end */}

                <div className="tp-postbox-details-comment-wrapper">
                  <h3 className="tp-postbox-details-comment-title">Comments ({comment_data.length})</h3>
                  {/* BlogDetailsComments */}
                  <BlogDetailsComments />
                  {/* BlogDetailsComments */}
                </div>

                <div className="tp-postbox-details-form">
                  <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>

                  {/* form start */}
                  <BlogPostCommentForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* sidebar start */}
            <BlogSidebar />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;