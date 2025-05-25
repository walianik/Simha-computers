const services = [
    {
        title: "Web Design",
        icon: "fas fa-laptop-code text-primary",
        description: "Creative and responsive designs tailored to your business goals."
    },
    {
        title: "Branding",
        icon: "fas fa-lightbulb text-success",
        description: "Build a strong, consistent identity that resonates with your audience."
    },
    {
        title: "SEO",
        icon: "fas fa-search text-danger",
        description: "Optimize your website to rank higher and drive more organic traffic."
    },
    {
        title: "Digital Marketing",
        icon: "fas fa-bullhorn text-warning",
        description: "Reach your ideal audience through strategic campaigns and analytics."
    },
    {
        title: "Social Media",
        icon: "fas fa-bullhorn text-warning",
        description: "Reach your ideal audience through strategic campaigns and analytics."
    },
    {
        title: "Pitch Deck Design",
        icon: "fas fa-bullhorn text-warning",
        description: "Reach your ideal audience through strategic campaigns and analytics."
    },

];

const container = document.querySelector("#services-container");
let delay = 100;

services.forEach(service => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", delay);

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <i class="${service.icon} fa-2x mb-3"></i>
          <h5 class="card-title">${service.title}</h5>
          <p class="card-text">${service.description}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
    delay += 100;
});


  const techCards = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Rank higher on Google and attract organic traffic to your website. Our SEO services include keyword research, on-page optimization, backlink building, and detailed analytics. We help your brand be seen by the right audience at the right time.",
      img: "fa-solid fa-magnifying-glass-chart"
    },
    {
      title: "Social Media Marketing",
      desc: "Connect, engage, and grow your audience through platforms like Facebook, Instagram, Twitter, and LinkedIn. We create share-worthy content, manage your accounts, and run targeted ad campaigns to build brand awareness and drive conversions.",
      img: "fa-brands fa-facebook-f"
    },
    {
      title: "Google Ads & Pay-Per-Click (PPC)",
      desc: "Boost your visibility instantly with PPC campaigns. Our certified experts manage Google Ads and Bing Ads, optimizing every penny spent. Get measurable results through targeted ads that bring qualified leads to your website.",
      img: "fa-solid fa-chart-line"
    },
    {
      title: "Content Marketing",
      desc: "Engage your audience with high-quality content that informs, entertains, and converts. From blog posts and infographics to video scripts and landing pages, we craft content that supports your SEO and branding goals.",
      img: "fa-solid fa-file-lines"
    },
    {
      title: "Email Marketing",
      desc: "Turn your email list into loyal customers. We design personalized email campaigns that nurture leads, promote offers, and drive repeat business. Track open rates, clicks, and conversions to measure real ROI.",
      img: "fa-solid fa-envelope-open-text"
    },
    {
      title: "Website Design & Optimization",
      desc: "Your website is your digital storefront — make it count. We create responsive, fast, and user-friendly websites optimized for conversions and SEO. From design to speed to mobile usability, we make sure every pixel performs.",
      img: "fa-solid fa-globe"
    }
  ];

 const techCardsContainer = document.getElementById("techCardsContainer");

  techCards.forEach((card, i) => {
    const div = document.createElement("div");
    div.className = "tech-card";
    div.setAttribute("data-aos", "fade-up");
    div.setAttribute("data-aos-delay", `${i * 100}`);

    div.innerHTML = `
      <div class="icon-wrapper">
        <i class="${card.img}"></i>
      </div>
      <h5>${card.title}</h5>
      <p>${card.desc}</p>
    `;

    techCardsContainer.appendChild(div);
  });

 const gradientColors = [
  "linear-gradient(135deg, #667eea, #764ba2)",       // soft purple blue
  "linear-gradient(135deg, #f7971e, #ffd200)",       // warm gold
  "linear-gradient(135deg, #11998e, #38ef7d)",       // teal green
  "linear-gradient(135deg, #fc5c7d, #6a82fb)",       // pink to blue
  "linear-gradient(135deg, #00c6ff, #0072ff)",       // bright blue
  "linear-gradient(135deg, #f77062, #fe5196)"  
];

let activeIndex = 0;

setInterval(() => {
  const cards = document.querySelectorAll(".tech-card");

  // Reset all cards background to white
  cards.forEach(card => {
    card.style.background = "#fff";   // reset to white background (not color)
    card.style.color = "#333";         // reset text color to dark
  });

  // Set gradient background and white text for active card
  if (cards.length > 0) {
    cards[activeIndex].style.background = gradientColors[activeIndex % gradientColors.length];
    cards[activeIndex].style.color = "#fff";  // white text for contrast
  }

  activeIndex = (activeIndex + 1) % cards.length;
}, 3000);


const tiles = document.querySelectorAll(".flip-inner");

setInterval(() => {
  // Remove all flips first
  tiles.forEach(tile => tile.classList.remove("flipped"));

  // Pick a random tile to flip
  const randomIndex = Math.floor(Math.random() * tiles.length);
  tiles[randomIndex].classList.add("flipped");
}, 4000);

