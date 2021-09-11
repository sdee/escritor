const client = require("../client");
import Video from "../components/Video";
import { urlFor, joinIfExists } from "../util";
const Index = ({ featureImages }) => {
  return (
    <div>
      <h1>
        <span class="px-4 py-3 mt-2 block text-5xl leading-8 font-extrabold tracking-tight text-gray-900">
          How to Eat in Peru
        </span>
      </h1>
      <div class="max-w-4xl p-8">
        <Video
          videoSrcURL="https://player.vimeo.com/video/352210574"
          videoTitle="How to Eat in Peru Trailer"
        />
      </div>
      {/* <div class="mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-20 lg:flex lg:items-center justify-start"> */}
      <div class="max-w-5xl px-4 py-6 lg:py-3 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span class="block">Ready to dive into Peruvian cuisine?</span>
        </h2>
        <p  class="mt-3 text-xl mx-auto text-xl text-gray-500">
          Learn about the best places in Peru to enjoy everything from street
          food to tasting menus. With the help of high-quality photos and clear descriptions, this guide will help you get acquainted with over 50 different dishes
          including many classics like Ceviche and Lomo Saltado. The regional
          guides will help you delve into the regional cuisines of Lima, Cusco, Arequipa, the Northern Coast, and the Peruvian Amazon.
        </p>
        <div class="mt-8 flex lg:mt-5 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="https://buy.stripe.com/bIY8xMdit9bz1dm000"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-large font-bold rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 py-6 lg:py-8 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Book Features
        </h2>
        <ul role="list" class="grid grid-cols-3 gap-3 max-w-4xl">
          {featureImages.map((image) => (
            <div class="text-m max-w-prose mx-auto p-2">
              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500 group block w-full rounded overflow-hidden">
                  <img src={urlFor(image.image).width(350).url()} />
                </div>
                <p>{image.caption}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div class="max-w-4xl py-6 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-8   lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <div class="mt-6">
          <dl class="space-y-8 divide-y divide-gray-200">
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                What is this book about?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  This book is about Peruvian food in all of its forms. It
                  covers Peru's most famous dishes including ceviche and lomo
                  saltado as well as many dishes off the bean path. It also covers
                  regional dishes in Lima, Cusco, the coast, the Amazon, and the
                  Andes. It covers everything from street food to exquisite
                  tasting menus.
                </p>
              </dd>
            </div>
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                What makes this book different from other guidebooks?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500 py-3">
                  Most guidebooks about Peru focus on tourist sights such as
                  Machu Picchu and have only a few pages at the end describing
                  the food. This book flips the formula around. This book dives
                  deep into the cuisine.
                </p>
                <p class="text-base text-gray-500 py-3">
                  While most guidebooks list places you should visit, this book
                  lists all of the dishes you should try while in Peru. This
                  book is meant to complement a travel guide.
                </p>
              </dd>
            </div>
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Why Peruvian food?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  I love Peruvian food because it's diverse. The food is a
                  product of Peru's vast biodiversity. The cusine interweaves
                  ingredients from the jungle, Peru's coastline, and much more.
                  Peruvian food also fuses together influences from Spanish,
                  Incan, Chinese, African, and Japanese cuisine just to name a
                  few.
                </p>
              </dd>
            </div>
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Who is this book written by?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500 py-3">
                  I'm Sutee. I'm an American who discovered Peruvian food the
                  way most tourists do-on the way to Machu Picchu. I just ended
                  up staying longer. I had just quit my job and started working
                  in a kitchen in Cusco just to keep busy. I became enamored
                  with Peruvian food and started writing really long Instagram
                  caption to share the food I was trying with friends back home.
                  One thing became another ...
                </p>
                <p class="text-base text-gray-500 py-3">
                  Nowadays, I'm a software engineer, and this is a side project.
                  I enjoy traveling, photography, learning new languages, and
                  trying new foods. This project allows me to combine
                  everything.
                </p>
              </dd>
            </div>
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                What's in the book?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <ul class="list-disc font-formal text-gray-500 ">
                  <li>
                    Detailed descriptions of over 50 dishes including ceviche,
                    lomo saltado, and pisco sours
                  </li>
                  <li>
                    Guides to regional food in the jungle, coast, and Andes
                  </li>
                  <li>Over 200 photos so that you know what you're eating</li>
                  <li>Personal restaurant recommendations</li>
                  <li>Personal anecdotes that provide cultural context</li>
                  <li>
                    Practical advice about how to cope with challenges like the
                    altitude and language barrier
                  </li>
                </ul>
              </dd>
            </div>
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                Who is this book for?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  This book was especially written for someone who is headed to
                  Peru for the first time. However, I also wrote it so that it
                  will hopefully satisfy readers who are just curious about
                  Peruvian food and would be transported to another place.
                </p>
              </dd>
            </div>
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                When will this book be released?
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500 py-3">
                  I wrote the bulk of this book more than four years ago, with
                  major updates and revisions after every trip. I joke that it
                  took me about six months to write this book and another four
                  years to distribute it.
                </p>
                <p class="text-base text-gray-500 py-3">
                  I'm now timing this book to coincide with the recovery of
                  Peru's tourism industry which of course is a moving target.
                  Now that I've developed my own software to format this book
                  (challenging with so many photos), I anticipate releasing this
                  book before the end of 2021.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

Index.getInitialProps = async function (context) {
  return await client.fetch(
    `{'featureImages': *[_type == "photo" && title in ["features_1", "features_2", "features_3", "features_4", "features_5", "features_6"]][]{image, caption} | order(title asc)}`
  );
};

export default Index;
