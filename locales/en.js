export default {
  app_name: 'Skedr.io',
  slogan: 'Automated import and schedule for Flickr Groups',
  slogan2: '<strong>Rediscover</strong> your free time',
  layout: {
    contact: 'Get in touch at'
  },
  menu: {
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    login: 'Log in',
    signup: 'Sign up'
  },
  home: {
    atention: {
      title: 'Make the most of every day',
      desc: 'The new Skedr app helps you <br><strong>spend less time</strong> sharing photos to Flickr groups.'
    },
    interest: [
      {
        title: 'For professionals',
        desc: 'Share easily your work to any group because we will do it for you. Ever',
        icon: 'shopping_delivery-fast'
      },
      {
        title: 'For enthusiasts',
        desc:
          "Gain views and likes by sharing easily to more groups. Don't waste your time and improve your photography.",
        icon: 'objects_spaceship'
      },
      {
        title: 'For beginners',
        desc:
          "Improve your photography through other photographers eyes. Share and discover. And don't forget to have fun!",
        icon: 'design_image'
      }
    ],
    desire: {
      title: 'We have improved your photos share workflow',
      desc:
        "We think Flickr is a great tool and groups is a great way to enjoy other people photos. But let's face it, the experience is terrible.<br> We have improved that part.",
      items: [
        {
          title: 'Autoschedule built-in',
          desc:
            "We autoschedule every time a photo is pushed to a group and fails due to group restrictions. We won't miss it.",
          icon: 'emoticons_satisfied',
          color: 'icon-success'
        },
        {
          title: 'Tag your groups',
          desc:
            'When you upload a tagged photo, it will be added to your groups automatically. One shot configuration.',
          icon: 'loader_refresh',
          color: 'icon-danger'
        },
        {
          title: 'Scheduled photos',
          desc: "Schedule view brings your schedule to life and makes it easy to see what's ahead in time.",
          icon: 'education_paper',
          color: 'icon-info'
        },
        {
          title: 'Engage with more users',
          desc: 'Sharing photos to more groups will make your photos more visible at Flickr. Gaining views and likes.',
          icon: 'objects_spaceship',
          color: 'icon-warning'
        }
      ]
    },
    cta: {
      title: 'Want to feel the new experience?',
      desc:
        'While we are in Beta the product will be completely free. We want more users to enjoy the product and give us feedback to improve it.',
      text: 'Sign up',
      link: 'https://app.skedr.io/auth/sign-up',
      plans: [
        {
          name: 'Amateur',
          price: 0,
          features: [
            '<strong>Unlimited</strong> support',
            '<strong>250</strong> photo shares',
            'Autoimported comment *'
          ]
        },
        {
          name: 'Professional',
          price: 3,
          features: [
            '<strong>Unlimited</strong> support',
            '<strong>Unlimited</strong> photo shares',
            'Autoimported comment *'
          ]
        }
      ]
    }
  },
  terms: {
    title: 'Terms and Conditions - Skedr.io',
    meta_desc: 'Terms and Conditions for Skedr.io. Last update: October 16, 2018'
  },
  policy: {
    title: 'Privacy Policy - Skedr.io',
    meta_desc: 'Privacy policy for Skedr.io. Last update: October 16, 2018'
  },
  faq: {
    title: 'Frequently Asked Questions',
    meta_desc: 'Answers to common questions about Skedr.io for Flickr.',
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
            question: 'Will Skedr steal my photos?',
            answer:
              'No. <br><br> We just share photos to your groups. We don’t download, upload or modify any of your photos.'
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
          },
          {
            question: 'How Skedr handles PRIVATE photos from flickr?',
            answer:
              "It will share that photo to the group. Private photos show a LOCK icon.<br><br>In Flickr when you share a private photo from your Photostream to any group that photo is visible to any member of the group. That's a behaviour from Flickr and we cannot do anything with that. If you have many private photos sharing TAGS with public photos you are willing to share send us and email and we will find a solution."
          }
        ]
      },
      {
        title: 'Features',
        items: [
          {
            question: 'What is Automated scheduling?',
            answer:
              "Retrying in the future share a photo to a group. The date to share the photo is based on the posting limits by that group configuration.<br><br> Flickr's API tells us that a particular photo has not been added to a group with the a code error. For the case we are using it is number 5. More information about error codes can be found here  (<a href='https://www.flickr.com/services/api/flickr.groups.pools.add.html'>https://www.flickr.com/services/api/flickr.groups.pools.add.html</a>) ."
          },
          {
            question: 'What is Group Tagging?',
            answer:
              'Bind any tag of your choice to one or more groups. Every photo with that tag will be added to every group that has been tagged.<br><br> For example: If you choose #landscape to be bind to 3 groups related to Landscape photography when a photo with that tag is uploaded to your photostream it will be added to those 3 groups.'
          },
          {
            question: 'What is Autoimported comment?',
            answer:
              "Every time you share a photo with us we automatically add a message like: 'Autoimported with Skedr.io to X groups.'. We do it as a way of promoting our app because we will never add ADS or resell any data. The comment can be deleted but if in the future you share it again will apear again."
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
            question: 'How will I know what photos are posted in which groups?',
            answer:
              'At the top right of the toolbar there is a Notification center with all notifications from your actions.'
          },
          {
            question: 'We need to upload our photos to Skedr.io?',
            answer:
              "No. We don't want you to alter your workflow. Whether you work with Lightroom, Apple Photos or any kind of Flickr Uploader you will continue working as you like. We just need you to use our feature Group Tagging"
          },
          {
            question: 'My photos are not added to groups is something wrong?',
            answer:
              'We update all your photos every start of the hour. If you upload a photo to Flickr at 18:36 you will have to wait until the start of next hour ( 19:00 ).'
          },
          {
            question: 'Do I need to install any software?',
            answer:
              'Skedr.io is a web based app so you don’t require to install any software. You can access with any browser in any device. It has been optimized to work in the latests browsers such as Firefox, Chrome, Edge, Safari and Opera. As it runs on browsers you can use it on Mac, Linux or Windows operative systems.'
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
              'The purpose is to be able to spend less time sharing your photos in Flickr. Adding the same photo to groups with different Posting Limits may throttle your tries, so we are automating this for you.'
          }
        ]
      }
    ]
  },
  articles: [
    {
      slug: 'group-tagging',
      author: 'Enric Bisbe Gil',
      title: 'Group tagging',
      subtitle: 'Sharing made easy',
      img: require('~/assets/img/articles/group-tagging/main.jpg'),
      publishedAt: 89124912,
      introduction:
        'In the <a href="/articles/share-single-photo">first article</a> we explained how to share photos from your photostream. In this article, we will explain how to automatically share your new photos to each of your desired groups. Are you ready?'
    },
    {
      slug: 'share-single-photo',
      author: 'Enric Bisbe Gil',
      title: 'Sharing an existing photo',
      subtitle: 'From your photostream to many Flickr groups',
      img: require('~/assets/img/ben-white-226176-unsplash.jpg'),
      publishedAt: 123415151,
      introduction:
        'When you need to share an existing photo from your Flickr photostream into many groups, traditionally, you need to select one by one and pray that you don\'t reach the posting limit for any group.<br><br>Sharing photos into your prefered groups from Flickr is really easy. The benefit of doing it with Skedr is that you will automatically benefit from the <strong><a href="/faq#1-what-is-automated-scheduling">automated scheduler</a></strong> feature. Let\'s get stared!'
    }
  ]
}
