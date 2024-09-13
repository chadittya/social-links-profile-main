interface SocialLinkProps {
  href: string
  text: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="block w-full bg-[#333333] text-white py-3 rounded-lg hover:bg-[#c5f82a] hover:text-[#333333] transition-colors"
    >
      {text}
    </a>
  )
}

export default SocialLink