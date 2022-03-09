import css from "../styles/about.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import foodwaste from "/public/images/aboutPageImages/foodwaste.jpeg";
import Farmwaste from "/public/images/aboutPageImages/farmwaste.jpeg";
import carouselImage1 from "/public/images/aboutPageImages/carouselImage1.jpg";
import carouselImage2 from "/public/images/aboutPageImages/carouselImage2.jpg";
import { BiDonateHeart } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

function About() {
  return (
    <div className={css.container}>
      <Head>
        <title>SalVeg | About</title>
      </Head>
      <Carousel
        style={{
          position: "relative",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <Carousel.Item
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            justifySelf: "center",
          }}
        >
          <Image
            className="d-block w-100"
            src={foodwaste}
            alt="First slide"
            layout="fill"
            objectFit="fill"
          />
          <Carousel.Caption>
            <h3 className={css.carouselCaption}>
              Supermarkets look for fruit and vegetables that fit a &apos;beauty
              standard &apos; - they must be of a certain size, shape or colour
              to be sold
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            paddingBottom: "20%",
          }}
        >
          <Image
            className="d-block w-100"
            src={carouselImage1}
            alt="Second slide"
            layout="fill"
            objectFit="fill"
          />
          <Carousel.Caption>
            <h3 className={css.carouselCaption}>
              If food waste were a country, it would be the third-largest
              greenhouse gas emitter, after China and the US - Stop Wasting Food
              Movement, 2020
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            paddingBottom: "20%",
          }}
        >
          <Image
            className="d-block w-100"
            src={carouselImage2}
            alt="Third slide"
            layout="fill"
            objectFit="fill"
          />
          <Carousel.Caption>
            <h3 className={css.carouselCaption}>
              In UK households, 2 million tonnes of the food that goes to waste
              is untouched or opened/started but not finished - Wrap, 2017
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className={css.title}>
        It is estimated that 3.6 million tonnes of food is wasted before it
        leaves UK farms
      </h1>
      <div className={css.contentContainer}>
        <div className={css.content}>
          <Image
            className={css.contentImage}
            id={css.image}
            src={Farmwaste}
            alt="Card image cap"
            width={600}
            height={500}
          ></Image>
          <div className={css.textContent}>
            <h2 className={css.contentTitle}>
              Why is food wasted at the farm?
            </h2>
            <p>
              It&apos;s time for us to comprehend that food comes in all
              different colours, shapes and size. Increasingly in the UK, our
              food system prizes uniformity over taste and the environment,
              which means that fruit and vegetables that look slightly out of
              place in supermarkets&apos; standards are wasted and ignored. The
              reality is that we live in a world where on-demand everything is
              the norm. This means farmers are left with surplus produce, If we
              want berries in winter and Parsnips in summer, we can walk into
              almost any supermarket and it&apos;s available.
            </p>
          </div>
        </div>
        <div className={css.content}>
          <Image
            className={css.contentImage}
            id={css.image}
            src={Farmwaste}
            alt="Card image cap"
            width={600}
            height={500}
          ></Image>
          <div className={css.textContent}>
            <h2 className={css.contentTitle}>You can make a difference</h2>
            <p>
              It&apos;s time for us to comprehend that food comes in all
              different colours, shapes and size. shapless not tasteless..
              Increasingly in the UK, our food system prizes uniformity over
              taste and the environment, which means that fruit and vegetables
              that look slightly out of place in supermarkets&apos; standards
              are wasted and ignored. The reality is that we live in a world
              where on-demand everything is the norm. This means farmers are
              left with surplus produce, If we want berries in winter and
              Parsnips in summer, we can walk into almost any supermarket and
              it&apos;s available.
            </p>
          </div>
        </div>
      </div>
      <div className={css.sloganContainer}>
        <p className={css.slogan}>
          Might be shapeless but we guarantee it&apos;s NOT{" "}
          <span className={css.tasteless}>tasteless</span>
        </p>
      </div>
      <div className={css.bottomContainer}>
        <div className={css.infoContainer}>
          <GiFruitBowl className={css.donateicon} />
          <button className={css.button}>Our Product</button>
        </div>
        <div className={css.infoContainer}>
          <FaHandsHelping className={css.donateicon} />
          <button className={css.button}>Get Involved</button>
        </div>
        <div className={css.infoContainer}>
          <BiDonateHeart className={css.donateicon} />
          <button className={css.button}>Make a Donation</button>
        </div>
      </div>
    </div>
  );
}
export default About;

