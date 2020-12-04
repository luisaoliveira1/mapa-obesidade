<template>
  <div>
     <div class="title">
         <!-- <h1>Diagrama de influência<br>do Sistema de Obesidade</h1> -->
         <!-- <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <img class="reference-button" src='info.svg'>
        </a> -->
     </div>
    <div id="container" class="float-right">
      <ObesityDiagram />
    </div>
    <!-- <div class="legend"> -->
      <!-- <img src="legenda.svg" /> -->
      <!-- <ObesityDiagram /> -->
    <!-- </div> -->
    <div class="collapse references" id="collapseExample">
       <h2>Referência:</h2>
       <a id="demo">Clique nos itens do mapa para mais detalhes</a>
    </div>
  </div>
</template>

<script>
import ObesityDiagram from "@/components/ObesityDiagram"

export default {
  name: 'Layout',
  components: {
    ObesityDiagram
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
  border: none!important
}
</style>