<template>
  <div class="reference-box" v-if="this.descriptionReference">
    <a click="show = !show"><font-awesome-icon id="collapse" icon="times" /></a>
    <h1>{{this.descriptionReference.variable}}</h1>
    <p>{{this.descriptionReference.description}} <span v-if="this.descriptionReference.reference">(<a :key="index" v-for="(reference, index) of descriptionReference.reference" target="_blank" :href="descriptionReference.reference[index]">{{referenceWithComma(index)}}</a>)</span></p>
  </div>
  <div class="reference-box" v-else>
      <h1>Para visualizar a descrição da variável, clique em um dos itens dentro do mapa</h1>
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
  },
  methods: {
    referenceWithComma(index){
     if(index!==this.descriptionReference.reference.length-1){
       return `${index + 1}, `;
     }else{
       return index + 1;
     }
   }
  }
}
</script>
