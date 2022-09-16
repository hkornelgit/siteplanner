import React, { useState } from 'react';
import { render } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, History, HashNavigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import Draggable from 'react-draggable';
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, History, HashNavigation]);

const contentTypes = [
  [0, "Accordions", 1],
  [1, "Call-to-actions", 10],
  [2, "Contacts", 10],
  [3, "Contents", 10],
  [4, "Countdowns", 4],
  [5, "Features", 33],
  [6, "Forms", 12],
  [7, "Intro-covers", 4],
  [8, "Lists", 2],
  [9, "News", 5],
  [10, "Pricings", 16],
  [11, "Steps", 5],
  [12, "Tabs", 1],
  [13, "Teams", 8],
  [14, "Testimonials", 10],
  [15, "Timelines", 3]
];
const siteContent = [];
let db = 0;
let headerState = 0;
let footerState = 0;
let blocksArray = [];

function HeaderBlock() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 20; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" data-hash={`slider-${i}`}>
        <button>
          <img src={process.env.PUBLIC_URL + `/Components/header/${i + 1}.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
        </button>
      </SwiperSlide>
    );
  }


  return (
    <React.Fragment>
      <header>
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          pagination
          autoHeight
          loop
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
        <Swiper className="thumbSlider"
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={3}

        >
          {slides}
        </Swiper>
      </header>
    </React.Fragment>
  );
}





function ContentBlock(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [display, setDisplay] = useState(1);
  const [comment, setComment] = useState(false);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };
  let commentText = "";
  const slides = [];
  for (let i = 0; i < contentTypes[props.type][2]; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" data-history={`slide-${i}`}>
        <button>
          <img onerror="break;"
            src={process.env.PUBLIC_URL + `/Components/main/${contentTypes[props.type][1]}/${i + 1}.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
        </button>
      </SwiperSlide>
    );
  }
  if (display == 1) {
    db++;
    siteContent.push([db, props.type]);
    console.log(siteContent);
    return (
      <section data-id={db} className="sectionBlock" data-type={props.type}>
        {comment ? <Draggable><div onChange={() => {console.log("valami")}} contentEditable className="commentBox form-control">Megjegyzés...</div></Draggable> : null}
        <div className="options">
          <a className="deleteBlock" href="#" onClick={() => setDisplay(0)}>Törlés</a>
          <a className="ms-2 addComment" href="#" onClick={() => setComment(true)}>Megjegyzés hozzáadása</a>
        </div>
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          pagination
          autoHeight
          loop
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
        <Swiper className="thumbSlider"
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={5}

        >
          {slides}
        </Swiper>
      </section>
    );
  } else {
    for (let i = 0; i <= siteContent.length - 1; i++) {
      if (siteContent[i][0] == db) {
        siteContent[i].splice(0, 2);
      }
    }
    return false;
  }
}

function FooterBlock() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 12; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" data-hash={`slide-${i}`}>
        <button>
          <img onerror="break;"
            src={process.env.PUBLIC_URL + `/Components/footer/${i + 1}.jpg`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
        </button>
      </SwiperSlide>
    );
  }

  const onAddBtnClick = event => {
    setThumbsSwiper(thumbsSwiper.concat(<Swiper>asd</Swiper>))
  }

  return (
    <React.Fragment>
      <footer>
        <Swiper
          modules={[History, HashNavigation]}
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          pagination
          autoHeight
          loop
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>

      </footer>
    </React.Fragment>
  );
}




export { HeaderBlock, ContentBlock, FooterBlock, contentTypes, siteContent };


