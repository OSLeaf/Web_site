// Event data
const eventRanges = [
  {
    title: "Mapping - Koovee",
    start: "2015-01-01",
    end: "2015-12-31",
    url: "https://koovee.fi/suunnistus/",
    description:
      "Created map of Vuores municipality for use in the local school and my orienteering association",
  },
  {
    title: "TET - Suunnistajankauppa",
    start: "2015-06-01",
    end: "2015-06-01",
    description: "One day work experience as a shop hand",
    url: "https://www.suunnistajankauppa.fi/index.html",
    important: true,
  },
  {
    title: "TET - Dekati Ltd",
    start: "2016-06-01",
    end: "2016-06-14",
    description:
      "Two week work experience in manufacturing of ELPI®+ measuring devices",
    url: "https://dekati.com/",
    important: true,
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2016-06-01",
    end: "2016-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
    description:
      "Huge orienteering relay I take part each year. When I'm not running the relay I'm selling shoes in Suunnistajankauppa",
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2017-06-01",
    end: "2017-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Event Tech - Sammon keskuslukio",
    start: "2017-08-01",
    end: "2018-06-30",
    url: "https://www.tampere.fi/sammon-keskuslukio",
    description:
      "I was part of a team that made sound and light tech possible in any school event",
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2018-06-01",
    end: "2018-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Digituutori - Sammon keskuslukio",
    start: "2018-08-01",
    end: "2020-06-30",
    url: "https://samkendigituutorit.wordpress.com/",
    description:
      "I was leading a team of student digital tutors. We made a website to host all guides to the softwares. (Click the name to get there)",
  },
  {
    title: "Event Tech Lead - Sammon keskuslukio",
    start: "2018-08-01",
    end: "2020-06-30",
    url: "https://www.tampere.fi/sammon-keskuslukio",
    description: "I became the lead of the event tech team.",
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2019-06-01",
    end: "2019-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Summer Job - Saarioinen",
    start: "2020-05-01",
    end: "2020-08-31",
    url: "https://www.saarioinen.fi/",
    description: "Summer work. Mostly consistet of moving boxes around",
    important: true,
  },
  {
    title: "Civil Service - Radiation and Nuclear Safety Authority (STUK)",
    start: "2021-04-01",
    end: "2021-09-30",
    url: "https://stuk.fi/etusivu",
    description:
      "I developed with my coworker a database to store nuclear waste information after the final disposal. \n Link to he published scientific paper about it can be found on the front page.",
    important: true,
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2021-06-01",
    end: "2021-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Summer Job - Avarn Security",
    start: "2022-06-01",
    end: "2022-09-30",
    url: "https://www.avarnsecurity.fi/",
    description: "I worked as a security guard at Avarn Security",
    important: true,
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2022-06-01",
    end: "2022-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Network crew - Junction 2022",
    start: "2022-11-04",
    end: "2022-11-06",
    url: "https://hackjunction.com/",
    description:
      "I was part of the team that made sure that everyone in the hackathon had access to the internet and LAN access to each other if needed",
  },
  {
    title: "Event Tech - Teekkarispeksi",
    start: "2022-09-01",
    end: "2024-09-30",
    url: "https://teekkarispeksi.fi/",
    description:
      "I joined Teekkarispeksi's team of event technicians (Tekniikkasektori) that make student parties in Otaniemi possible",
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2023-06-01",
    end: "2023-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Course Assistant - Aalto University",
    start: "2023-09-01",
    end: "2023-12-31",
    url: "https://www.aalto.fi/fi",
    description:
      "I have worked as a Course assistant for the course: Tietorakenteet ja Algorithmit Y every spring since 2023",
    important: true,
  },
  {
    title: "Production Sound Tech - Teekkarispeksi",
    start: "2023-09-01",
    end: "2024-05-31",
    url: "https://teekkarispeksi.fi/",
    description:
      "I was part of the sound team in the 2024 Teekkarispeksi production: Naamion takana",
  },
  {
    title: "KV ISO - Guild of Electrical Enginering",
    start: "2023-09-01",
    end: "2024-04-01",
    url: "https://sahkoinsinoorikilta.fi/",
    description:
      "In 2023 and 2024 I worked as a international tutor for the Guild of Electrical Enginering",
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2024-06-01",
    end: "2024-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Course Assistant - Aalto University",
    start: "2024-09-01",
    end: "2024-12-31",
    url: "https://www.aalto.fi/fi",
    important: true,
  },
  {
    title: "Tech Lead - Teekkarispeksi",
    start: "2024-09-01",
    end: "2025-12-31",
    url: "https://teekkarispeksi.fi/",
    description:
      "I became a boardmember of Teekkarispeksi and the lead soundengineer of Tekniikkasektori",
  },
  {
    title: "Production Logistics Lead - Teekkarispeksi",
    start: "2024-09-01",
    end: "2025-05-31",
    url: "https://teekkarispeksi.fi/",
    description:
      "I worked as the head of Logistics in the 2025 Teekkarispeksi production: Obeliski",
  },
  {
    title: "Software project - Cornea Sense",
    start: "2024-09-01",
    end: "2025-05-31",
    url: "https://corneasense.com/",
    description:
      "In Software project course my team developet software to control medical eye measurement devices",
    important: true,
  },
  {
    title: "KV ISO - Guild of Electrical Enginering",
    start: "2024-09-01",
    end: "2025-04-01",
    url: "https://sahkoinsinoorikilta.fi/",
  },
  {
    title: "Jukolan viesti - Suunnistajankauppa",
    start: "2025-06-01",
    end: "2025-06-02",
    url: "https://www.suunnistajankauppa.fi/index.html",
  },
  {
    title: "Software Developer - Clausal Computing",
    start: "2025-05-01",
    end: "2025-12-31",
    url: "https://clausal.com/",
    description: "My current software development job",
    important: true,
  },
  {
    title: "Course Assistant - Aalto University",
    start: "2025-09-01",
    end: "2025-12-31",
    url: "https://www.aalto.fi/fi",
    important: true,
  },
  {
    title: "Production Stage Management Lead - Teekkarispeksi",
    start: "2025-09-01",
    end: "2025-12-31",
    url: "https://teekkarispeksi.fi/",
    description:
      "I'm working as the head of Stage management in the 2026 Teekkarispeksi production: (Name not yet revealed)",
  },
];

