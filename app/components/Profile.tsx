import Image from "next/image";
import SocialLink from "./SocialLink";

const Profile = () => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-[320px] text-center">
      <Image
        src="/assets/images/avatar-jessica.jpeg"
        alt="Jessica Randall"
        width={88}
        height={88}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-white text-2xl font-bold mb-1">Jessica Randall</h1>
      <p className="text-[#c5f82a] text-sm mb-6">London, United Kingdom</p>
      <p className="text-white text-sm mb-6">{'Front-end developer and avid reader.'}</p>
      <div className="space-y-4">
        <SocialLink href="#" text="GitHub" />
        <SocialLink href="#" text="Frontend Mentor" />
        <SocialLink href="#" text="LinkedIn" />
        <SocialLink href="#" text="Twitter" />
        <SocialLink href="#" text="Instagram" />
      </div>
    </div>
  )
}

export default Profile