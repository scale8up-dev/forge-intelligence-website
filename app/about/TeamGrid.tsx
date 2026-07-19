"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  details?: string[];
  image: string;
};

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const biographyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedMember) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMember(null);
    };

    document.body.classList.add("team-modal-open");
    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.classList.remove("team-modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedMember]);

  return (
    <>
      <div className="team-grid motion-stagger">
        {team.map((member, index) => (
          <article key={member.name} className="team-card glass-card" data-motion-item>
            <span className="team-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className="team-photo-wrap">
              <Image
                unoptimized
                src={member.image}
                alt={`Photo of ${member.name}`}
                width={320}
                height={320}
                className="team-photo"
              />
            </div>
            <div className="team-info">
              <span className="team-role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </div>
            <div className="team-profile-action">
              {member.details?.length ? (
                <button type="button" className="team-profile-button" onClick={() => setSelectedMember(member)} aria-haspopup="dialog">
                  Read full bio <span aria-hidden="true">→</span>
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {selectedMember ? createPortal(
        <div
          className="team-modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedMember(null)}
          onWheel={(event) => {
            const biography = biographyRef.current;
            if (!biography) return;
            event.preventDefault();
            biography.scrollBy({ top: event.deltaY, behavior: "auto" });
          }}
        >
          <section
            className="team-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-name"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button ref={closeButtonRef} type="button" className="team-modal-close" onClick={() => setSelectedMember(null)} aria-label="Close biography">
              <span aria-hidden="true">×</span>
            </button>
            <div className="team-modal-profile">
              <div className="team-modal-photo-wrap">
                <Image unoptimized src={selectedMember.image} alt={`Photo of ${selectedMember.name}`} width={420} height={420} className="team-modal-photo" />
              </div>
              <div className="team-modal-intro">
                <p>{selectedMember.role}</p>
                <h2 id="team-modal-name">{selectedMember.name}</h2>
                <span>Forge Intelligence AI</span>
              </div>
            </div>
            <div ref={biographyRef} className="team-modal-copy" tabIndex={0} aria-label={`Biography for ${selectedMember.name}`}>
              <p className="team-modal-lede">{selectedMember.bio}</p>
              {selectedMember.details?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