const timelineHeight = 1900;
const timelineContainer = document.getElementById("timeline-container");
const eventSectionsDiv = document.getElementById("event-sections");

// Compute min and max dates
const allDates = eventRanges.flatMap((e) => [
  new Date(e.start),
  new Date(e.end),
]);
const minDate = new Date(Math.min(...allDates));
const maxDate = new Date(Math.max(...allDates));

// Convert date to y-position (inverted timeline: newest on top)
function dateToY(dateStr) {
  const date = new Date(dateStr);
  return ((date - minDate) / (maxDate - minDate)) * timelineHeight;
}

// Draw month labels every 6 months
const startMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
for (let d = new Date(startMonth); d <= maxDate; d.setMonth(d.getMonth() + 6)) {
  const y = timelineHeight - dateToY(d.toISOString().split("T")[0]);
  const label = document.createElement("div");
  label.className = "month-label";
  label.style.top = y + "px";
  label.innerText = d.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
  timelineContainer.appendChild(label);
}

// Color palette
const colorMap = {};
const palette = [
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#f1c40f",
  "#9b59b6",
  "#1abc9c",
  "#e67e22",
  "#16a085",
  "#d35400",
  "#8e44ad",
  "#2980b9",
  "#c0392b",
  "#27ae60",
  "#f39c12",
  "#2c3e50",
  "#7f8c8d",
  "#e84393",
  "#00b894",
  "#6c5ce7",
  "#fd79a8",
  "#e17055",
  "#0984e3",
  "#00cec9",
  "#ffeaa7",
  "#fab1a0",
  "#fdcb6e",
];
let colorIdx = 0;
eventRanges.forEach((e) => {
  if (!colorMap[e.title])
    colorMap[e.title] = palette[colorIdx++ % palette.length];
});

