type AboutProps = {
  about: {
    intro: string;
    strengths: string[];
  };
};

export function About({ about }: AboutProps) {
  return (
    <section id="about" className="section sectionTint">
      <div className="sectionHeader">
        <p className="sectionKicker">About</p>
        <h2>데이터와 서비스 흐름을 함께 보는 지원자</h2>
      </div>
      <div className="aboutGrid">
        <p className="aboutIntro">{about.intro}</p>
        <ul className="checkList">
          {about.strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
