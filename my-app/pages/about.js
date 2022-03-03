import css from "../styles/about.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import Farmwaste from "/public/images/aboutPageImages/farmwaste.jpeg";
import Vegimage2 from "/public/images/aboutPageImages/Vegpic.jpeg";
import { BiDonateHeart} from "react-icons/bi"
import Helpinghand from "/public/images/aboutPageImages/helpinghand.png"
import SalvegIcon from "/public/images/aboutPageImages/salveg.png"



function About() {
  return (
    <>
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
              src= {Helpinghand}
              alt="Get involved image"
              width={200}
              height={200}
            ></Image>
         
    <BiDonateHeart className={css.donateicon}/>
        
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
    </>
  );
}
export default About;
