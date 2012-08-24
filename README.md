# Just Slide

Just Slide! is a jQuery plugin for an image slideshow that puts you in control.

I wrote this because I get asked to create slideshows all the time, and all the existing plugins I've seen are way too overdone. I want to choose for myself how to do the forward and back buttons (if any), etc. So Just Slide! lets you set up a slideshow, and gives you a method to call whenever you want to progress to the next slide. You call the method, and it advances. That's it! The rest you can do however you like.

## Demo

You can [see a demo here](http://pjungwir.github.com/just-slide/example.html). To show off the flexibility of Just Slide!, that demo controls two separate slideshows with a single timing loop. This is what you can do when you've got an API that just does what you tell it to.

## Documentation 

To use Just Slide!, first create a `div` filled with all the images you want to show:

    <div id="portal">
      <img src="img/cat1.jpeg">
      <img src="img/cat2.jpeg">
      <img src="img/cat3.jpeg">
    </div>

Then give the portal a fixed width/height, and make it `position:relative`.
Hide all the images inside except the first one:

    #portal {
      width: 240px;
      height: 194px;
      position: relative;
    }

    #portal img {
      display: none;
    }

    #portal img:first-child {
      display: inline;
    }

(If you don't want to use `:first-child`, you could also hide all the images and give the `#portal` div a background-image equal to the first slide.)

Finally, include this javascript:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script src="jquery.just-slide.js"></script>
    <script type="text/javascript">
    $(function() {
      $('#portal').justSlide();
      setInterval(function() {
        $('#portal').nextSlide();
      }, 3000);
    });

Use the `justSlide` function to initialize the slider, then call `nextSlide` whenever you want a new slide.

## Roadmap

If I get the urge, I will add a prevSlide method and some customization hooks, e.g. to change the transition speed. I may also add more transition effects, like fade, etc.


