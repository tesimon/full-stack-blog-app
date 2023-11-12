import Image from "next/image";

const SocialsIcon = () => {
  return (
    <>
      <Image
        src={"/assets/facebook.png"}
        alt="facebook"
        width={24}
        height={24}
      />
      <Image
        src={"/assets/instagram.png"}
        alt="instagram"
        width={24}
        height={24}
      />
      <Image
        src={"/assets/linkedin.png"}
        alt="youtube"
        width={24}
        height={24}
      />
    </>
  );
};
export default SocialsIcon;
