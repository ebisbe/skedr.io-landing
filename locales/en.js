export default {
  app_name: 'Skedr',
  slogan: 'Automated sharing and scheduling for Flickr Groups',
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
      title: '<strong>Rediscover</strong> your free time',
      desc: 'Skedr helps you <strong>spend less time</strong><br> sharing photos to Flickr groups.'
    },
    interest: [
      {
        title: 'For professionals',
        desc: 'Share your work easily with any group at any time. We will do it for you.',
        icon: 'shopping_delivery-fast'
      },
      {
        title: 'For enthusiasts',
        desc:
          "Gain views and likes by easily sharing your pictures in lots of groups. Don't waste your time and improve your photography skills.",
        icon: 'objects_spaceship'
      },
      {
        title: 'For beginners',
        desc:
          'Improve your shots and photography through other photographer’s eyes. Share and discover. And always have fun.',
        icon: 'design_image'
      }
    ],
    desire: {
      title: 'We have improved your group sharing workflow',
      desc:
        "Flickr is a great tool and using photo groups is a great way to enjoy other people photos. But let's face it, the tool experience can be way better.<br> We, as users, have taken the time to improve that part.",
      items: [
        {
          title: 'Autoschedule built-in',
          desc: "Every rejected photo due to group restriction limits is autoscheduled for reshare. You won't miss it.",
          icon: 'emoticons_satisfied',
          color: 'icon-success'
        },
        {
          title: 'Tag your groups',
          desc:
            'When you upload a new photo, it will be automatically added to your groups by means of the desired tag/s. One shot configuration.',
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
        'While we are in Beta the product will have a 50% discount. We want more users to enjoy the product and give us feedback to improve it.',
      text: 'Access Now!',
      link: 'https://app.skedr.io/auth/sign-up',
      plans: [
        {
          name: 'Starter',
          price_text: 'Free',
          cta: 'Try now!',
          features: [
            'Configure <strong>10 Autoimport tags</strong>',
            '<strong>Unlimited</strong> support',
            '<strong>Suggest Tags</strong> for group tagging',
            '<strong>Schedule</strong> throttled pictures'
          ]
        },
        {
          name: 'Pro',
          //price: '1,5',
          price: {
            mo: { price: '1,5', name: 'Monthly' },
            yr: { price: '15', name: 'Yearly' }
          },
          cta: 'Buy now!',
          features: [
            '<strong>Unlimited</strong> Autoimport tags',
            '<strong>Unlimited</strong> support',
            '<strong>Suggest Tags</strong> for group tagging',
            '<strong>Schedule</strong> throttled pictures',
            '15 days money back gaurantee'
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
            question:
              'I would like to see how does the app work in the first place without registering. Could I do that?',
            answer:
              "Sure.<br><br> Go to <a href='https://app.skedr.io/auth/login'>https://app.skedr.io/auth/login</a> and click on 'Demo Account' and then click on the Continue button to sign in with our demo account. We have added 20 photos from Unsplash as a show case and we have created 4 groups with different restrictions."
          },
          {
            question: 'What does Skedr.io do to help me?',
            answer: 'Skedr.io will help you with two basic tasks: Group tagging and Automated photo scheduling.'
          },
          {
            question: 'Will Skedr.io post any photo without my specific instructions?',
            answer:
              'No. <br><br>Skedr.io will never post any photos without having specifically configured the tool to do so. Specific instructions and configuration is needed for each and every action on a photo, including activating the Group Tagging feature.'
          },
          {
            question: 'Will Skedr.io keep my photos and have rights on them?',
            answer:
              'No. <br><br>We just share your photos to your groups. We do not download, keep, upload or modify any of your photos.'
          },
          {
            question: 'Will Skedr.io send messages to any other member on my behalf?',
            answer:
              'No. <br><br>Flickr’s API does not have that functionality and it is out of the scope of the Skedr.io app.'
          },
          {
            question: 'Will Skedr.io join new groups on my behalf?',
            answer:
              'No. <br><br>It is on the Skedr.io plans in the future to include a functionality which will recommend interesting groups for you to share your photos with. However, groups will be suggested and the user will decide whether to join them or not.'
          },
          {
            question: 'How does Skedr.io handle PRIVATE photos from Flickr?',
            answer:
              'All photos are shared with the users registered in each group. Private photos will show a LOCK icon.<br><br>When you share a private photo in Flickr from your Photostream to any group, that photo is visible to any member of the group. This is a behaviour within Flickr and there is nothing we can do to change it. If this is at any case causing you a major problem when sharing your photos, please contact us at our email and we will do our best to find a solution.'
          }
        ]
      },
      {
        title: 'Features',
        items: [
          {
            question: 'What is Automated scheduling?',
            answer:
              "This functionality will allow you to share a photo to a group in a future date. This date is limited by the posting limits according to the group configuration.<br><br>Whenever a photo is not successfully added to a group, Flickr’s API will inform us with an error code (code number 5). For more information about error codes please visit <a href='https://www.flickr.com/services/api/flickr.groups.pools.add.html'>https://www.flickr.com/services/api/flickr.groups.pools.add.html</a>."
          },
          {
            question: 'What is Group Tagging?',
            answer:
              'To bind any tag of your choice to one or more groups. That is, to define the content of the photos included in the group by keywords (tags).<br><br>Every photo uploaded with one tag will be automatically added to every group that has been tagged with this same keyword.<br><br>For example: If you choose the tag #landscape to be bound to 3 different groups which are related to landscape photography, whenever a photo with that tag is uploaded to your photostream it will be automatically added to those 3 groups.'
          },
          {
            question: 'What is Autoimported comment?',
            answer:
              "Every time you share a photo through the Skedr.io app, a message will be displayed saying: 'Shared with Skedr.io to X groups.'. We do this as a way of promoting our app.<br><br> We will not allow ads on our pages or resell any data as a way of promotion or for getting incomes."
          }
        ]
      },
      {
        title: 'How it works?',
        items: [
          {
            question: 'Why does Skedr.io requires write permissions to run?',
            answer:
              'In order to add a photo to a group Flickr needs <strong>WRITE PERMISSIONS</strong> from you account. Under the \'<i>Authentication</i>\' headline you can read all the related information <a href="https://www.flickr.com/services/api/flickr.groups.pools.add.html">https://www.flickr.com/services/api/flickr.groups.pools.add.html</a>'
          },
          {
            question: 'How do I start using Skedr.io?',
            answer:
              "Skedr.io is a Flickr App ( <a href='https://www.flickr.com/services/apps/about/'>https://www.flickr.com/services/apps/about/</a> ) therefore it follows all the Community Guidelines. Its page under Flickr is <a href='https://www.flickr.com/services/apps/72157686812430944/'>https://www.flickr.com/services/apps/72157686812430944/</a>."
          },
          {
            question: 'How will I know what photos are posted in which groups?',
            answer:
              'At the top right of the toolbar there is a Notification center with all the notifications from your actions.'
          },
          {
            question: 'Do we need to upload our photos to Skedr.io?',
            answer:
              "No. We don't want you to alter your workflow. Whether you work with Lightroom, Apple Photos or any kind of Flickr Uploader you will continue working with them. We just need you to use our Group Tagging feature."
          },
          {
            question: 'My photos are not being added to groups. Is there something wrong?',
            answer:
              'We update all your photos every hour on the hour. It means that if you upload a photo to Flickr let’s say at 6.36pm, it will not be uploaded until 7pm.'
          },
          {
            question: 'Do I need to install any software?',
            answer:
              'Skedr.io is a web based app so you it does not require to install any software. You can access with any browser in any device. It has been optimized to work better in the latests versions of browsers such as Firefox, Chrome, Edge, Safari and Opera. You can use it on Mac, Linux or Windows.'
          }
        ]
      },
      {
        title: 'Additional Information',
        items: [
          {
            question: 'Who is behind Skedr.io?',
            answer:
              'Enric Bisbe Gil is the owner and creator of Skedr.io. His Flickr profile can be found at https://www.flickr.com/photos/enric-bisbe'
          },
          {
            question: 'What is the purpose of Skedr.io?',
            answer:
              'Skedr.io aims to help you by saving time when sharing your photos in Flickr. Adding the same photo to groups with different Posting Limits may make your life harder, so we are automating this process for you.'
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
        'In the <a href="/articles/share-single-photo/">first article</a> we explained how to share photos from your photostream. In this article, we will explain how to automatically share your new photos to each of your desired groups. Are you ready?'
    },
    {
      slug: 'share-single-photo',
      author: 'Enric Bisbe Gil',
      title: 'Sharing an existing photo',
      subtitle: 'From your photostream to many Flickr groups',
      img: require('~/assets/img/ben-white-226176-unsplash.jpg'),
      publishedAt: 123415151,
      introduction:
        'As a passionate and proud-of-your-work photographer, you often find yourself in the need of sharing some of your brilliant shots.<br><br> So you go to share your amazing pictures on your Flickr photostream into many different groups and... you find that not only you have to select each photo one by one, but pray that you do not reach the posting limit for any group.<br><br> Ouch. Sharing photos into your preferred groups on Flickr is easy. But there are some benefits of doing it through Skedr.io that should be taken into account, as the automated scheduler feature for a start. Ready to know more?'
    }
  ]
}
