<template>
    <div class="aboutmediv">


    <h3 style="margin-top: 20px;">My Journey</h3>
    <p style="width: 400px;">My journey in the world of IT began in 2023. Since then, I've had the opportunity to explore various facets of information technology, constantly expanding my knowledge and honing my skills.</p>
    <h3>Why IT?</h3>
    <p style="width: 400px;">I've always been drawn to the ever-evolving field of IT because it's where technology meets creativity. The ability to take an idea and turn it into a tangible, functional solution is what drives me. Whether it's developing software, designing user-friendly interfaces, or optimizing systems for efficiency, I thrive on the challenges and rewards that IT offers.</p>

    <div class="aboutmediv">
      <p :style="dynamicStyle">What is my favouite colour?</p>
      <button @click="changeStyle">Click Me</button>
    </div>
  </div>



  </template>
  
  <script>
 export default {
  data() {
    return {
      dynamicStyle: {
        // Initial style
        backgroundColor: 'white',
        color: 'black',
        fontSize: '20px',
      },
    };
  },
  methods: {
    changeStyle() {
      // Update the style when the button is clicked
      this.dynamicStyle.backgroundColor = 'lightgreen';
      this.dynamicStyle.color = 'black';
      this.dynamicStyle.fontSize = '20px';
      // You can add more style changes here as needed.
    },
  },
};
  </script>


  
  