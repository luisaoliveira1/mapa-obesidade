<template>
  <div class="reference-box">
      <h1>{{this.descriptionReference.variable}}</h1>
      <p>{{this.descriptionReference.description}}</p>
  </div>
</template>
<script>
export default {
  name: 'Reference',
  props:['descriptionReference'],
  data() {
      return {
          isActive: true
      }
  }
}
</script>
<style lang="scss">
.reference-box {
  position: absolute;
  width: 350px;
  height: 200px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 15px 15px 15px 15px;
  bottom: 30px;
  p {
    text-align: justify;
    text-justify: inter-word;
  }
}
</style>