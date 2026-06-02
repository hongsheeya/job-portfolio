type ContactProps = {
  contact: {
    message: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
};

export function Contact({ contact }: ContactProps) {
  return (
    <footer id="contact" className="section contactSection">
      <div className="sectionHeader">
        <p className="sectionKicker">Contact</p>
        <h2>함께 이야기할 준비가 되어 있습니다</h2>
        <p>{contact.message}</p>
      </div>
      <div className="contactLinks">
        {contact.links.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
