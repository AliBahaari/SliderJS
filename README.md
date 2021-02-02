# SliderJS

***SliderJS*** will creates responsive presentation websites. SliderJS just uses **JavaScript**.

## Add Project

Just link SliderJS to your project :
```
<script src="Slider - 1.0.0.min.js"></script>
```

## Initializing

First, create a `div` with `.SliderJS` class and as many as `div` you want inside it :
```
<div class="SliderJS">
  <div></div>
  <div></div>
  <div></div>
</div>
```

Then, you should initialize properties; just copy the code below and paste it after the code above.
```
<script>
  Slider({
    buttonWidth: '15px',    // Navigation button `width` property
    buttonHeight: '15px',    // Navigation button `height` property
    backGround: '#000',    // Navigation button `background-color` property
    borderRadius: '100%',    // Navigation button `border-radius` property
    borderWidth: '2px',    // Navigation button `border-width` property
    borderStyle: 'solid',    // Navigation button `border-style` property
    borderColor: '#EEE'    // Navigation button `border-color` property
  });
</script>
```
*Note :* All the properties above should be filled; all of them are ***String***.

## Minified

In the minified version, it uses Babel to feel free for using in old version browsers.
