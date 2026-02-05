import Section from "../components/Section";
import ImagePlaceholder from "../components/ImagePlaceholder";
import aboutData from "../../i18n/en-about.json";

export default function AboutLayout() {
  const { bannerLabel, sections } = aboutData;

  return (
    <div>
      {/* Banner */}
      <Section>
        <div style={{ width: "500px", margin: "0 auto" }}>
          <ImagePlaceholder label={bannerLabel} ratio="11/5" />
        </div>
      </Section>

      {/* Sections */}
      {sections.map((sec, idx) => (
        <Section key={idx} title={sec.title}>
          {/* Simple content */}
          {sec.content && <p>{sec.content}</p>}

          {/* List sections */}
          {sec.list && (
            <ul>
              {sec.list.map((item, i) => (
                <li key={i}>
                  {item.heading && <strong>{item.heading}</strong>}
                  {item.items && (
                    <ul>
                      {item.items.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  )}
                  {/* For headings array inside list item */}
                  {item.headings && (
                    <ul>
                      {item.headings.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Direct headings array (for last section if not inside list) */}
          {sec.headings && (
            <ul>
              {sec.headings.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </Section>
      ))}
    </div>
  );
}
