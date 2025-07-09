# Product Requirements Document (PRD)
**Project:** Xinyi Class Astro

---

## 1. Home Page

### 1.1 Header (Navbar)
- **Element:** `<header>` with Bootstrap navbar
- **Logo/Text:** "Xinyi Class" (left, as brand link)
- **Navigation Links:**
  - "Toronto Art" → `/toronto-art`
  - "Toronto Yoga" → `/toronto-yoga`
- **Favicon:** `favicon.svg`

### 1.2 Hero Section
- **Element:** `<section class="hero">` (background image)
- **Background Image:** `home/banner.jpg` (full-width, top)
- **Text Content (inside .hero-content):**
  - **Headline:**
    - "Unleash Your Creativity at Xinyi Class"
  - **Subheadline/Description:**
    - "Discover art and yoga classes designed to inspire, nurture, and transform in North York, Toronto."
  - **Buttons:**
    - "Explore Toronto Art Classes" → `/toronto-art`
    - "Discover Toronto Yoga Classes" → `/toronto-yoga`

### 1.3 Our Classes Section
- **Element:** `<section class="our-classes">` (contains class cards)
- **Section Title:**
  - "Our Classes"
- **Class Cards (Bootstrap cards in a row):**
  - **Toronto Art Classes Card**
    - **Image:** `home/torontoart.jpg` (top of card)
    - **Title:** "Toronto Art Classes"
    - **Description:** "Explore your creativity through drawing, painting, and mixed media in our welcoming North York studio."
    - **Badge:** "In-Person"
    - **Button:** "Learn More" → `/toronto-art`
  - **Toronto Yoga Classes Card**
    - **Image:** `home/torontoyoga.jpg` (top of card)
    - **Title:** "Toronto Yoga Classes"
    - **Description:** "Find balance and wellness through our rejuvenating yoga sessions designed for all experience levels."
    - **Badge:** "In-Person"
    - **Button:** "Learn More" → `/toronto-yoga`

### 1.4 Why Choose Xinyi Class Section
- **Element:** `<section class="why-choose">` (icon boxes in a row)
- **Section Title:**
  - "Why Choose Xinyi Class?"
- **Icon Boxes:**
  - **Experienced Instructors**
    - **Icon:** SVG (person-check)
    - **Title:** "Experienced Instructors"
    - **Description:** "Learn from passionate teachers with years of experience in art and yoga instruction."
  - **Small Class Sizes**
    - **Icon:** SVG (people)
    - **Title:** "Small Class Sizes"
    - **Description:** "Enjoy personalized attention with our small group sizes and supportive community."
  - **Flexible Scheduling**
    - **Icon:** SVG (clock)
    - **Title:** "Flexible Scheduling"
    - **Description:** "Choose from various time slots to fit your busy lifestyle with both daytime and evening options."

### 1.5 Testimonials Section
- **Element:** `<section class="testimonials">` (testimonial cards in a row)
- **Section Title:**
  - "What Our Students Say"
- **Testimonial Cards:**
  - **Jane Doe**
    - **Avatar:** "JD" (circle)
    - **Stars:** ★★★★★
    - **Text:** "The art classes at Xinyi have helped me rediscover my creativity. The instructors are supportive and the environment is so inspiring!"
  - **John Lee**
    - **Avatar:** "JL" (circle)
    - **Stars:** ★★★★★
    - **Text:** "I've been taking yoga classes at Xinyi for six months now and it has completely transformed my well-being. The instructors are knowledgeable and patient."
  - **SK** (third testimonial, content not fully shown in snippet, but should be included if present in the file)

### 1.6 Footer
- **Element:** `<footer>`
- **Content:**
  - Copyright
  - Contact info

---

## 2. Toronto Art Page

### 2.1 Header (Navbar)
- **Same as Home Page**

### 2.2 Banner Section
- **Element:** `<section class="art-banner">`
- **Image:** `torontoart/banner.png` (full-width, top)

### 2.3 Hero Banner
- **Element:** `<section class="hero-banner">`
- **Text Content:**
  - **Title:** "Art Classes at Xinyi Class"
  - **Paragraphs:**
    - "Xinyi Class offers in-person and online art classes for Kids, Teens and Adults. Our students receive encouraging art instructions in a comfortable and welcoming environment. By nurturing the artistic senses in everyone, art classes at Xinyi Class help to plant the seeds of lifelong creativity."
    - "We believe in creativity as an educational tool, one that develops a student's confidence and problem-solving skills. We teach our students to be imaginative and trust their intuition — there is no right or wrong way to make an artwork. This unique type of experiential learning creates opportunities for self-expression and calculated risk-taking along with the enjoyment of seeing creative efforts lead to tangible results."
    - "We are located in a busy location in North York Toronto (near 404 & Finch). We offer online classes as well." (You may want to update/remove this line if online classes are discontinued.)

### 2.4 Class Videos
- **Element:** `<section class="class-videos">`
- **Section Title:** "Watch Our Classes in Action"
- **Embedded Video:** YouTube iframe

### 2.5 Traditional Artwork Carousel
- **Element:** `<section class="traditional-artwork">` (Bootstrap carousel)
- **Section Title:** "Traditional Chinese Artwork"
- **Images:**
  - `torontoart/slide1-1.png`
  - `torontoart/slide1-2.png`
  - `torontoart/slide1-3.png`
  - `torontoart/slide1-4.png`

