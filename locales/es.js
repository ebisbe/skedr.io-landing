export default {
  app_name: 'Skedr.io',
  slogan: 'Importación y programación automática <br>para los grupos de Flickr',
  slogan2: '<strong>Redescubre</strong> tu tiempo libre',
  layout: {
    contact: 'Contactanos en'
  },
  menu: {
    features: 'Caracteristicas',
    pricing: 'Precio',
    faq: 'FAQ',
    login: 'Iniciar sesión',
    signup: 'Registrarse'
  },
  home: {
    atention: {
      title: 'Aprovecha al máximo cada día',
      desc:
        'La nueva aplicación Skedr te ayuda a <br><strong> pasar menos tiempo </strong> administrando tus grupos de Flickr.'
    },
    interest: [
      {
        title: 'Para profesionales',
        desc: 'Comparte miles de fotos a cualquier grupo sin preocuparte de las restricciones. Nunca más.',
        icon: 'shopping_delivery-fast'
      },
      {
        title: 'Para entusiastas',
        desc:
          'Gana visitas y likes compartiendo fácilmente a más grupos. No gaste tu tiempo y dedícalo a la fotografía',
        icon: 'objects_spaceship'
      },
      {
        title: 'Para principiantes',
        desc: 'Mejora tu fotografía a traves de otros fotógrafos. Comparte y descubre. No olvides divertirte!',
        icon: 'design_image'
      }
    ],
    desire: {
      title: 'Hemos mejorado el flujo de trabajo',
      desc:
        'Creemos que Flickr es una herramienta fantástica y los grupos son una forma perfecta de disfrutar otras fotografías. Pero seamos realistas, la experiencia es terrible. <br> La hemos mejorado.',
      items: [
        {
          title: 'Auto agenda de serie',
          desc:
            'Programamos automáticamente cada fotografía que compartes a un grupo y falla por las restricciones de este. Nosotros no fallaremos.',
          icon: 'emoticons_satisfied',
          color: 'icon-success'
        },
        {
          title: 'Taggea tus grupos',
          desc:
            'Las fotos tageadas se añadiran automáticamente a los grupos que hayas definido. Configuralo solo una vez.',
          icon: 'loader_refresh',
          color: 'icon-danger'
        },
        {
          title: 'Calendario',
          desc:
            'La vista de calendario le da vida a su agenda y hace que sea fácil ver lo que está por delante en el tiempo.',
          icon: 'education_paper',
          color: 'icon-info'
        },
        {
          title: 'Interactúa con más usuarios',
          desc: 'Compartir fotografías a más grupos hará tus fotos más visibles en Flickr. Ganarás visitas y likes.',
          icon: 'objects_spaceship',
          color: 'icon-warning'
        }
      ]
    },
    cta: {
      title: 'Quieres vivir la nueva experiencia?',
      desc:
        'Mientras estamos en Beta el product será completamente gratis. Queremos que más usuarios disfruten del product y nos den feedback para poder mejorarlo.',
      text: 'Registrate',
      link: 'https://app.skedr.io/auth/sign-up',
      plans: [
        {
          name: 'Amateur',
          price: 0,
          features: ['Soporte <strong>Ilimitado</strong>', 'Compartir <strong>250</strong> fotos']
        },
        {
          name: 'Professional',
          price: 3,
          features: ['Soporte <strong>Ilimitado</strong>', 'Compartir fotos <strong>ilimitado</strong>']
        }
      ]
    }
  },
  faq: {
    title: 'Preguntas más frecuentes',
    meta_desc: 'Respuestas a la preguntas mas comunes sobre Skedr.io para Flickr.',
    groups: [
      {
        title: 'General',
        items: [
          {
            question: 'I want to see first the app working without registering, Can I do that?',
            answer:
              "Sure.<br><br> Go to <a href='https://app.skedr.io/login'>https://app.skedr.io/login</a> and click on 'Demo Account' then click Login to sign in with our demo account. We have added 20 photos from Unsplash as a show case and we have created 4 groups with different restrictions."
          },
          {
            question: 'What Skedr.io does to help me?',
            answer: 'We do two things to help you Group tagging and automated photo scheduling.'
          },
          {
            question: 'Will Skedr post any photo without my specific instructions?',
            answer:
              'No. <br><br>Skedr will never post any photos without your specific instructions. You give specific instructions for each photo by way of Group Tagging  and Skedr will act only when Group Tagging is activated by you.'
          },
          {
            question: 'Will Skedr steal my pictures?',
            answer:
              'No. <br><br> We just share images to your groups. We don’t download, upload or modify any of your photos.'
          },
          {
            question: 'Will Skedr send messages to any other member on my behalf?',
            answer:
              'No. <br><br>Flickr’s API doesn’t have that functionality and anyway it’s out of the scope of the app.'
          },
          {
            question: 'Will Skedr join new groups on my behalf?',
            answer:
              'No. <br><br>We plan on the future to share interesting groups for your photos but it will suggest only. You will have to join if you want.'
          }
        ]
      },
      {
        title: 'Features',
        items: [
          {
            question: 'What is Automated scheduling?',
            answer:
              "Try again the binding of a photo to a group in the future ( based on the posting limits by that group configuration ). Flickr's API tells us that a particular photo has not been added to a group with the a code error. For the case we are using it is number 5. More information about error codes can be found here  https://www.flickr.com/services/api/flickr.groups.pools.add.html )."
          },
          {
            question: 'What is Group Tagging?',
            answer:
              'Bind any tag of your choice to one or more groups. Every photo with that tag will be added to every group that has been tagged. \n For example: If you choose #landscape to be bind to 3 groups related to Landscape photography when a photo with that tag is uploaded to your photostream it will be added to those 3 groups.'
          }
        ]
      },
      {
        title: 'How it works?',
        items: [
          {
            question: 'Why does Skedr.io requires write permissions to run?',
            answer:
              'In order to add a photo to a group of your choice Flickr needs writen permissions from you account.'
          },
          {
            question: 'How do I start using Skedr.io?',
            answer:
              "Skedr.io is a Flickr App ( https://www.flickr.com/services/apps/about/ ) . It's main page is https://www.flickr.com/services/apps/72157686812430944/ . And follows all Community Guidelines"
          },
          {
            question: 'How will I know what pictures are posted in which groups?',
            answer:
              'In the groups section you can view your last 40 images added to that group. Inside Flickr you can see each of your groups where your photo belongs.'
          },
          {
            question: 'We need to upload our photos to Skedr.io?',
            answer:
              "No. We don't want you to alter your workflow. Whether you work with Lightroom, Apple Photos or any kind of Flickr Uploader you will continue working as you like. We just need you to use our feature Group Tagging"
          },
          {
            question: 'My photos are not added to groups is something wrong?',
            answer:
              'We add photos every hour at 00. If you upload a photo to Flickr at 18:36 you will have to wait until next hour ( 19:00 ).'
          }
        ]
      },
      {
        title: 'Additional Information',
        items: [
          {
            question: 'Who is behind Skedr.io?',
            answer:
              'Enric Bisbe Gil built Skedr.io.  His Flickr profile can be found at <a href="https://www.flickr.com/photos/enric-bisbe" target="_blank">https://www.flickr.com/photos/enric-bisbe</a> '
          },
          {
            question: 'What is the purpose of Skedr.io?',
            answer:
              'The purpose is to be able to spend less time sharing your images in Flickr. Adding the same photo to groups with different Posting Limits may throttle your tries, so we are automating this for you.'
          }
        ]
      }
    ]
  }
}
