<template>
  <div id="container">
    <div class="title">
      <h1 v-if="isDesktop">
        Mapa Multissistêmico de<br />
        Evidências sobre Obesidade
      </h1>
      <font-awesome-icon id="information" icon="info-circle" />
    </div>
    <ObesityDiagram @update="handleUpdate" class="map" />
    <div id="helpers" v-if="isDesktop">
      <Reference
        class="reference"
        :descriptionReference="descriptionReference"
      />
      <Subtitle />
    </div>
  </div>
</template>

<script>
import ObesityDiagram from '@/components/ObesityDiagram';
import Reference from '@/components/Reference';
import Subtitle from '@/components/Subtitle';

export default {
  name: 'Layout',
  components: {
    ObesityDiagram,
    Reference,
    Subtitle,
  },
  data() {
    return {
      descriptionReference: '',
    };
  },
  computed: {
    isDesktop() {
      if (screen.width >= 1366) return true;
      else
        this.$buefy.dialog.alert({
          title: '',
          message:
            '<b> Mapa Multissistêmico de Evidências sobre Obesidade </b> <br><br> Essa aplicação é melhor visualizada em modo retrato no celular. Para exibição detalhada, acesse através do computador.',
          confirmText: 'OK',
        });
      return false;
    },
  },
  methods: {
    handleUpdate(description) {
      this.descriptionReference = description;
    },
  },
};
</script>
