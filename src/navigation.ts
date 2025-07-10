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
  logoSection: {
    name: 'Xinyi Class',
    tagline: 'Nurturing creativity and wellness',
  },
  address: {
    title: 'Location',
    content: '105 Gordon Baker Rd, North York, ON M2H 3S1',
  },
  contact: {
    title: 'Contact Us',
    email: 'xinyiartschool@gmail.com',
    phone: '(416) 567-6538',
  },
  socialLinks: [],
  footNote: '© 2025 Xinyi Class. All rights reserved.',
};
