const welcomeScreen =
  document.getElementById("welcomeScreen");

const enterSite =
  document.getElementById("enterSite");

const music =
  document.getElementById("ourSong");

const musicButton =
  document.getElementById("musicButton");

let musicPlaying = false;


// ENTER WEBSITE + START MUSIC

enterSite.addEventListener("click", async () => {

  welcomeScreen.classList.add("hide");

  try {

    music.volume = 0.35;

    await music.play();

    musicPlaying = true;

    musicButton.textContent =
      "♫ PAUSE OUR SONG";

  } catch (error) {

    console.log(
      "Music could not start:",
      error
    );

    musicButton.textContent =
      "♫ PLAY OUR SONG";

  }

});


// MUSIC BUTTON

musicButton.addEventListener("click", async () => {

  if (musicPlaying) {

    music.pause();

    musicPlaying = false;

    musicButton.textContent =
      "♫ PLAY OUR SONG";

  } else {

    try {

      music.volume = 0.35;

      await music.play();

      musicPlaying = true;

      musicButton.textContent =
        "♫ PAUSE OUR SONG";

    } catch (error) {

      console.log(
        "Music could not play:",
        error
      );

    }

  }

});


// REVEAL ANIMATIONS

const revealElements =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );

revealElements.forEach((element) => {

  observer.observe(element);

});


// SECRET MESSAGE

const lastThing =
  document.getElementById("lastThing");

const secretMessage =
  document.getElementById("secretMessage");

const closeSecret =
  document.getElementById("closeSecret");


lastThing.addEventListener("click", () => {

  secretMessage.classList.add("show");

});


closeSecret.addEventListener("click", () => {

  secretMessage.classList.remove("show");

});


// HERO PARALLAX

const heroImage =
  document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  if (!heroImage) {
    return;
  }

  const scrollY =
    window.scrollY;

  if (scrollY < window.innerHeight) {

    heroImage.style.transform =
      `scale(1.04) translateY(${scrollY * 0.06}px)`;

  }

});