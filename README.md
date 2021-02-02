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
    buttonWidth: '15px',    // Buttons `width`
    buttonHeight: '15px',    // Buttons `height`
    backGround: '#000',    // Buttons `background-color`
    borderRadius: '100%',    // Buttons `border-radius`
    borderWidth: '2px',    // Buttons `border-width`
    borderStyle: 'solid',    // Buttons `border-style`
    borderColor: '#EEE'    // Buttons `border-color`
  });
</script>
```
*Note :* All the properties above should be filled; all of them are ***String***.

## Minified

In the minified version, it uses Babel to feel free for using in old version browsers.
