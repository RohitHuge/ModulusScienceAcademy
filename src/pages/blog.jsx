import React, { useEffect, useRef, useState } from 'react';
import { Header, Footer } from './home';
import ReactMarkdown from 'react-markdown';

const BLOG_POSTS = [
  {
    title: 'How to Prepare for MHT-CET 2025 – Expert Tips from Modulus Science Academy',
    date: 'April 27, 2024',
    image: 'https://thumbs.dreamstime.com/b/young-cartoon-boy-reading-books-student-study-teens-education-concept-teenager-read-book-look-answers-exam-preparation-vector-337569775.jpg',
    imageAlt: 'Students preparing for MHT-CET exam with books',
    content: `
## 📖 How to Prepare for MHT-CET 2025 – Expert Tips from Modulus Science Academy Pune

📅 **April 27, 2024**

---

🎯 Preparing for **MHT-CET 2025** can feel overwhelming — but with the right guidance and smart strategy, you can absolutely ace it! If you’re searching for the **best coaching classes for MHT-CET in Pune**, look no further than **Modulus Science Academy Sangvi**. Here’s your expert-backed preparation guide:

---

### 📌 MHT-CET 2025 Exam Pattern & Syllabus 📚

✅ Familiarize yourself with the latest **MHT-CET syllabus 2025** based on **Maharashtra State Board + NCERT**.

✅ The exam covers **Physics, Chemistry, and Mathematics/Biology**.

✅ Prioritize high-weightage topics and maintain a checklist to track completed topics.

---

### 📌 Best Study Plan for MHT-CET Students in Pune 📆

📝 Divide your study schedule into 3 phases:

1️⃣ **Concept building**
2️⃣ **Regular revisions**
3️⃣ **Mock testing & paper-solving practice**

🏆 Join **Modulus Science Academy Sangvi Pune** for structured test series, personal doubt-solving sessions, and revision classes.

---

### 📌 Subject-wise Tips 📝

**Physics ⚛️**

* Focus on conceptual clarity.
* Practice **MHT-CET Physics previous years’ papers**.

**Chemistry 🧪**

* Revise key reactions and organic mechanisms.
* Memorize formulas and periodic trends.

**Mathematics ➗**

* Master shortcut techniques.
* Solve numericals from CET modules.

---

### 📌 Time Management & Mock Tests ⏳

✅ Solve sample papers and **previous years' MHT-CET papers**.

✅ Use a timer and practice completing papers within the exam duration.

✅ Attempt easy questions first to build confidence.

---

### 📌 Benefits of Joining Modulus Science Academy Sangvi 🎓

🏫 **Why we're the top-rated MHT-CET coaching class in Pune:**

* 📖 Highly experienced faculty for Physics, Chemistry & Maths
* 🎯 Offline classroom coaching with personalized attention
* 📝 Regular mock tests & performance reports
* 💰 Affordable fees and hybrid offline-online coaching options

---

### 📌 Final Exam Day Tips ✅

* Get adequate sleep 💤
* Revise formulas and diagrams 📊
* Stay calm and manage time effectively ⏳
* Attempt all easy questions first ✅
* Stay confident — you’ve prepared for this! 🎉

---

🔥 With expert mentorship and a disciplined strategy, your **MHT-CET 2025 success is within reach!**
**Good luck from the entire Modulus Science Academy Sangvi team!** 💪🎓
`,
  },
  {
    title: 'Difference Between NEET and MHT-CET – Which Is Right for You?',
    date: 'April 20, 2024',
    image: 'https://cdn-ginkf.nitrocdn.com/XDPVXDvZHEdvxVEWyArPEDwSYjHlIaQK/assets/images/optimized/rev-e0684c1/oswalpublishers.com/wp-content/uploads/2023/01/jee-vs-neet.webp',
    imageAlt: 'Students comparing NEET and MHT-CET exams',
    content: `
## 📖 Difference Between NEET and MHT-CET – Which Is Right for You?

📅 **April 20, 2024**

---

🎯 Choosing between **NEET** and **MHT-CET** is a crucial decision for students in Maharashtra aspiring for a career in **medicine, engineering, or pharmacy**. If you’re unsure which path to choose, here’s a detailed, expert comparison from **Modulus Science Academy Sangvi Pune** to help you decide:

---

### 📌 Exam Pattern 📝

✅ **NEET:**

* A single, national-level entrance exam for **MBBS, BDS, and medical courses**.
* 180 MCQs from **Physics, Chemistry, and Biology**.

✅ **MHT-CET:**

* A state-level entrance test for **engineering, pharmacy, and agriculture courses in Maharashtra**.
* 150 MCQs from **Physics, Chemistry, and Mathematics/Biology**.

---

### 📌 Syllabus Overview 📚

🧾 **NEET:**

* Based on **NCERT syllabus of Classes 11 & 12 (PCB)**.

🧾 **MHT-CET:**

* Based on **Maharashtra State Board syllabus** with overlap from NCERT.
* Focuses heavily on **conceptual clarity and application-based questions**.

---

### 📌 Career Scope 🎓

🔸 **NEET:**

* Admission to **MBBS, BDS, AYUSH, Veterinary and Allied Medical Sciences** across India.

🔸 **MHT-CET:**

* Admission to **B.E./B.Tech, B.Pharm, D.Pharm, and B.Sc Agriculture** within Maharashtra.

---

### 📌 Eligibility Criteria 📑

✅ **NEET:**

* 10+2 with **Physics, Chemistry, Biology/Biotechnology**.
* Minimum age: **17 years**.

✅ **MHT-CET:**

* 10+2 with **Physics, Chemistry, Mathematics/Biology**.
* **No minimum age limit**.

---

### 📌 How to Decide? 🤔

✅ Choose **NEET** if:

* You're passionate about **medicine, biology, healthcare, or surgery**.

✅ Choose **MHT-CET** if:

* You’re interested in **engineering, technology, pharmacy, or applied sciences**.

✅ Pro Tip:

* Consider your **strengths in Biology vs. Mathematics**.
* Think about your **career goals 5–10 years down the line**.
* Discuss with your mentors at **Modulus Science Academy Sangvi Pune** for personalized guidance.

---

### 📌 Expert Preparation Tips 🎯

✅ Take aptitude mock tests for both NEET and CET.

✅ Analyze your comfort and performance in **Physics, Chemistry, Maths & Bio** sections.

✅ Stay consistent and revise high-weightage topics regularly.

✅ Join structured, offline coaching like **Modulus Science Academy Pune** for doubt sessions, weekly tests, and CET/NEET strategy lectures.

---

✨ **Both exams open doors to rewarding careers. Focus on your passion, play to your strengths, and give it your all!** 🚀

**Good luck from the entire Modulus Science Academy team!** 💪🎓
`,
  },
  {
    title: 'Top 5 Study Hacks for JEE Mains and NEET Students in 2025',
    date: 'April 13, 2024',
    image: 'https://netschools.in/uploads/2025/05/iit-syllabus-explained-the-clarity-you-need-for-jee-prep.webp',
    imageAlt: 'Students using study hacks for JEE and NEET',
    content: `
## 📖 Top 5 Study Hacks for JEE Mains and NEET Students in 2025

📅 **April 13, 2024**

---

🎯 Success in **JEE Mains** and **NEET 2025** isn’t just about working hard — it’s about working smart. Here are the **top 5 proven study hacks** from **Modulus Science Academy Sangvi Pune** that can help boost your productivity, memory, and exam performance this year:

---

### 📌 1️⃣ The Pomodoro Technique ⏳

✅ Study in focused **25-minute intervals** followed by a **5-minute break**.

✅ After every four sessions, take a longer **15-minute break**.

✅ This improves concentration, reduces mental fatigue, and keeps you fresh.

---

### 📌 2️⃣ Active Recall & Spaced Repetition 📖

✅ Test yourself regularly instead of just re-reading notes.

✅ Use **flashcards, quizzes, and oral recitation**.

✅ Apply **spaced repetition** by reviewing important concepts after increasing intervals — 1 day, 3 days, 7 days.

✅ Apps like **Anki** and **Quizlet** can help.

---

### 📌 3️⃣ Visual Learning Techniques 🎨

✅ Create **mind maps, flowcharts, and diagrams** for complicated topics.

✅ Visual aids improve memory retention and make revision faster.

✅ Convert boring theory into colorful charts for easy recall.

---

### 📌 4️⃣ Prioritize High-Weightage Topics 📊

✅ Analyze **previous years’ question papers** to identify high-weightage chapters.

✅ Focus your effort on topics carrying more marks.

✅ Example: In **JEE Physics**, concentrate on Mechanics, Electrostatics, and Modern Physics.

✅ In **NEET Biology**, prioritize Human Physiology, Genetics, and Ecology.

---

### 📌 5️⃣ Manage Exam Stress & Stay Healthy 🧘‍♂️

✅ Practice **deep breathing, meditation, or light exercise** to stay calm.

✅ Maintain a **balanced diet and proper sleep schedule**.

✅ Avoid last-minute cramming — focus on quick revisions before exams.

---

### 📌 Bonus Success Tip 🎯

✅ Create a **realistic and achievable study schedule** and stick to it.

✅ **Consistency beats intensity.** Even 4 focused hours daily can outperform random long-hour study sessions.

---

✨ Apply these smart study hacks and watch your productivity soar!
**Modulus Science Academy Sangvi Pune** is here to support you with personalized strategies, weekly tests, and expert guidance. 💪🎓

**Good luck to all our future toppers! 🚀**
`,
  },
  {
    title: 'How to Score Above 90% in Class 10 SSC/CBSE Board Exams – Proven Techniques',
    date: 'April 6, 2024',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/chbse-class-10-and-12-results-2024-are-out-ai-generated-image-093405448-16x9_0.jpg?VersionId=1GLXTkjg3tQoSBqtvHYaJeeM_G940tNj&size=690:388',
    imageAlt: 'Class 10 students celebrating board exam success',
    content: `
## 📖 How to Score Above 90% in Class 10 SSC/CBSE Board Exams – Proven Techniques

📅 **April 6, 2024**

---

🎯 Scoring above **90% in Class 10 board exams** might seem tough, but with the right plan and guidance from **Modulus Science Academy Sangvi Pune**, you can achieve it confidently. Here’s a proven, expert-backed roadmap just for you:

---

### 📌 1️⃣ Master the Syllabus 📖

✅ Thoroughly go through the **complete syllabus** and mark important chapters.

✅ Create a **checklist** of topics and track your progress as you revise.

✅ Focus extra attention on high-weightage chapters and frequently asked topics.

---

### 📌 2️⃣ Effective Time Management 🕒

✅ Design a **daily study timetable** with balanced hours for all subjects.

✅ Allocate more time to challenging subjects and topics.

✅ Schedule regular revision sessions to strengthen weak areas.

---

### 📌 3️⃣ Writing Skills for Board Exams ✍️

✅ Practice writing answers in the **board-recommended format**.

✅ Use **headings, bullet points, diagrams, and labels** wherever possible.

✅ Stick to the **word limit** and present answers neatly — presentation matters!

---

### 📌 4️⃣ Revision and Mock Tests 📑

✅ Revise your notes and textbooks regularly.

✅ Solve **previous years' question papers** and sample papers.

✅ Attempt **mock tests under exam conditions** to improve speed and accuracy.

---

### 📌 5️⃣ Smart Scoring Tricks 💡

✅ Always attempt **all questions**, even if you’re unsure.

✅ Start with the questions you know well to build momentum.

✅ Review your paper if time permits to correct silly errors.

---

### 📌 6️⃣ Stay Healthy and Positive 🥗💤

✅ Eat a **nutritious, balanced diet** and get **adequate sleep**.

✅ Take short breaks between study sessions to avoid burnout.

✅ Stay motivated by visualizing your success — believe in yourself!

---

✨ With **discipline, consistency, and expert guidance** from **Modulus Science Academy Sangvi Pune**, you can secure that **90%+ score in your SSC/CBSE Board exams**.

**Wishing you all the very best — you’ve got this! 💪🎉**
`,
  },
  {
    title: 'Why Offline Classroom Coaching Still Matters in the Digital Era',
    date: 'March 30, 2024',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYy-Sw6Qoc6oZArN3s3u-Y3bl9toqeSMVFQ&s',
    imageAlt: 'Teacher conducting offline classroom coaching',
    content: `
## 📖 Why Offline Classroom Coaching Still Matters in the Digital Era

📅 **March 30, 2024**

---

🎯 In today’s rapidly growing digital education world, **online learning** is accessible everywhere — but the value of **offline classroom coaching** remains unmatched. Here’s why in-person classes at **Modulus Science Academy Sangvi Pune** make a real difference for students aiming for top ranks in **MHT-CET, NEET, JEE Mains, and Board Exams**:

---

### 📌 1️⃣ Personalized Attention 🎓

✅ In physical classrooms, teachers can **observe students’ understanding levels** and adjust their teaching accordingly.

✅ **Doubts are addressed instantly** without delays, helping students grasp concepts effectively.

✅ Personalized feedback ensures no student is left behind.

---

### 📌 2️⃣ Motivation and Discipline 💪

✅ The structured **classroom environment fosters healthy competition** among students.

✅ Regular attendance and a fixed study schedule build discipline.

✅ Group activities and motivational talks by faculty keep students driven toward their goals.

---

### 📌 3️⃣ Peer Learning 🤝

✅ Classroom interaction allows students to **discuss concepts, exchange ideas, and clarify doubts** together.

✅ **Teamwork and collaborative problem-solving sessions** improve understanding.

✅ Builds strong academic friendships and a support network.

---

### 📌 4️⃣ Immediate Feedback and Mentorship 📝

✅ Teachers offer **real-time feedback during class tests, discussions, and revisions**.

✅ Immediate corrections help students avoid repetitive mistakes.

✅ Mentors at **Modulus Science Academy Sangvi** guide students personally, providing exam tips, career advice, and strategy planning.

---

### 📌 5️⃣ Hybrid Model Advantage 🌐

✅ At **Modulus Science Academy Pune**, we combine the benefits of **offline classroom teaching with modern online resources**.

✅ Students get **personal interaction during live lectures** and access to **digital test series and video lectures for revision**.

✅ The **hybrid model ensures flexibility, personal attention, and digital convenience**.

---

✨ At **Modulus Science Academy Sangvi Pune**, we believe **education is most effective when powered by human connection and guided mentorship**. Our offline classrooms nurture discipline, motivation, and clarity — helping students consistently deliver top results.

**Ready to experience the classroom advantage? Join Modulus Science Academy and secure your future! 💪📚**
`,
  },
];

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-accent hover:text-primary transition-colors"
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    </button>
  ) : null;
}