{
  /* <>
      <Head>
        <title>SalVeg | About</title>
      </Head>
      <div className={css.about}>
        <h1 className={css.firstheader}>
          It is estimated that 3.6 million tonnes of food is wasted before it
          leaves UK farms
        </h1>
        <Carousel
          style={{
            position: "relative",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <Carousel.Item
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              justifySelf: "center",
            }}
          >
            <Image
              className="d-block w-100"
              src={Farmwaste}
              alt="First slide"
              layout="fill"
              objectFit="fill"
            />
            <Carousel.Caption>
              <h3 id={css.secondheader}>
                Supermarkets look for fruit and vegetables that fit a
                &apos;beauty standard &apos; - they must be of a certain size,
                shape or colour to be sold
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              paddingBottom: "20%",
            }}
          >
            <Image
              className="d-block w-100"
              src={Vegimage2}
              alt="Second slide"
              layout="fill"
              objectFit="fill"
            />
            <Carousel.Caption>
              <h3 id={css.container}>
                If food waste were a country, it would be the third-largest
                greenhouse gas emitter, after China and the US - Stop Wasting
                Food Movement, 2020
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              paddingBottom: "20%",
            }}
          >
            <Image
              className="d-block w-100"
              src={Vegimage2}
              alt="Third slide"
              layout="fill"
              objectFit="fill"
            />
            <Carousel.Caption>
              <h3 id={css.container}>
                In UK households, 2 million tonnes of the food that goes to
                waste is untouched or opened/started but not finished - Wrap,
                2017
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <div className={css.container}>
            <Image
              className={css.item1}
              id={css.image}
              src={Vegimage2}
              alt="Card image cap"
              width={1000}
              height={1000}
            ></Image>
            <div className={css.item2}>
              <h4>WHY IS FOOD WASTED AT THE FARM?</h4>
              <p>
                {" "}
                It&apos;s time for us to comprehend that food comes in all
                different colours, shapes and size. shapless not tasteless..
                Increasingly in the UK, our food system prizes uniformity over
                taste and the environment, which means that fruit and vegetables
                that look slightly out of place in supermarkets&apos; standards
                are wasted and ignored. The reality is that we live in a world
                where on-demand everything is the norm. This means farmers are
                left with surplus produce, If we want berries in winter and
                Parsnips in summer, we can walk into almost any supermarket and
                it&apos;s available.
              </p>
            </div>
          </div>
          <div className={css.container}>
            <Image
              className={css.item1}
              id={css.image}
              src={Vegimage2}
              alt="Card image cap"
              width={400}
              height={400}
            ></Image>
            <p className={css.paragraph}>
              {" "}
              Here at SalVeg, We&apos;re salvaging perfectly good vegetables and
              fruits by connecting farmers/local food growers with consumers who
              would like to buy produce at a lower price..
            </p>
          </div>
          <div className={css.sloganContainer}>
            <h4>YOU CAN MAKE A DIFFERENCE</h4>
            <p>
              You can get delicious fruit and vegetables delivered right to your
              door
            </p>
            <p id={css.slogan}>
              Might be shapeless but we guarantee It&apos;s NOT{" "}
              <span id={css.tasteless}>tastless</span>
            </p>
          </div>
          <div className={css.container}>
            <Image
              className={css.image1}
              src={SalvegIcon}
              alt="Salveg"
              width={200}
              height={200}
            ></Image>
            <Image
              className={css.image2}
              src={Helpinghand}
              alt="Get involved image"
              width={200}
              height={200}
            ></Image>
            <BiDonateHeart className={css.donateicon} />
          </div>
          <div className={css.container}>
            <button type="button Salveg-button" id={css.button1}>
              SalVeg our fruit/veg
            </button>
            <button type="button getInvolved-button" id={css.button2}>
              Get Involved
            </button>
            <button type="button Donate-button" id={css.button3}>
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </> */
}
