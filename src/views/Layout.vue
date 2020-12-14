<template>
  <div>
    <div class="title">
         <h1>Diagrama de influência<br>do Sistema de Obesidade</h1>
        <font-awesome-icon id="information" icon="info-circle" />
    </div>
    <ObesityDiagram @update="handleUpdate" class="map" />
    <div id="helpers">
      <Reference class="reference"  :descriptionReference="descriptionReference"/>
      <Subtitle />
    </div>
  </div>
</template>

<script>
import ObesityDiagram from "@/components/ObesityDiagram"
import Reference from "@/components/Reference"
import Subtitle from "@/components/Subtitle"

export default {
  name: 'Layout',
  components: {
    ObesityDiagram,
    Reference,
    Subtitle
  },
  data(){
    return{
      descriptionReference: ''
    }
  },
  methods:{
    handleUpdate(description){
      this.descriptionReference = description
    }
  }
}
</script>