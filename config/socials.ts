import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@amolshukla",
    icon: Icons.gitHub,
    link: "https://github.com/amolshukla",
  },
  {
    name: "LinkedIn",
    username: "Amol shukla",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/amolshukla",
  },
  {
    name: "Twitter",
    username: "@amolshukla",
    icon: Icons.twitter,
    link: "https://twitter.com/amolshukla",
  },
  {
    name: "Gmail",
    username: "amolshukla",
    icon: Icons.gmail,
    link: "mailto:amolshukla@gmail.com",
  },
];