const baseLeft = 100; // distance from timeline line
const columnSpacing = 25; // horizontal spacing between columns
const importantWidth = 20;
const normalWidth = 14;

const columns = [];

eventRanges.forEach((event) => {
  const yTop = timelineHeight - dateToY(event.end);
  const yBottom = timelineHeight - dateToY(event.start);
  const height = Math.max(yBottom - yTop, 6);

  const important = event.important || false;
  const barWidth = important ? importantWidth : normalWidth;
  const barBorderColor = important ? "#f1c40f" : "none"; // bright yellow for visibility

  // Find first available column (important events still first in array)
  let col = 0;
  while (
    columns[col] &&
    columns[col].some((e) => !(yBottom < e.yTop || yTop > e.yBottom))
  ) {
    col++;
  }
  columns[col] = columns[col] || [];
  columns[col].push({ yTop, yBottom, important });

  // Compute left position: column base + centering offset for thin bars
  const colBaseLeft = baseLeft + col * columnSpacing;
  const centerOffset = (importantWidth - barWidth) / 2;
  const barLeft = colBaseLeft + centerOffset;

  const bar = document.createElement("div");
  bar.className = "event-bar";
  bar.style.top = yTop + "px";
  bar.style.height = height + "px";
  bar.style.left = barLeft + "px";
  bar.style.width = barWidth + "px";
  bar.style.backgroundColor = colorMap[event.title];
  bar.style.border = important ? `2px solid ${barBorderColor}` : "none";
  bar.style.borderRadius = "3px";
  bar.setAttribute("data-tooltip", `${event.title}`);

  timelineContainer.appendChild(bar);
});

// Side labels grouped by year
const uniqueEvents = [...new Set(eventRanges.map((e) => e.title))]
  .map((title) => {
    const firstRange = eventRanges
      .filter((e) => e.title === title)
      .reduce((a, b) => (new Date(a.start) < new Date(b.start) ? a : b));
    return {
      title,
      firstStart: firstRange.start,
      description: firstRange.description,
      important: firstRange.important || false, // carry over important flag
      url: firstRange.url || null, // carry over URL
    };
  })
  .sort((a, b) => new Date(b.firstStart) - new Date(a.firstStart));

const years = [
  ...new Set(uniqueEvents.map((e) => new Date(e.firstStart).getFullYear())),
].sort((a, b) => b - a);

years.forEach((year) => {
  const yearSection = document.createElement("div");
  yearSection.className = "year-section";

  const yearLabel = document.createElement("div");
  yearLabel.className = "year-label";
  yearLabel.innerHTML = `${year} <span class="year-arrow">⟶</span>`;
  yearSection.appendChild(yearLabel);

  uniqueEvents
    .filter((e) => new Date(e.firstStart).getFullYear() === year)
    .forEach((e) => {
      const nameDiv = document.createElement("div");
      nameDiv.className = "event-name";
      nameDiv.style.color = colorMap[e.title];

      // Make important events stand out
      if (e.important) {
        nameDiv.style.fontWeight = "900";
        nameDiv.style.fontSize = "18px";
      }

      // Create a link if URL exists
      if (e.url) {
        const link = document.createElement("a");
        link.href = e.url;
        link.target = "_blank"; // open in new tab
        link.style.color = colorMap[e.title]; // match bar color
        link.style.textDecoration = "none"; // optional styling
        link.innerText = e.title;
        nameDiv.appendChild(link);
      } else {
        nameDiv.innerText = e.title;
      }

      if (e.description) {
        const descDiv = document.createElement("div");
        descDiv.className = "event-description";
        descDiv.innerText = e.description;

        if (e.important) {
          descDiv.style.fontWeight = "bold";
        }

        nameDiv.appendChild(descDiv);
      }

      yearSection.appendChild(nameDiv);
    });

  eventSectionsDiv.appendChild(yearSection);
});
