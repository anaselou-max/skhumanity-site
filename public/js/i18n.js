/* =====================================================================
   SK Humanity — traductions FR / EN (source unique)
   Chaque texte du site a une clé et ses deux versions côte à côte.
   - Ajouter un texte : ajouter une clé ici, puis data-i18n="clé" sur l'élément HTML.
   - Variables entre accolades : {n}, {d}, {r}, {b}, {p}, {url}.
   - Noms propres et références officielles (SIREN, RNA, JOAFE, El Habib, CotizUp)
     ne sont jamais traduits.
   ===================================================================== */
(function () {
  'use strict';
  const S = {
    "nav.aller-au-contenu": {
      fr: "Aller au contenu",
      en: "Skip to content"
    },
    "nav.aria-navigation-principale": {
      fr: "Navigation principale",
      en: "Main navigation"
    },
    "nav.le-projet": {
      fr: "Le projet",
      en: "The project"
    },
    "nav.transparence": {
      fr: "Transparence",
      en: "Transparency"
    },
    "nav.faire-un-don": {
      fr: "Faire un don",
      en: "Donate"
    },
    "nav.contact": {
      fr: "Contact",
      en: "Contact"
    },
    "nav.aria-navigation-barre-fixe": {
      fr: "Navigation (barre fixe)",
      en: "Navigation (sticky bar)"
    },
    "nav.aria-menu-mobile": {
      fr: "Menu mobile",
      en: "Mobile menu"
    },
    "hero.projet-bangladesh-avec-l": {
      fr: "Projet Bangladesh, avec l'ONG El Habib",
      en: "Bangladesh project, with NGO El Habib"
    },
    "hero.une-aumone-qui-continue": {
      fr: "Une aumône qui <span class=\"soft\">continue de grandir</span> après vous",
      en: "Charity that <span class=\"soft\">keeps growing</span> long after you"
    },
    "hero.suleyman-kabir-humanity-construit": {
      fr: "Suleyman & Kabir Humanity construit, avec l'ONG El Habib, un orphelinat pour 60 enfants, une mosquée et un puits d'eau potable au Bangladesh. Chaque don est tracé, du premier euro jusqu'à la dernière brique.",
      en: "Suleyman & Kabir Humanity is working with our partner NGO El Habib to build an orphanage for 60 children, a mosque and a drinking-water well in Bangladesh. Every donation is traced, from the first euro to the last brick."
    },
    "hero.decouvrir-le-projet": {
      fr: "Découvrir le projet",
      en: "Discover the project"
    },
    "hero.association-loi-1901": {
      fr: "Association loi 1901",
      en: "French non-profit (1901 Act)"
    },
    "hero.journal-officiel": {
      fr: "Journal officiel",
      en: "Official Journal"
    },
    "hero.des-dons-sur-le": {
      fr: "des dons sur le terrain",
      en: "of donations go to the project"
    },
    "hero.100": {
      fr: "100 %",
      en: "100%"
    },
    "hero.alt-fideles-en-priere-devant": {
      fr: "Fidèles en prière devant une mosquée achevée par l'ONG El Habib au Bangladesh",
      en: "Worshippers praying in front of a mosque completed by NGO El Habib in Bangladesh"
    },
    "hero.une-mosquee-achevee-par": {
      fr: "Une mosquée achevée par l'ONG El Habib, déjà au service de tout un village",
      en: "A mosque completed by NGO El Habib, already serving an entire village"
    },
    "hero.collectes": {
      fr: "collectés",
      en: "raised"
    },
    "hero.sur": {
      fr: "sur",
      en: "of"
    },
    "hero.voir-le-chantier": {
      fr: "Voir le chantier",
      en: "See the build"
    },
    "cagnotte.campagne-en-cours": {
      fr: "Campagne en cours",
      en: "Ongoing campaign"
    },
    "cagnotte.bangladesh": {
      fr: "Bangladesh",
      en: "Bangladesh"
    },
    "cagnotte.il-reste": {
      fr: "Il reste",
      en: "Only"
    },
    "cagnotte.a-reunir-pour-lancer": {
      fr: "à réunir pour lancer le chantier",
      en: "left to raise before construction can begin"
    },
    "cagnotte.personnes-ont-deja-donne": {
      fr: "{d} personnes ont déjà donné. ",
      en: "{d} people have already donated. "
    },
    "cagnotte.si-personnes-de-plus": {
      fr: "Si {n} personnes de plus offrent 5 € chacune, la cagnotte est bouclée et le chantier démarre. Inch'Allah, soyez l'une d'elles.",
      en: "If {n} more people give €5 each, the campaign will be fully funded and construction can begin. Be one of them, insha’Allah."
    },
    "cagnotte.votre-brique": {
      fr: "Votre brique",
      en: "Your brick"
    },
    "cagnotte.chaque-brique-represente-1": {
      fr: "Chaque brique représente 1 % du chantier, soit {b}.",
      en: "Each brick represents 1% of the build, or {b}."
    },
    "cagnotte.collectes-sur-un-objectif": {
      fr: "collectés sur un objectif de",
      en: "raised towards a goal of"
    },
    "cagnotte.je-pose-ma-brique": {
      fr: "Je pose ma brique",
      en: "Add my brick"
    },
    "cagnotte.voir-le-montant-en": {
      fr: "Voir le montant en direct sur la cagnotte officielle",
      en: "See the live total on our official fundraising page"
    },
    "cagnotte.vous-ne-pouvez-pas": {
      fr: "Vous ne pouvez pas donner ? Partagez",
      en: "Can’t give right now? Share the campaign"
    },
    "cagnotte.aria-partager-sur-whatsapp": {
      fr: "Partager sur WhatsApp",
      en: "Share on WhatsApp"
    },
    "cagnotte.enfants-accueillis-dans-l": {
      fr: "enfants accueillis dans l'orphelinat-madrassa",
      en: "children housed in the orphanage-madrassa"
    },
    "cagnotte.fideles-accueillis-dans-la": {
      fr: "fidèles accueillis dans la future mosquée",
      en: "worshippers the future mosque will hold"
    },
    "cagnotte.puits-d-eau-potable": {
      fr: "puits d'eau potable pour les ablutions et le village",
      en: "drinking-water well for ablutions and the whole village"
    },
    "projet.le-projet-bangladesh": {
      fr: "Le projet Bangladesh",
      en: "The Bangladesh project"
    },
    "projet.un-orphelinat-une-mosquee": {
      fr: "Un orphelinat, une mosquée, un puits",
      en: "An orphanage, a mosque, a well"
    },
    "projet.en-partenariat-avec-l": {
      fr: "En partenariat avec l'ONG El Habib, chaque euro collecté est fléché vers l'un de ces postes, détaillés et chiffrés avec précision.",
      en: "Working with NGO El Habib, we allocate every euro raised to one of these budget lines, each one detailed and precisely costed."
    },
    "projet.budget-total-du-projet": {
      fr: "Budget total du projet",
      en: "Total project budget"
    },
    "projet.aria-repartition-du-budget-orphelinat": {
      fr: "Répartition du budget : orphelinat 12 000 €, mosquée et puits 11 150 €, pack hygiène 2 100 €.",
      en: "Budget split: orphanage €12,000, mosque and well €11,150, hygiene pack €2,100."
    },
    "projet.orphelinat-madrassa-huffaz-al": {
      fr: "Orphelinat & Madrassa Huffaz al-Qur'an",
      en: "Orphanage & Huffaz al-Qur'an Madrassa"
    },
    "projet.un-lieu-de-vie": {
      fr: "Un lieu de vie et d'éducation coranique pour 60 enfants orphelins qui mémoriseront le Livre d'Allah.",
      en: "A home and a Qur’anic school for 60 orphans who will memorise the Book of Allah."
    },
    "projet.47-5-du-budget": {
      fr: "47,5 % du budget",
      en: "47.5% of the budget"
    },
    "projet.mosquee-puits-du-village": {
      fr: "Mosquée & puits du village",
      en: "Village mosque & water well"
    },
    "projet.une-mosquee-de-160": {
      fr: "Une mosquée de 160 à 200 places, équipée de matériel neuf, avec un puits pour les ablutions et l'usage quotidien.",
      en: "A mosque for 160 to 200 worshippers, fitted with new equipment, with a well for ablutions and everyday use."
    },
    "projet.44-2-du-budget": {
      fr: "44,2 % du budget",
      en: "44.2% of the budget"
    },
    "projet.pack-hygiene-confort": {
      fr: "Pack hygiène & confort",
      en: "Hygiene & comfort pack"
    },
    "projet.matelas-oreiller-draps-et": {
      fr: "Matelas, oreiller, draps et produits d'hygiène pour chacun des 60 enfants, soit 35 € par enfant.",
      en: "A mattress, pillow, bedding and hygiene products for each of the 60 children: €35 per child."
    },
    "projet.8-3-du-budget": {
      fr: "8,3 % du budget",
      en: "8.3% of the budget"
    },
    "projet.construction-en-2-a": {
      fr: "Construction en 2 à 3 mois. Photos et vidéos de l'avancement envoyées régulièrement, jusqu'à l'inauguration.",
      en: "Construction takes 2 to 3 months, with regular photo and video updates until the inauguration."
    },
    "terrain.preuves-terrain-ong-el": {
      fr: "Preuves terrain, ONG El Habib",
      en: "Proof from the field, NGO El Habib"
    },
    "terrain.ce-que-l-ong": {
      fr: "Ce que l'ONG El Habib a déjà construit",
      en: "What NGO El Habib has already built"
    },
    "terrain.ces-realisations-sont-le": {
      fr: "Ces réalisations sont le fruit du travail de terrain de l'ONG El Habib, notre partenaire pour le projet Bangladesh : des mosquées achevées et inaugurées par leurs équipes, la preuve qu'une sadaqa jariya peut prendre forme, brique après brique.",
      en: "These projects are the work of NGO El Habib, our field partner for the Bangladesh project: mosques completed and inaugurated by their teams, proof that a sadaqa jariyah can take shape, brick by brick."
    },
    "terrain.alt-vue-aerienne-d-une": {
      fr: "Vue aérienne d'une mosquée terminée et inaugurée avec la communauté",
      en: "Aerial view of a completed mosque inaugurated with the community"
    },
    "terrain.inauguration-d-une-mosquee": {
      fr: "Inauguration d'une mosquée",
      en: "Mosque inauguration"
    },
    "terrain.un-precedent-projet-mene": {
      fr: "Un précédent projet mené à terme par l'ONG El Habib",
      en: "A previous project completed by NGO El Habib"
    },
    "terrain.alt-communaute-entiere-reunie-en": {
      fr: "Communauté entière réunie en prière devant une mosquée nouvellement construite",
      en: "An entire community gathered in prayer in front of a newly built mosque"
    },
    "terrain.premiere-priere-collective": {
      fr: "Première prière collective",
      en: "First congregational prayer"
    },
    "recompenses.celui-qui-initie-une": {
      fr: "« Celui qui initie une bonne pratique en Islam aura sa récompense et la récompense de tous ceux qui la pratiquent après lui, sans que cela ne diminue quoi que ce soit de leurs récompenses. »",
      en: "“Whoever introduces a good practice in Islam will have its reward and the reward of all those who practise it after him, without that diminishing their rewards in any way.”"
    },
    "recompenses.hadith-authentique-sahih-muslim": {
      fr: "Hadith authentique, Sahih Muslim n° 1017",
      en: "Authentic hadith, Sahih Muslim no. 1017"
    },
    "recompenses.un-don-plusieurs-recompenses": {
      fr: "Un don, plusieurs récompenses",
      en: "One donation, multiple rewards"
    },
    "recompenses.pourquoi-ce-projet-cumule": {
      fr: "Pourquoi ce projet cumule des récompenses rares",
      en: "Why this project brings together rare rewards"
    },
    "recompenses.la-sadaqa-jariya": {
      fr: "La Sadaqa Jariya",
      en: "Sadaqa Jariyah"
    },
    "recompenses.une-recompense-qui-continue": {
      fr: "Une récompense qui continue après la mort",
      en: "A reward that continues after death"
    },
    "recompenses.le-soutien-aux-orphelins": {
      fr: "Le soutien aux orphelins",
      en: "Supporting orphans"
    },
    "recompenses.un-foyer-et-une": {
      fr: "Un foyer et une éducation pour 60 enfants",
      en: "A home and an education for 60 children"
    },
    "recompenses.la-construction-d-une": {
      fr: "La construction d'une mosquée et d'un puits",
      en: "Building a mosque and a well"
    },
    "recompenses.un-lieu-de-priere": {
      fr: "Un lieu de prière et de l'eau pour tout un village",
      en: "A place of prayer and water for a whole village"
    },
    "etapes.comment-ca-marche": {
      fr: "Comment ça marche",
      en: "How it works"
    },
    "etapes.de-votre-don-a": {
      fr: "De votre don à la première pierre",
      en: "From your donation to the first stone"
    },
    "etapes.un-circuit-simple-tracable": {
      fr: "Un circuit simple, traçable, et conforme à la réglementation française sur les associations.",
      en: "A simple, traceable process that complies with French non-profit regulations."
    },
    "etapes.vous-donnez": {
      fr: "Vous donnez",
      en: "You donate"
    },
    "etapes.en-ligne-par-carte": {
      fr: "En ligne par carte bancaire, sur notre cagnotte officielle CotizUp, quel que soit le montant.",
      en: "Online by card, whatever the amount, on our official CotizUp fundraising page."
    },
    "etapes.nous-collectons": {
      fr: "Nous collectons",
      en: "We collect"
    },
    "etapes.les-fonds-arrivent-sur": {
      fr: "Les fonds arrivent sur le compte officiel de Suleyman & Kabir Humanity, SIREN 106 087 125.",
      en: "Funds are received in the official account of Suleyman & Kabir Humanity, SIREN 106 087 125."
    },
    "etapes.nous-transferons": {
      fr: "Nous transférons",
      en: "We transfer"
    },
    "etapes.virement-sepa-trace-vers": {
      fr: "Virement SEPA tracé vers l'ONG El Habib, encadré par une convention de partenariat signée.",
      en: "Traceable SEPA bank transfer to NGO El Habib, governed by a signed partnership agreement."
    },
    "etapes.le-terrain-agit": {
      fr: "Le terrain agit",
      en: "Work begins on the ground"
    },
    "etapes.construction-sur-place-avec": {
      fr: "Construction sur place, avec photos, justificatifs et rapports d'avancement partagés avec vous.",
      en: "Construction on site, with photos, receipts and progress reports shared with you."
    },
    "etapes.nos-engagements-envers-vous": {
      fr: "Nos engagements envers vous",
      en: "Our commitments to you"
    },
    "etapes.photos-videos-de-l": {
      fr: "Photos & vidéos de l'avancement",
      en: "Progress photos & videos"
    },
    "etapes.nous-nous-engageons-a": {
      fr: "Nous nous engageons à vous envoyer des photos et vidéos de l'avancement du chantier tout au long de la construction.",
      en: "We will send you photos and videos of the construction throughout the project."
    },
    "etapes.chaque-etape-annoncee": {
      fr: "Chaque étape annoncée",
      en: "Every stage shared"
    },
    "etapes.vous-serez-informe-de": {
      fr: "Vous serez informé de chaque étape de la construction, des fondations aux finitions, au fur et à mesure.",
      en: "You will be kept informed at every stage of construction, from the foundations to the finishing touches."
    },
    "etapes.inauguration-en-direct": {
      fr: "Inauguration en direct",
      en: "Live inauguration"
    },
    "etapes.vous-serez-invite-a": {
      fr: "Vous serez invité à l'inauguration pour accueillir les enfants par vidéo, puis recevrez un rapport complet à la fin du projet.",
      en: "You will be invited to welcome the children by video at the inauguration, and will receive a full report at the end of the project."
    },
    "transparence.votre-confiance-se-verifie": {
      fr: "Votre confiance se vérifie, elle ne se demande pas",
      en: "Trust you can check, not just take our word for"
    },
    "transparence.chaque-virement-vers-l": {
      fr: "Chaque virement vers l'ONG El Habib est documenté. Aucune commission n'est prélevée sur vos dons de sadaqa jariya, seuls les frais de fonctionnement strictement nécessaires sont couverts séparément.",
      en: "Every transfer to NGO El Habib is documented. No commission is deducted from your sadaqa jariyah donations; only strictly necessary running costs are covered separately."
    },
    "transparence.recepisse-prefectoral": {
      fr: "Récépissé préfectoral",
      en: "Prefecture registration receipt"
    },
    "transparence.sous-prefecture-de-mantes": {
      fr: "Sous-préfecture de Mantes-la-Jolie, 3 juin 2026",
      en: "Sub-prefecture of Mantes-la-Jolie, 3 June 2026"
    },
    "transparence.convention-ong-el-habib": {
      fr: "Convention ONG El Habib",
      en: "Partnership agreement with NGO El Habib"
    },
    "transparence.modalites-de-transfert-et": {
      fr: "Modalités de transfert et reporting encadrées",
      en: "Sets out the transfer and reporting terms"
    },
    "transparence.rapport-d-avancement": {
      fr: "Rapport d'avancement",
      en: "Progress report"
    },
    "transparence.publie-a-chaque-etape": {
      fr: "Publié à chaque étape clé du chantier",
      en: "Published at every key construction milestone"
    },
    "transparence.fiche-d-identite-de": {
      fr: "Fiche d'identité de l'association",
      en: "Association fact sheet"
    },
    "transparence.informations-publiques-et-verifiables": {
      fr: "Informations publiques et vérifiables",
      en: "Public, verifiable information"
    },
    "transparence.nom": {
      fr: "Nom",
      en: "Name"
    },
    "transparence.statut": {
      fr: "Statut",
      en: "Status"
    },
    "transparence.annonce-n-2091-9": {
      fr: "Annonce n° 2091, 9 juin 2026",
      en: "Notice no. 2091, 9 June 2026"
    },
    "transparence.pays": {
      fr: "Pays",
      en: "Country"
    },
    "transparence.partenaire-terrain": {
      fr: "Partenaire terrain",
      en: "Field partner"
    },
    "transparence.ong-el-habib": {
      fr: "ONG El Habib",
      en: "NGO El Habib"
    },
    "transparence.president": {
      fr: "Président",
      en: "President"
    },
    "don.faire-un-don": {
      fr: "Faire un don",
      en: "Make a donation"
    },
    "don.chaque-montant-a-un": {
      fr: "Chaque montant a un impact concret",
      en: "Every amount has a real impact"
    },
    "don.choisissez-le-montant-qui": {
      fr: "Choisissez le montant qui vous parle. 100 % est destiné aux trois constructions du projet Bangladesh.",
      en: "Choose the amount that is right for you. 100% goes to the three construction projects in Bangladesh."
    },
    "don.le-don-qui-multiplie": {
      fr: "Le don qui, multiplié par {n} personnes, finance tout le projet.",
      en: "The donation that, multiplied by {n} people, funds the whole project."
    },
    "don.je-donne-5": {
      fr: "Je donne 5 €",
      en: "I give €5"
    },
    "don.de-quoi-financer-des": {
      fr: "De quoi financer des matériaux de construction pour le puits.",
      en: "Enough to fund construction materials for the well."
    },
    "don.je-donne-20": {
      fr: "Je donne 20 €",
      en: "I give €20"
    },
    "don.une-contribution-significative-a": {
      fr: "Une contribution significative à l'orphelinat des 60 enfants.",
      en: "A meaningful contribution to the orphanage for 60 children."
    },
    "don.je-donne-50": {
      fr: "Je donne 50 €",
      en: "I give €50"
    },
    "don.don-en-ligne": {
      fr: "Don en ligne",
      en: "Online donation"
    },
    "don.montant-libre": {
      fr: "Montant libre",
      en: "Any amount"
    },
    "don.choisissez-votre-propre-montant": {
      fr: "Choisissez votre propre montant, chaque euro compte.",
      en: "Choose your own amount: every euro counts."
    },
    "don.paiement-securise-par-carte": {
      fr: "Paiement sécurisé par carte bancaire sur notre cagnotte officielle CotizUp, qui s'ouvre dans un nouvel onglet.",
      en: "Secure card payment on our official CotizUp fundraising page, which opens in a new tab."
    },
    "final.chaque-euro-donne-construit": {
      fr: "Chaque euro donné construit une mosquée, éduque un orphelin, creuse un puits",
      en: "Every euro given builds a mosque, educates an orphan, digs a well"
    },
    "final.que-allah-accepte-de": {
      fr: "Que Allah accepte de chaque donateur et en fasse une lumière pour lui le Jour du Jugement. Amine. En collaboration avec l'ONG El Habib.",
      en: "May Allah accept from every donor and make it a light for them on the Day of Judgement. Ameen. In partnership with NGO El Habib."
    },
    "final.faire-un-don-aujourd": {
      fr: "Faire un don aujourd'hui",
      en: "Donate today"
    },
    "final.nous-contacter": {
      fr: "Nous contacter",
      en: "Contact us"
    },
    "pied.association-humanitaire-loi-1901": {
      fr: "Association humanitaire loi 1901, en collaboration avec l'ONG El Habib, au service des populations vulnérables à travers le monde.",
      en: "French humanitarian non-profit (1901 Act), working with NGO El Habib to serve vulnerable communities around the world."
    },
    "pied.association": {
      fr: "Association",
      en: "Association"
    },
    "pied.informations-legales": {
      fr: "Informations légales",
      en: "Legal information"
    },
    "pied.publiee-au-joafe-annonce": {
      fr: "Publiée au JOAFE, annonce n° 2091<br>Association loi 1901, France",
      en: "Published in the Official Journal (JOAFE), notice no. 2091<br>French non-profit association (1901 Act)"
    },
    "pied.mentions-legales-et-confidentialite": {
      fr: "Mentions légales et confidentialité",
      en: "Legal notice and privacy"
    },
    "pied.lun-ven-9-h": {
      fr: "Lun – Ven, 9 h – 18 h",
      en: "Mon – Fri, 9 am – 6 pm"
    },
    "pied.2026-suleyman-kabir-humanity": {
      fr: "© 2026 Suleyman & Kabir Humanity. Tous droits réservés.",
      en: "© 2026 Suleyman & Kabir Humanity. All rights reserved."
    },
    "pied.qu-allah-accepte-de": {
      fr: "Qu'Allah accepte de chacun d'entre nous",
      en: "May Allah accept from each of us"
    },
    "dock.collectes-sur": {
      fr: "collectés sur",
      en: "raised of"
    },

    /* ---------- Métadonnées SEO ---------- */
    "meta.title": {
      fr: "Suleyman & Kabir Humanity — Orphelinat, mosquée et puits au Bangladesh",
      en: "Suleyman & Kabir Humanity — Orphanage, mosque and well in Bangladesh"
    },
    "meta.desc": {
      fr: "Suleyman & Kabir Humanity construit, avec l'ONG El Habib, un orphelinat pour 60 enfants, une mosquée et un puits d'eau potable au Bangladesh. Chaque don est tracé.",
      en: "Suleyman & Kabir Humanity is working with NGO El Habib to build an orphanage for 60 children, a mosque and a drinking-water well in Bangladesh. Every donation is traced."
    },
    "meta.og-title": {
      fr: "Une aumône qui continue de grandir après vous",
      en: "Charity that keeps growing long after you"
    },
    "legal.meta.title": {
      fr: "Mentions légales et confidentialité · Suleyman & Kabir Humanity",
      en: "Legal notice and privacy · Suleyman & Kabir Humanity"
    },
    "legal.meta.desc": {
      fr: "Mentions légales et politique de confidentialité du site de l'association Suleyman & Kabir Humanity.",
      en: "Legal notice and privacy policy for the website of the Suleyman & Kabir Humanity association."
    },
    "legal.retour": {
      fr: "Retour au site",
      en: "Back to the website"
    },

    /* ---------- Textes générés par le script ---------- */
    "js.donors": {
      fr: "{n} donateurs déjà mobilisés",
      en: "{n} donors have already given"
    },
    "js.copy": {
      fr: "Copier le lien",
      en: "Copy link"
    },
    "js.copied": {
      fr: "Lien copié",
      en: "Link copied"
    },
    "js.copy-fail": {
      fr: "Copie impossible : copiez l’adresse du navigateur",
      en: "Couldn’t copy: please copy the address from your browser"
    },
    "js.releve": {
      fr: "Montant relevé sur la cagnotte officielle le {d}",
      en: "Amount taken from the official fundraising page on {d}"
    },
    "js.wall": {
      fr: "Mur de 100 briques : {p} % financé, il reste {r}.",
      en: "Wall of 100 bricks: {p}% funded, {r} still to raise."
    },
    "js.share": {
      fr: "{n} dons de 5 € suffisent pour boucler cette Sadaqa Jariya (orphelinat, mosquée et puits au Bangladesh). Chaque euro compte : {url}",
      en: "Just {n} donations of €5 will complete this Sadaqa Jariyah (orphanage, mosque and well in Bangladesh). Every euro counts: {url}"
    },
    "js.menu-open": {
      fr: "Ouvrir le menu",
      en: "Open menu"
    },
    "js.menu-close": {
      fr: "Fermer le menu",
      en: "Close menu"
    }
  };

  const LANGS = ['fr', 'en'];
  const STORE = 'skh-lang';

  /* Texte d'une clé dans une langue, avec variables {x} ; repli sur le français si la clé manque. */
  function t(key, lang, vars) {
    const entry = S[key];
    let s = entry ? (entry[lang] != null ? entry[lang] : entry.fr) : '';
    if (!entry && window.console) console.warn('[i18n] clé manquante :', key);
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  }

  /* Langue de départ : ?lang= dans l'adresse, sinon choix mémorisé, sinon langue du navigateur. */
  function initialLang() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try { const saved = localStorage.getItem(STORE); if (LANGS.includes(saved)) return saved; } catch (e) { /* stockage indisponible */ }
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'fr';
    return /^fr\b/i.test(nav) ? 'fr' : 'en';
  }
  function saveLang(lang) { try { localStorage.setItem(STORE, lang); } catch (e) { /* stockage indisponible */ } }

  /* Applique une langue à toute la page : textes, libellés d'accessibilité, alt, lang, métadonnées.
     Les éléments à gabarit ({n}…) sont laissés au script de la page (data-i18n-template). */
  function apply(lang, meta) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (!el.hasAttribute('data-i18n-template')) el.innerHTML = t(el.dataset.i18n, lang);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria, lang)));
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => el.setAttribute('alt', t(el.dataset.i18nAlt, lang)));
    document.querySelectorAll('.lang button[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    if (meta) {
      if (meta.title) document.title = t(meta.title, lang);
      const set = (sel, val) => { const el = document.querySelector(sel); if (el && val) el.setAttribute('content', val); };
      if (meta.desc) set('meta[name="description"]', t(meta.desc, lang));
      if (meta.ogTitle) set('meta[property="og:title"]', t(meta.ogTitle, lang));
      if (meta.desc) set('meta[property="og:description"]', t(meta.desc, lang));
      set('meta[property="og:locale"]', lang === 'en' ? 'en_GB' : 'fr_FR');
      set('meta[property="og:locale:alternate"]', lang === 'en' ? 'fr_FR' : 'en_GB');
    }
  }

  window.SKH_I18N = { strings: S, langs: LANGS, t, initialLang, saveLang, apply };
})();
