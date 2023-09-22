<template>
  <div class="projectdiv">
    <h2>You are viewing the {{ projectname }} project.</h2>
    <div v-if="showImage" class="projectdiv">
      <img :src="img" class="imagess">
    </div>
    <button @click="toggleShowImage" class="showimagebutton">
      <span v-if="showImage">Hide image</span>
      <span v-if="!showImage">Show image</span>
    </button>
    <p class="para"> {{ description }} </p>
  </div>


  <form>
    <input class="radiobutton" type="radio" name="project"
      @click="projectname = 'Rocket Game', description = description1, img = img1">Project 1
    <br>
    <input class="radiobutton" type="radio" name="project"
      @click="projectname = 'Knight Program', description = description2, img = img2">Project 2
    <br>
    <input class="radiobutton" type="radio" name="project"
      @click="projectname = 'Guessing Game', description = description3, img = img3">Project 3
  </form>
</template>
  

<script>
export default {
  data() {
    return {
      img: 'https://cdn.discordapp.com/attachments/523850702595031041/1107617917538947072/image.png',
      showImage: true,
      description: 'This is a game created within C++, many different coding artefacts were used in this project including structs, enums, and custom data types. the game consisted of the player, which was the rocket ship, and many collectibles around the map. The player had to collect as many collectibles without running out of fuel.',
      projectname: 'Rocket Game',
      description1: 'This is a game created within C++, many different coding artefacts were used in this project including structs, enums, and custom data types. the game consisted of the player, which was the rocket ship, and many collectibles around the map. The player had to collect as many collectibles without running out of fuel.',
      description2: 'This is a program created within C++ which simulates a Knight game data input selection. When the program is launched, the user is prompted to input the data for a single knight. Options to update any of the selections are given in case a wrong input was submitted, or the user wishes to change the information.',
      description3: 'This is a game made within Python, the aim of the game is to guess a number within 1 and 100. The number will be randomised on each play and players will have to input their guesses. The game will give feedback on whether the number is too low or too high, and the user will be able to make another guess. If the number is the correct one, the system will output a message to congratulate the user and show how many attempts it took to guess the number.',
      img1: 'https://cdn.discordapp.com/attachments/523850702595031041/1107617917538947072/image.png',
      img2: 'https://cdn.discordapp.com/attachments/523850702595031041/1148528847638245416/image.png',
      img3: 'https://cdn.discordapp.com/attachments/523850702595031041/1108247293641097236/image.png'
    }
  },

  methods: {
    toggleShowImage() {
      this.showImage = !this.showImage
    }
  }
}


</script>
