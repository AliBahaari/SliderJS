# SliderJS
**SliderJS** will make your website to behave like presentation. SliderJS just uses ***JavaScript*** and nothing else.

## Add Project
Just link SliderJS to your project, For example :
```
<script src="Slider - 1.0.0.min.js"></script>
```

## Initializing
Then, You should initialize properties, Just copy the code below and paste it after the code above.
```
<script>
  Slider({
    buttonWidth: '15px',    // Buttons width
    buttonHeight: '15px',    // Buttons height
    backGround: '#000',    // Buttons background
    borderRadius: '100%',    // How much the Corners of the button should be round?
    borderWidth: '2px',    // Border width
    borderStyle: 'solid',    // Border style
    borderColor: '#EEE'    // Border color
  });
</script>
```
Note : All the properties above should be filled; All are ***String***.

## Minified
In minified version that actually is being used for production, It uses **Babel** for SliderJS to feel free for using in old browsers.
