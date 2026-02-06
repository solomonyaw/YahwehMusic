
export const IMAGES = {
  COVER: "https://storage.googleapis.com/static.recommender.com/v2/generated-images/0628e833-289b-4f9e-a890-482f34f78330.png",
  LOGO: "https://storage.googleapis.com/static.recommender.com/v2/generated-images/7f191147-3801-49c0-994c-81329c0b1156.png",
  CREATOR_AVATAR: "https://picsum.photos/seed/solomon/400/400", // Placeholder for Solomon
  GRACE_GLORY_COVER: "https://picsum.photos/seed/grace/600/600",
  HOLY_SWEAT_COVER: "https://picsum.photos/seed/sweat/600/600",
  HOLY_SWEAT_BOOK: "https://picsum.photos/seed/book1/400/600",
  SEVEN_CHURCH_COVER: "https://picsum.photos/seed/church/600/600",
  SEVEN_CHURCH_BOOK: "https://picsum.photos/seed/book2/400/600",
  ORIGINAL_SIN_COVER: "https://picsum.photos/seed/sin/600/600",
};

export const SOCIAL_LINKS = {
  YOUTUBE: "https://www.youtube.com/@YahwehMusic",
  GITHUB: "https://www.github.com/solomonyaw",
  HANDBILL: "http://www.handbillapp.com",
};

export const ALBUMS = [
  {
    id: "grace-and-glory",
    title: "Grace and Glory",
    description: "An atmospheric journey through worship and praise, capturing the majestic essence of God's unfailing grace and the brilliance of His glory. This album blends soaring AI melodies with profound scriptural truths.",
    youtubeId: "d1d82CIgDk8",
    playlistUrl: "https://www.youtube.com/watch?v=d1d82CIgDk8&list=PLRIuMRLPIA9Uuu9RZxwFMACm3scC5J6DX&index=1",
    cover: IMAGES.GRACE_GLORY_COVER,
  },
  {
    id: "holy-sweat",
    title: "Holy Sweat",
    description: "Inspired by Tim Hansel’s timeless message, this album challenges the listener to move beyond passive faith. It captures the spirit of active devotion, spiritual discipline, and the courageous effort required to live a life fully committed to God’s purpose. Each track is a sonic representation of 'Holy Sweat'—the beautiful exertion of serving the Kingdom.",
    youtubeId: "DlzGD_6u52k",
    playlistUrl: "https://www.youtube.com/watch?v=DlzGD_6u52k&list=PLRIuMRLPIA9W4ZdXfuOmM6AnTYZmuE3su",
    cover: IMAGES.HOLY_SWEAT_COVER,
    bookCover: IMAGES.HOLY_SWEAT_BOOK,
    bookTitle: "Holy Sweat by Tim Hansel"
  },
  {
    id: "the-seven-church-ages",
    title: "The Seven Church Ages",
    description: "A profound exploration of William Marrion Branham’s exposition on Revelation. This project artisticly reflects the spiritual messages, warnings, and promises given to the seven church ages, pointing listeners back to Christ and spiritual discernment through spoken word and transcendent AI-generated orchestration.",
    youtubeId: "0ZWC3vfaK10",
    playlistUrl: "https://www.youtube.com/watch?v=0ZWC3vfaK10&list=PLRIuMRLPIA9V0Pdb9f0Xx2CQROGMVXnPS&index=14",
    cover: IMAGES.SEVEN_CHURCH_COVER,
    bookCover: IMAGES.SEVEN_CHURCH_BOOK,
    bookTitle: "An Exposition of the Seven Church Ages by William Branham"
  }
];