const Blog = () => {
  const postRefs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('animate-fade-in');
            const handleAnimationEnd = () => {
              el.classList.remove('opacity-0', 'animate-fade-in');
              el.classList.add('opacity-100');
              el.removeEventListener('animationend', handleAnimationEnd);
            };
            el.addEventListener('animationend', handleAnimationEnd);
          }
        });
      },
      { threshold: 0.1 }
    );
    postRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pb-16 pt-4">
        <div className="max-w-3xl mx-auto px-4 pt-10">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2 text-center">Our Blog</h1>
          <h2 className="text-lg md:text-xl font-poppins text-text mb-10 text-center">Exam strategies, expert tips, and student success advice from our experts</h2>
          {BLOG_POSTS.map((post, idx) => (
            <section
              key={post.title}
              ref={el => (postRefs.current[idx] = el)}
              className="opacity-0 transition-opacity duration-700 mb-14"
            >
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-2">{post.title}</h3>
              {post.date && <div className="text-sm text-gray-500 mb-3">{post.date}</div>}
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-48 md:h-64 object-cover rounded-lg mb-5 bg-gray-100"
                loading="lazy"
              />
              <article className="prose prose-p:text-text prose-h4:text-primary prose-strong:font-semibold prose-li:marker:text-accent max-w-none text-base md:text-lg font-poppins leading-relaxed">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
              <div className="h-2 w-24 bg-accent rounded-full mt-8 mb-2"></div>
            </section>
          ))}
        </div>
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
