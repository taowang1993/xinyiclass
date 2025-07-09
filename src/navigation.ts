import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Toronto Art',
      href: getPermalink('/toronto-art'),
    },
    {
      text: 'Toronto Yoga',
      href: getPermalink('/toronto-yoga'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Contact',
      links: [
        { text: '105 Gordon Baker Rd, North York, ON M2H 3S1' },
        { text: 'Email: xinyiartschool@gmail.com' },
        { text: 'Phone: (416) 567-6538' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Nurturing creativity and wellness in North York, Toronto.' }],
  socialLinks: [],
  footNote: `
    © 2025 Xinyi Class. All rights reserved.
  `,
};
