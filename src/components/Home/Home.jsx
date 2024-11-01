import React from "react";
import papaNmama from "./../../assets/PapaWithMama-removebg-preview.png";
import classes from "./Home.module.scss";
import Header from "../Header/Header";
import papaTeach from "./../../assets/papateach24-removebg-preview.png";
import worship from "./../../assets/choir.jpg";
import papaTeach4 from "./../../assets/p1.jpg";
import groupSelfie from "./../../assets/we.jpg";
import headingImg from "./../../assets/3CCCCC.png";
import children from "./../../assets/chil.jpg";
import papaRed from "./../../assets/papateach2-removebg-preview.png";
import testifier1 from "./../../assets/testi1.jpg";
import testifier2 from "./../../assets/testt2.jpg";
import testifier3 from "./../../assets/test3.jpg";
import Footer from "../Footer/Footer";
import Sermons from "../Sermons/Sermons";

const Home = () => {
  return (
    <>
      <Header />
      <section className={classes.home}>
        <section className={classes.home_content}>
          <section className={classes.hero}>
            <section className={classes.hero_overlay}></section>
            <section className={classes.hero_text}>
              <span>The house of bread & messages</span>
              <p className={classes.heading}>
                Welcome to <br />
                Guiding Light Assembly
              </p>
              <span>
                A Life Development Church with practical teachings and loving
                relationships, led by Apostle Israel Abam
              </span>
              <a href="#" className={classes.discover_more}>
                Discover More
              </a>
            </section>

            <img src={papaTeach} alt="" className={classes.papa_teach} />
          </section>
          {/* Welcome Text */}
          <section className={classes.welcome_text}>
            <p className={classes.welcome_text_left}>
              <span className={classes.welcome_to_}>Welcome to</span> <br />{" "}
              <span className={classes.gla_}>Guiding Light Assembly</span>
            </p>
            <p className={classes.gla_desc}>
              A Life Development Church with practical teachings and loving
              relationships, led by Apostle Israel Abam
            </p>
          </section>
          {/* Welcome Text */}
          {/* Cards */}
          <section className={classes.flip_cards}>
            {/* flip card start */}
            <section className={classes.flip_card}>
              <div className={classes.flip_card_inner}>
                <div className={classes.flip_card_front}>
                  <img
                    src={worship}
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className={classes.flip_card_back}>
                  <div className={classes.flip_card_back_heading}>
                    <img src={headingImg} alt="headingImg" />
                    <h2>Refreshing Worship</h2>
                  </div>
                  <p>
                    {" "}
                    We create a space where our congregation can come together
                    to connect with God, strengthen their faith, and find
                    spiritual renewal and inspiration. It's a central aspect of
                    Christian community life and practice.
                  </p>
                </div>
              </div>
            </section>
            {/* flip card start */}
            {/* flip card start */}
            <section className={classes.flip_card}>
              <div className={classes.flip_card_inner}>
                <div className={classes.flip_card_front}>
                  <img
                    src={papaTeach4}
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className={classes.flip_card_back}>
                  <div className={classes.flip_card_back_heading}>
                    <img src={headingImg} alt="headingImg" />
                    <h2>Word by Revelation</h2>
                  </div>
                  <p>
                    {" "}
                    The Word helps you deepen your understanding of the Bible
                    and its teachings. It provides spiritual nourishment,
                    guidance, and a sense of community among church members.
                  </p>
                </div>
              </div>
            </section>
            {/* flip card start */}
            {/* flip card start */}
            <section className={classes.flip_card}>
              <div className={classes.flip_card_inner}>
                <div className={classes.flip_card_front}>
                  <img
                    src={groupSelfie}
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className={classes.flip_card_back}>
                  <div className={classes.flip_card_back_heading}>
                    <img src={headingImg} alt="headingImg" />
                    <h2> Believers' Community</h2>
                  </div>
                  <p>
                    {" "}
                    We believe regular fellowship and worship within a Christian
                    community are important for mutual edification,
                    encouragement, and spiritual growth.
                  </p>
                </div>
              </div>
            </section>
            {/* flip card start */}
            {/* flip card start */}
            <section className={classes.flip_card}>
              <div className={classes.flip_card_inner}>
                <div className={classes.flip_card_front}>
                  <img
                    src={children}
                    alt=""
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className={classes.flip_card_back}>
                  <div className={classes.flip_card_back_heading}>
                    <img src={headingImg} alt="headingImg" />
                    <h2>The Kingdom Seeds </h2>
                  </div>
                  <p>
                    {" "}
                    Our involvement of children in church helps to nurture their
                    spiritual development, teach them about their faith, and
                    foster a sense of belonging and community.
                  </p>
                </div>
              </div>
            </section>
            {/* flip card start */}
          </section>
          {/* Cards End*/}
          {/* congregation */}
          <section className={classes.congregation}>
            <section className={classes.congregation_content}>
              {/* <img src={papaRed} alt="" className={classes.papaTeach2}/> */}
              <section className={classes.congregation_content_text}>
                <p className={classes.living_church}>We are a living church</p>
                <p className={classes.shift}>
                  Get Ready for a shift in your life through the WORD
                </p>
                <p className={classes.body_congregation_text}>
                  We are a gathering of believers that love the Lord Jesus
                  Christ, and seek to raise disciples who will go on to be
                  leaders in different fields of endeavour, living their lives
                  as witnesses to their faith in Jesus Christ, and positively
                  impacting their spheres of influence.
                </p>
                <p className={classes.body_congregation_text}>
                  We believe in the power of the Holy Ghost to equip and enable
                  believers to live their lives for Christ and enjoy the
                  abundant life that He promises, whilst being tangibly relevant
                  to our communities.
                </p>
                <p className={classes.body_congregation_text}>
                  We commit to members' growth through regular worship services,
                  educational programs, pastoral care, and community service
                  opportunities. This dedication fosters a spiritually maturing
                  congregation, enriching their faith journeys.
                </p>
              </section>
            </section>
          </section>
          {/* congregation end*/}
          {/* testimonies start */}
          <section className={classes.testimonies}>
            <p className={classes.testimonies_text}>
              It's the Lord's Doing Testimonies Testimonies contribute to the
              spiritual growth and edification of believers, fostering a deeper
              sense of faith, unity, and connection among members. We celebrate
              God's work in individuals' lives because it provides valuable
              lessons and inspiration to the entire congregation.
            </p>
            {/* testifiers start */}
            <section className={classes.testifiers}>
              {/* testifier start */}
              <section className={classes.testifier}>
                <div className={`${classes.face} ${classes.face1}`}>
                  <div className={classes.content}>
                    <p style={{ marginTop: "1rem" }}>
                      God has been good to me and my family. He met us at the
                      point of our needs in the most trying moments of our
                      lives. We have come to return the glory to JESUS. To Him
                      alone be the glory!
                    </p>
                    <h3 style={{ marginTop: "2rem" }}>Adacha</h3>
                  </div>
                </div>
                <section className={classes.testifierImg}>
                  <img src={testifier1} alt="testifier1" />
                </section>
              </section>
              {/* testifier start */}
              {/* testifier start */}
              <section className={classes.testifier}>
                <div className={`${classes.face} ${classes.face1}`}>
                  <div className={classes.content}>
                    <p style={{ marginTop: "1rem" }}>
                      God has been good to me and my family. He met us at the
                      point of our needs in the most trying moments of our
                      lives. We have come to return the glory to JESUS. To Him
                      alone be the glory!
                    </p>
                    <h3 style={{ marginTop: "2rem" }}>Favour</h3>
                  </div>
                </div>
                <section className={classes.testifierImg}>
                  <img src={testifier2} alt="testifier2" />
                </section>
              </section>
              {/* testifier end */}
              {/* testifier start */}
              <section className={classes.testifier}>
                <div className={`${classes.face} ${classes.face1}`}>
                  <div className={classes.content}>
                    <p style={{ marginTop: "1rem" }}>
                      God has been good to me and my family. He met us at the
                      point of our needs in the most trying moments of our
                      lives. We have come to return the glory to JESUS. To Him
                      alone be the glory!
                    </p>
                    <h3 style={{ marginTop: "2rem" }}>Peter</h3>
                  </div>
                </div>
                <section className={classes.testifierImg}>
                  <img src={testifier3} alt="testifier3" />
                </section>
              </section>
              {/* testifier start */}
            </section>
            {/* testifiers end */}
          </section>
          {/* testimonies start */}
          {/* sermons start */}
          <section className={classes.sermons}>
            <h1>Feed Your Spirit With the Word of God</h1>
            <p>Sermons by Apostle Israel Abam, Lead Pastor of GLA</p>
            <section className={classes.sermon_videos}>
              {" "}
              <iframe
                
                src="https://www.youtube.com/embed/CjGS9dRvjzk?si=4K6325X8fBr2WbNM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style={{ borderRadius: "5px" }}
              ></iframe>
              <iframe
                
                src="https://www.youtube.com/embed/5-TkFNvkabM?si=j_bhgL30YLGC9msw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style={{ borderRadius: "5px" }}
              ></iframe>
              <iframe
               
                src="https://www.youtube.com/embed/RSSWTdUcdVQ?si=GJ3sXRHqkiRPPxGO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style={{ borderRadius: "5px" }}
              ></iframe>
            </section>
          </section>

          {/* sermons end */}
          {/* meet pastors */}
          <section className={classes.meet_pastors}>
            {" "}
            <section className={classes.meet_pastors_content}>
              <p>
                We look forward to having you in church. Come and be blessed!
              </p>
            </section>
            <img
              src={papaNmama}
              alt="papaNmama"
              className={classes.papaNmama}
            />
          </section>
          {/* meet pastors */}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Home;
