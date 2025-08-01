import "./App.css";
const images = [
  { imageSrc: "/photobooth.mp4", imageAlt: "image1" },
  { imageSrc: "/beach.jpeg", imageAlt: "image2" },
  { imageSrc: "/birthday.jpeg", imageAlt: "image3" },
  { imageSrc: "/greenGrass.jpeg", imageAlt: "image4" },
  { imageSrc: "/photobooth.mp4", imageAlt: "image5" },
  { imageSrc: "/cactusbday.jpeg", imageAlt: "image6" },
  { imageSrc: "/testPriya.JPG", imageAlt: "image7" },
  { imageSrc: "/starbucks.jpeg", imageAlt: "image8" },
];
const images1 = [
  { imageSrc: "/babyshoepriya.jpeg", imageAlt: "image1" },
  { imageSrc: "/mirror.jpeg", imageAlt: "image2" },
  { imageSrc: "/carpriya_again.jpeg", imageAlt: "image3" },
  { imageSrc: "/icongreen_priya.jpeg", imageAlt: "image4" },
  { imageSrc: "/tspriya.jpeg", imageAlt: "image5" },
  { imageSrc: "/seriouspriya.jpeg", imageAlt: "image6" },
  { imageSrc: "/red_black.jpeg", imageAlt: "image7" },
  { imageSrc: "/snakepriya.jpeg", imageAlt: "image8" },
];
const images2 = [
  { imageSrc: "/funnybday.jpeg", imageAlt: "image1" },
  { imageSrc: "/anothermirror.jpeg", imageAlt: "image2" },
  { imageSrc: "/workpriya.jpeg", imageAlt: "image3" },
  { imageSrc: "/photobooth.jpeg", imageAlt: "image4" },
  { imageSrc: "/carpriya.jpeg", imageAlt: "image5" },
  { imageSrc: "donut.jpeg", imageAlt: "image6" },
  { imageSrc: "/stpaddys.jpeg", imageAlt: "image7" },
  { imageSrc: "/sexy.jpeg", imageAlt: "image8" },
];
const App = () => {
  return (
    <>
      <div className="banner flex max-h-screen justify-center">
        <div className="slider max-sm:scale-75 ">
          {images.map((image, i) => {
            return (
              
              <div
                key={i}
                style={{ "--position": i + 1 }}
                className={`item rounded-2xl`}
              >

                {image.imageSrc === "/photobooth.mp4" ? <video className="object-cover rounded-2xl w-full h-full" loop autoPlay muted>
                  <source src={image.imageSrc} />
                </video> : <img
                  src={image.imageSrc}
                  className="rounded-2xl"
                  alt={image.imageAlt}
                />}
                
              </div>
            );
          })}
          {images1.map((image, i) => {
            return (
              <div
                key={i}
                style={{ "--position": i + 1 }}
                className={`item item-double  rounded-2xl `}
              >
                <img
                  src={image.imageSrc}
                  className="rounded-2xl"
                  alt={image.imageAlt}
                />
              </div>
            );
          })}
          {images2.map((image, i) => {
            return (
              <div
                key={i}
                style={{ "--position": i + 1 }}
                className={`item item-triple  rounded-2xl `}
              >
                <img
                  src={image.imageSrc}
                  className="rounded-2xl"
                  alt={image.imageAlt}
                />
              </div>
            );
          })}
        </div>
        <div className="content absolute top-0">
          <header className=" rounded-2xl min-sm:p-4 max-sm:p-2  relative -z-[0.5] mt-24 h-fit">
            <h1 className="min-sm:text-5xl text-2xl text-shadow-2xs pb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br to-green-700 via-yellow-200 from-purple-700">
              Happy Girlfriend Day!!
            </h1>
          </header>
        </div>
      </div>
      <video className="fixed  object-cover inset-0 w-full h-full -z-20" autoPlay muted loop>
        <source src="/IMG_4920.mov" />
      </video>
    </>
  );
};

export default App;
