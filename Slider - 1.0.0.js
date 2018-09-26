function Slider(objectVar) {

  var buttonWidth = objectVar.buttonWidth;
  var buttonHeight = objectVar.buttonHeight;
  var backGround = objectVar.backGround;
  var borderRadius = objectVar.borderRadius;
  var borderWidth = objectVar.borderWidth;
  var borderStyle = objectVar.borderStyle;
  var borderColor = objectVar.borderColor;

  var targetElements = document.querySelectorAll('.SliderJS div');
  document.body.style.overflow = 'hidden';

  for (var childElement of targetElements) {
    childElement.style.cssText = `
      width: 100%;
      height: 100vh;
    `;
  }

  var sliderButtons = document.createElement('ul');
  sliderButtons.className = 'SliderButtons';
  sliderButtons.style.cssText = `
    position: fixed;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    list-style-type: none;
  `;

  for (var i = 0; i < targetElements.length; i++) {
    var sliderButton = document.createElement('li');
    sliderButton.style.cssText = `
      width: ${buttonWidth};
      height: ${buttonHeight};
      background: ${backGround};
      border-radius: ${borderRadius};
      border-width: ${borderWidth};
      border-style: ${borderStyle};
      border-color: ${borderColor};
      margin: 5px 0;
      cursor: pointer;
    `;
    sliderButtons.appendChild(sliderButton);
  }
  document.body.appendChild(sliderButtons);

  document.querySelectorAll('.SliderButtons li').forEach(selectedButton => {
    selectedButton.onclick = function() {
      var buttonIndex = [...selectedButton.parentElement.children].indexOf(selectedButton);

      document.querySelectorAll('.SliderJS div').forEach(selectedFrame => {
        var frameIndex = [...selectedFrame.parentElement.children].indexOf(selectedFrame);
        
        if (buttonIndex == frameIndex) {
          window.scrollTo({
            top: selectedFrame.offsetTop,
            left: 0,
            behavior: 'smooth'
          });
        }
      });
    }    
  });  
}