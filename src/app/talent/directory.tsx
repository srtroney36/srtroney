"use client";

import { useState } from "react";

const talents = [
  { name: "Nadia Karim", role: "Brand Designer", skills: "Identity systems / Art direction", availability: "Available" },
  { name: "Rafi Hasan", role: "Frontend Developer", skills: "Next.js / Product interfaces", availability: "Project-based" },
  { name: "Maliha Noor", role: "Motion Designer", skills: "Kinetic type / Explainers", availability: "Available" },
  { name: "Tanvir Ahmed", role: "Performance Marketer", skills: "Meta ads / Conversion systems", availability: "Project-based" },
  { name: "Sami Rahman", role: "Commercial Photographer", skills: "Product / Portrait / Lighting", availability: "Available" },
  { name: "Ayesha Islam", role: "Content Strategist", skills: "Research / Editorial / Scripts", availability: "Project-based" },
];

const filters = ["All", "Design", "Development", "Marketing", "Media"];

function category(role: string) {
  if (role.includes("Designer")) return "Design";
  if (role.includes("Developer")) return "Development";
  if (role.includes("Marketer") || role.includes("Strategist")) return "Marketing";
  return "Media";
}

export default function TalentDirectory() {
  const [filter, setFilter] = useState("All");
  const visibleTalents = filter === "All" ? talents : talents.filter((talent) => category(talent.role) === filter);

  return <div className="talent-directory"><p className="directory-note">Current network snapshot. These profiles represent the kinds of specialists I match to suitable projects.</p><div className="talent-filters" aria-label="Filter the talent network by discipline">{filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="talent-grid">{visibleTalents.map((talent) => <article className="talent-card" key={talent.name}><div className="talent-avatar">{talent.name.split(" ").map((part) => part[0]).join("")}</div><div><span className="card-kicker">{talent.availability}</span><h2>{talent.name}</h2><h3>{talent.role}</h3><p>{talent.skills}</p></div><a href={`mailto:hello@srtroney.com?subject=Update%20my%20talent%20network%20profile`}>I want to be considered ↗</a></article>)}</div></div>;
}
