<template>
  <section>
    <div v-show="isActive" >
      <div class="reference-box" v-if="this.descriptionReference">
        <a class="toggle-btn" @click='toggle()'><font-awesome-icon id="collapse" icon="expand-alt" /></a>
        <h1>{{this.descriptionReference.variable}}</h1>
        <p>{{this.descriptionReference.description}} <span v-if="this.descriptionReference.reference">(<a :key="index" v-for="(reference, index) of descriptionReference.reference" target="_blank" :href="descriptionReference.reference[index]">{{referenceWithComma(index)}}</a>)</span></p>
      </div>
      <div class="reference-box" v-else>
        <a class="toggle-btn" @click='toggle()'><font-awesome-icon id="collapse" icon="expand-alt" /></a>
          <h1>Para visualizar a descrição da variável, clique em um dos itens dentro do mapa</h1>
      </div>
    </div>
    <div class="expand-icon-reference" v-show="!isActive" >
      <a class="toggle-btn" @click='toggle()'><font-awesome-icon id="collapse" icon="expand-alt" size="3x"/></a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Reference',
  props:{
    descriptionReference:{
      type: [Object, Function, String],
      default: () => {}
    },
    toggleReference:{
      type: Boolean,
      default: true
    }
  },
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
    },
    toggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>