### 2.6 Our Classroom
- **Element:** `<section class="our-classroom">`
- **Section Title:** "Our Classroom"
- **Image:** `torontoart/classroom.png` (centered, 60% width)
- **Text Content:**
  - "Our art studio provides a calm, inspiring environment where students can fully immerse themselves in the creative process. With natural lighting, spacious workstations, and a carefully curated collection of art supplies, you'll have everything you need to explore your artistic potential."
  - "Each student receives individual attention in our small-sized classes, ensuring personalized guidance throughout your artistic journey. Our supportive community fosters growth and experimentation in a judgment-free zone."

### 2.7 Class Schedule
- **Element:** `<section class="class-schedule">`
- **Section Title:** "Class Schedule"
- **Image:** `torontoart/schedule.png` (centered, 70% width)

### 2.8 Student Artwork
- **Element:** `<section class="student-artwork">`
- **Section Title:** "Artwork"
- **Image:** `torontoart/artwork.png` (centered, 60% width)

### 2.9 Student Gallery Carousel
- **Element:** `<section class="student-artwork-carousel">` (Bootstrap carousel)
- **Section Title:** "Student Gallery"
- **Images:**
  - `torontoart/slide2-1.png`
  - `torontoart/slide2-2.png`
  - `torontoart/slide2-3.png`
  - `torontoart/slide2-4.png`
  - `torontoart/slide2-5.png`
  - `torontoart/slide2-6.png`
  - `torontoart/slide2-7.png`

### 2.10 Therapy Section
- **Element:** `<section class="therapy">` (if present)
- **Image:** `torontoart/therapy.png`
- **Text:** Description of art therapy (if present in the file)

### 2.11 Footer
- **Same as Home Page**

---

## 3. Toronto Yoga Page

### 3.1 Header (Navbar)
- **Same as Home Page**

### 3.2 Banner Section
- **Element:** `<section class="yoga-banner">`
- **Image:** `torontoyoga/banner.jpg` (full-width, top)

### 3.3 Hero Content Section
- **Element:** `<section class="hero-content">`
- **Text Content:**
  - **Title:** "YOGA CLASSES AT XINYI CLASS"
  - **Subheadline/Description:** "Xinyi Class offers various yoga classes for beginners and experienced practitioners alike. Our yoga sessions are designed to help you find inner peace, improve flexibility, and enhance your wellbeing."
  - **Paragraphs:**
    - "We believe that yoga is for everyone, regardless of age, fitness level, or experience. Through careful instruction and modifications, our experienced instructors are committed to creating accessible yoga experiences."
    - "We strive to create a community where students can feel comfortable, safe, and accepted as they navigate their yoga journey through mindful movement and conscious breath awareness."

### 3.4 Yoga Pose Carousel
- **Element:** `<section class="yoga-poses">` (Bootstrap carousel)
- **Section Title:** "Explore Our Yoga Poses"
- **Images:**
  - `torontoyoga/slide1-1.jpg`
  - `torontoyoga/slide1-2.jpg`
  - `torontoyoga/slide1-3.jpg`
  - `torontoyoga/slide1-4.jpg`
  - `torontoyoga/slide1-5.jpg`

### 3.5 Featured Yoga Videos
- **Element:** `<section class="featured-videos">`
- **Section Title:** "Featured Yoga Videos"
- **Video Cards:**
  - "15 Minute Beginner Friendly Yoga" (YouTube iframe)
  - "Morning Flow Sequence" (YouTube iframe)
  - "Yin Yoga for Deep Relaxation" (YouTube iframe)
  - "Yoga for Better Sleep" (YouTube iframe)

### 3.6 Our Yoga Classes Section
- **Element:** `<section class="yoga-classes">` (class cards in a row)
- **Section Title:** "Our Yoga Classes"
- **Class Cards:**
  - **Hatha Yoga**
    - **Image:** `torontoyoga/hatha.jpg`
    - **Title:** "Hatha Yoga"
    - **Description:** "A gentle introduction to fundamental yoga postures. Great classes to develop strength and flexibility."
  - **Vinyasa Flow**
    - **Image:** `torontoyoga/vanyasa.jpg`
    - **Title:** "Vinyasa Flow"
    - **Description:** "Dynamic practice that synchronizes breath with movement. For both and advanced students."
  - **Yin Yoga**
    - **Image:** `torontoyoga/yin.jpg`
    - **Title:** "Yin Yoga"
    - **Description:** "Slow-paced style where poses are held for longer periods. Targets deep connective tissues and joints."

### 3.7 Class Schedule
- **Element:** `<section class="class-schedule">`
- **Section Title:** "Class Schedule"
- **Image:** `torontoyoga/schedule.jpg` (centered)

### 3.8 FAQ Section
- **Element:** `<section class="faq">` (accordion)
- **Section Title:** "Frequently Asked Questions"
- **Questions/Answers:**
  - "What should I bring to class?" (and other questions as present in the file)

### 3.9 Footer
- **Same as Home Page**

---

## 4. Shared Elements

- **Favicon:** `favicon.svg` (all pages)
- **SEO:** Page titles, meta descriptions, and alt text for all images
- **Responsive Design:** All layouts and images must be responsive for mobile and desktop

---

## 5. Notes

- All text content above is taken directly from the HTML files.
- All images are listed with their file paths and positions.
- Each text/image is described with its container/component (e.g., class card, hero section, carousel, etc.).
- The Online Art class and all references to it should be removed from the new Astro build.
- If any additional text or images are present in the original HTML files but not listed here, they must be included in the Astro rebuild.

---

If you need a more granular breakdown (e.g., every FAQ, every testimonial, every carousel image alt text), let me know!
