<template>
  <div>
     <!-- <div class="title">
         <h1>Diagrama de influência<br>do Sistema de Obesidade</h1>
         <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <img class="reference-button" src='info.svg'>
        </a>
        <font-awesome-icon icon="user-secret" />
    </div> -->
    <!-- <div class="container"> -->
    <!-- <div id="container" class="float-right"> -->
    <ObesityDiagram @update="handleUpdate" class="map" />
    <!-- </div> -->
    <Reference class="reference"  :descriptionReference="descriptionReference"/>
    <!-- </div> -->
    <!-- <div class="legend"> -->
      <!-- <img src="legenda.svg" /> -->
      <!-- <ObesityDiagram /> -->
    <!-- </div> -->
    <!-- <div class="collapse references" id="collapseExample">
       <h2>Referência:</h2>
       <a id="demo">Clique nos itens do mapa para mais detalhes</a>
    </div> -->
  </div>
</template>

<script>
import ObesityDiagram from "@/components/ObesityDiagram"
import Reference from "@/components/Reference"

export default {
  name: 'Layout',
  components: {
    ObesityDiagram,
    Reference
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
<style lang="scss">
  .map{
    z-index: 100;
  }
  .reference {
    z-index: 300;
  }
  .container{
    max-height: 80vh;
    // position: absolute!important;
  }
</style>