<template>
  <div class="wrapper">
    <q-header-small bg-image="/images/evan-dennis-75563-unsplash.jpg">
      <h1>Preguntas más frecuentes</h1>
      <h4>No te quedes con ninguna duda</h4>
    </q-header-small>
    <div class="section">
      <div class="container">
        <div class="row">
          <q-collapse
            v-for="(faq, i) in faqs"
            :key="i"
            :title="faq.title"
            :desc="faq.desc"
            visible/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QHeaderSmall from '~/components/QHeaderSmall'
import QCollapse from '~/components/QCollapse'
export default {
  name: 'Faq',
  components: { QHeaderSmall, QCollapse },
  head() {
    return {
      title: 'Preguntas más frecuentes - Lethal Clan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Te respondemos las preguntas más frecuentes pero si tienes cualquier otra pregunta no dudes en contactar con nosotros.'
        }
      ]
    }
  },
  data() {
    return {
      faqs: [
        {
          title: '¿En que consisten las pruebas de lethal clan?',
          desc:
            'LETHAL CLAN es una competición por equipos, así que es muy importante que el CLAN sepa trabajar coordinado, teniendo en cuenta los puntos fuertes y débiles de cada competidor del CLAN. Los workouts combinarán ejercicios de fuerza y resistencia priorizando los ejercicios anaeróbicos. Las pruebas pueden implicar ejercicios de levantamiento, arrastre, correr, ejercicios de fuerza,… Pero siempre en equipo.'
        },
        {
          title: '¿Qué material debo llevar a la competición?',
          desc:
            'Los eventos de LETHAL CLAN suelen realizarse en la montaña, así que a parte de la ropa de entreno más comoda para ti, te recomendamos calzado de Trail que tenga un buen agarre tanto en seco como en mojado.'
        },
        {
          title: '¿Podemos participar si no somos atletas de élite?',
          desc:
            'En LETHAL CLAN queremos que todos se diviertan. Es por ese motivo que hemos hecho dos categorías, la categoría PRO y la categoría AMATEUR, de esta manera cada equipo puede competir en la categoría que mejor le vaya teniendo en cuenta sus capacidades físicas.'
        },
        {
          title: '¿Qué gimnasios son los recomendados para entrar en la competición?',
          desc:
            'LETHAL CLAN es una competición en la que se trabaja sobretodo los ejercicios funcionales en la que se combinan varias modalidades de entreno, con lo que todos los competidores de todos los gimnasios son bienvenidos. En la variedad está el gusto, habrá pruebas que favorezcan más a un equipo y otras que favorezcan más a otros dependiendo del tipo de entreno que suelan hacer en su día a día. '
        },
        {
          title: '¿Cómo nos apuntamos a la competición?',
          desc:
            'Primeramente los equipos tendrán que hacer los workouts clasificatorios (encontraréis las instrucciones en el CLAN PASS), una vez tengamos todos los videos de los equipos que quieran competir se hará una clasificación dónde seleccionaremos a los 9 mejores equipos PRO y los 9 mejores equipos AMATEUR para que entren en la competición.'
        },
        {
          title: '¿Hay límite de edad para competir?',
          desc: 'No, el límite lo ponéis vosotros. La edad mínima para competir es de 18 años.'
        }
      ]
    }
  }
}
</script>
