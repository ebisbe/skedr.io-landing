<template>
  <div class="wrapper">
    <q-header-small bg-image="images/jeff-sheldon-271733-unsplash.jpg">
      <h1 class="title">Agenda</h1>
      <h3><strong>21 y 22 de Julio</strong> en Sant Fost de Campsentelles</h3>
    </q-header-small>
    <q-block
      class="features-4"
      title="No lo olvides"
      desc="La competición se realizará el fin de semana del <strong>21 y el 22 de Julio</strong> en la localidad de <strong>Sant Fost de Campsentelles</strong>" />
    <div
      id="pricing-5"
      class="pricing-5 section-pricing-5 section-image"
      style="background-image: url('assets/img/bg31.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="title">El sábado 21 se realizará la 1ª Fase</h2>
            <p class="description">Y el domingo 22 de Julio los <strong>CLANES más fuertes</strong> se batirán para lograr el ansiado premio, los clanes más débiles serán eliminados.</p>
            <p class="description">El domingo se entregará a todos los atletas la bolsa del competidor y las medallas, y a los <strong>CLANES ganadores</strong> se les entregará también su correspondiente trofeo.</p>
          </div>
          <div class="col-md-7 ml-auto mr-auto">
            <div class="tab-content tab-space">
              <div
                id="personal"
                class="tab-pane active">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card card-pricing card-raised">
                      <div class="card-body">
                        <h6 class="category">1r Día</h6>
                        <h1 class="card-title">21 Julio</h1>
                        <ul>
                          <li><b>8:00-9:00h</b> Check in</li>
                          <li><b>9:30-13:30h</b> 1a Fase</li>
                          <li><b>13:30-16:00h</b> Descanso</li>
                          <li><b>16:00-19:00h</b> 2a Fase</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card card-pricing card-raised">
                      <div class="card-body">
                        <h6 class="category">2o Día</h6>
                        <h1 class="card-title">22 Julio</h1>
                        <ul>
                          <li><b>9:00-13:00h</b> Fase Final</li>
                          <li><b>13:30-14:00h</b> Entrega Premios</li>
                          <li><b>14:00h</b> Fin de Competición</li>
                          <li><b>Fiesta y Música</b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-block
      class="features-4"
      title="¡¡ QUÉDATE CON NOSOTROS HASTA EL FINAL!!"
      desc="Una vez realizada la entrega de premios ya es hora del festival. <strong>Disfruta</strong>con nosotros del cierra de fiesta <strong>con comida, bebida y DJ</strong>." />
  </div>
</template>
<script>
import QHeaderSmall from '~/components/QHeaderSmall'
import QBlock from '~/components/QBlock'

export default {
  name: 'Agenda',
  components: { QHeaderSmall, QBlock }
}
</script>
