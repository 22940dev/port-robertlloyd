---
title: Matter
date: 2012-11-14
summary: Beautiful reading experience for publisher of unmissable journalism.
image: /images/projects/matter/image.jpg
tags:
- skill:brand_identity
- skill:interaction_design
style:
  color-accent: '#006Aff'
  screenshot-shadow: '#444'
  screenshot-offset: '#666'
aside: |
  Year
  : 2012

  Role
  : Brand identity, user experience and interaction design

  Agency
  : Clearleft
screenshots:
  homepage:
  - url: /images/projects/matter/screenshot_homepage.png
    alt: Home page
  type:
  - url: /images/projects/matter/screenshot_type_calluna.png
    alt: Type specimen for Calluna
  - url: /images/projects/matter/screenshot_type_centro.png
    alt: Type specimen for Centro
  - url: /images/projects/matter/screenshot_type_enigma.png
    alt: Type specimen for Enigma
  - url: /images/projects/matter/screenshot_type_ptsans.png
    alt: Type specimen for PT Sans
---
{% include 'screenshots' with screenshots.homepage
  alignment: 'bleed'
%}

{% include 'aside' %}

The brainchild of journalists Bobbie Johnson and Jim Giles, Matter was a home for in-depth journalism about the ideas shaping our future. Stories covered everything from corporate misdeeds and untold environmental scandals to radical new scientific discoveries and the people behind them. The company was acquired by Medium in April 2013.

After an enormously successful [Kickstarter campaign][1] proved there was a real desire for high-quality, focused, long-form writing, Bobbie and Jim asked Clearleft to envisage the user experience and visual design. I worked [alongside Jeremy Keith][2] who did the front-end development, and Phil Gyford who handled the Django-based back-end.

## Identity

{% include 'figure' with '/images/projects/matter/logo_sketches.jpg'
  caption: 'Early logo sketches'
  alignment: 'pull'
  image_preset: 'supporting'
%}

Much of my work for Matter focused on its visual identity. I thought a lot about how readers would recognise its publications in ebook stores, how articles might appear on the web and how these might be bookmarked on smartphone home screens. As the identity would play a supporting role to the articles being published, I envisaged the logo as a hallmark, one that identified an article as one meeting the high standards of journalism that Matter aims for.

## Painless payments

As well as being able to purchase individual articles as ebooks via Amazon and iTunes, subscribers could get access to all the stories on the website. Crucial to making this work was creating a frictionless payment flow. A guided two-step flow kept form fields to a minimum, and made subscribing a painless experience.

{% include 'figure' with '/images/projects/matter/payment_flow.svg'
  caption: 'Payment flow'
%}

## Typography

One of the guiding principles established early on was to privilege the reading experience. This meant articles needed to be legible and enjoyable to read on any device. To meet this purpose, and after extensive device testing, I chose Calluna and Calluna Sans.

{% include 'screenshots' with screenshots.type
  caption: 'Type samples/experimentation'
  alignment: 'bleed'
  image_preset: 'thumbnail'
%}

[1]: https://www.kickstarter.com/projects/readmatter/matter
[2]: https://adactio.com/journal/5886
