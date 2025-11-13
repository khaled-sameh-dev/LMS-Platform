import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Clean existing data
  await prisma.notification.deleteMany();
  await prisma.paymentHistory.deleteMany();
  await prisma.paymentMethod.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.chapterProgress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.courseReview.deleteMany();
  await prisma.chapterResource.deleteMany();
  await prisma.chapter.deleteMany();
  await prisma.section.deleteMany();
  await prisma.course.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️  Cleaned existing data');

  // Hash password for all users
  const hashedPassword = await bcrypt.hash('password123', 10);

  // ===================================
  // Create Users
  // ===================================
  const admin = await prisma.user.create({
    data: {
      email: 'admin@lms.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      bio: 'Platform Administrator',
      title: 'LMS Administrator',
      emailVerified: true,
      socialLinks: {
        website: 'https://lms-platform.com',
        linkedin: 'https://linkedin.com/in/admin'
      }
    }
  });

  const instructor1 = await prisma.user.create({
    data: {
      email: 'john.doe@instructor.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Doe',
      role: 'INSTRUCTOR',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about teaching web development and helping students achieve their goals.',
      title: 'Senior Full-Stack Developer',
      emailVerified: true,
      socialLinks: {
        website: 'https://johndoe.dev',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
        twitter: 'https://twitter.com/johndoe'
      }
    }
  });

  const instructor2 = await prisma.user.create({
    data: {
      email: 'sarah.smith@instructor.com',
      password: hashedPassword,
      firstName: 'Sarah',
      lastName: 'Smith',
      role: 'INSTRUCTOR',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      bio: 'AI/ML Engineer and Data Scientist. Love teaching machine learning and helping others break into the field.',
      title: 'AI/ML Engineer',
      emailVerified: true,
      socialLinks: {
        website: 'https://sarahsmith.ai',
        linkedin: 'https://linkedin.com/in/sarahsmith',
        github: 'https://github.com/sarahsmith'
      }
    }
  });

  const instructor3 = await prisma.user.create({
    data: {
      email: 'mike.wilson@instructor.com',
      password: hashedPassword,
      firstName: 'Mike',
      lastName: 'Wilson',
      role: 'INSTRUCTOR',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
      bio: 'UX/UI Designer with a passion for creating beautiful and intuitive user experiences.',
      title: 'Senior UX/UI Designer',
      emailVerified: true,
      socialLinks: {
        website: 'https://mikewilson.design',
        linkedin: 'https://linkedin.com/in/mikewilson'
      }
    }
  });

  const students = await Promise.all([
    prisma.user.create({
      data: {
        email: 'alice@student.com',
        password: hashedPassword,
        firstName: 'Alice',
        lastName: 'Johnson',
        role: 'STUDENT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice',
        bio: 'Aspiring web developer',
        emailVerified: true
      }
    }),
    prisma.user.create({
      data: {
        email: 'bob@student.com',
        password: hashedPassword,
        firstName: 'Bob',
        lastName: 'Williams',
        role: 'STUDENT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
        bio: 'Learning data science',
        emailVerified: true
      }
    }),
    prisma.user.create({
      data: {
        email: 'carol@student.com',
        password: hashedPassword,
        firstName: 'Carol',
        lastName: 'Brown',
        role: 'STUDENT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carol',
        bio: 'UI/UX enthusiast',
        emailVerified: true
      }
    }),
    prisma.user.create({
      data: {
        email: 'david@student.com',
        password: hashedPassword,
        firstName: 'David',
        lastName: 'Miller',
        role: 'STUDENT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
        emailVerified: true
      }
    }),
    prisma.user.create({
      data: {
        email: 'emma@student.com',
        password: hashedPassword,
        firstName: 'Emma',
        lastName: 'Davis',
        role: 'STUDENT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
        emailVerified: true
      }
    })
  ]);

  console.log('✅ Created users');

  // ===================================
  // Create Categories
  // ===================================
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Web Development',
        slug: 'web-development',
        icon: '💻',
        description: 'Learn to build modern websites and web applications',
        order: 1
      }
    }),
    prisma.category.create({
      data: {
        name: 'Data Science',
        slug: 'data-science',
        icon: '📊',
        description: 'Master data analysis, machine learning, and AI',
        order: 2
      }
    }),
    prisma.category.create({
      data: {
        name: 'Design',
        slug: 'design',
        icon: '🎨',
        description: 'Create beautiful and intuitive user experiences',
        order: 3
      }
    }),
    prisma.category.create({
      data: {
        name: 'Mobile Development',
        slug: 'mobile-development',
        icon: '📱',
        description: 'Build native and cross-platform mobile apps',
        order: 4
      }
    }),
    prisma.category.create({
      data: {
        name: 'Business',
        slug: 'business',
        icon: '💼',
        description: 'Develop business and entrepreneurship skills',
        order: 5
      }
    })
  ]);

  console.log('✅ Created categories');

  // ===================================
  // Create Courses
  // ===================================
  const course1 = await prisma.course.create({
    data: {
      title: 'Complete Web Development Bootcamp 2024',
      slug: 'complete-web-development-bootcamp-2024',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and become a full-stack web developer.',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      previewVideo: 'https://www.youtube.com/watch?v=demo1',
      level: 'BEGINNER',
      price: 89.99,
      currency: 'USD',
      language: 'English',
      rating: 4.8,
      reviewsCount: 1250,
      studentsCount: 15420,
      status: 'PUBLISHED',
      isFeatured: true,
      isBestseller: true,
      requirements: [
        'Basic computer skills',
        'No prior programming experience required',
        'A computer with internet connection'
      ],
      learningOutcomes: [
        'Build responsive websites with HTML, CSS, and JavaScript',
        'Master React and build modern single-page applications',
        'Create backend APIs with Node.js and Express',
        'Work with databases like MongoDB',
        'Deploy your applications to the cloud'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      duration: 3240, // 54 hours
      instructorId: instructor1.id,
      categoryId: categories[0].id,
      publishedAt: new Date('2024-01-15')
    }
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'Machine Learning A-Z: Python & AI',
      slug: 'machine-learning-python-ai',
      description: 'Master Machine Learning with Python. Includes all the code templates. Learn to create ML algorithms in Python and R from expert instructors.',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
      previewVideo: 'https://www.youtube.com/watch?v=demo2',
      level: 'INTERMEDIATE',
      price: 99.99,
      currency: 'USD',
      language: 'English',
      rating: 4.9,
      reviewsCount: 2150,
      studentsCount: 25600,
      status: 'PUBLISHED',
      isFeatured: true,
      isBestseller: true,
      requirements: [
        'Basic Python programming knowledge',
        'High school level mathematics',
        'Interest in data science and AI'
      ],
      learningOutcomes: [
        'Master Machine Learning algorithms',
        'Build AI models with TensorFlow and PyTorch',
        'Understand deep learning and neural networks',
        'Work with real-world datasets',
        'Deploy ML models to production'
      ],
      tags: ['Python', 'Machine Learning', 'AI', 'Deep Learning', 'TensorFlow'],
      duration: 4320, // 72 hours
      instructorId: instructor2.id,
      categoryId: categories[1].id,
      publishedAt: new Date('2024-02-01')
    }
  });

  const course3 = await prisma.course.create({
    data: {
      title: 'UI/UX Design Masterclass',
      slug: 'ui-ux-design-masterclass',
      description: 'Learn UI/UX Design from scratch. Master Figma, Adobe XD, and design thinking principles to create stunning user interfaces.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      previewVideo: 'https://www.youtube.com/watch?v=demo3',
      level: 'BEGINNER',
      price: 79.99,
      currency: 'USD',
      language: 'English',
      rating: 4.7,
      reviewsCount: 850,
      studentsCount: 8900,
      status: 'PUBLISHED',
      isFeatured: true,
      requirements: [
        'No prior design experience needed',
        'A computer with Figma installed',
        'Creativity and passion for design'
      ],
      learningOutcomes: [
        'Master Figma and Adobe XD',
        'Understand UX research and user testing',
        'Create wireframes and prototypes',
        'Design mobile and web applications',
        'Build a professional design portfolio'
      ],
      tags: ['UI Design', 'UX Design', 'Figma', 'Adobe XD', 'Prototyping'],
      duration: 2160, // 36 hours
      instructorId: instructor3.id,
      categoryId: categories[2].id,
      publishedAt: new Date('2024-02-15')
    }
  });

  const course4 = await prisma.course.create({
    data: {
      title: 'React Native - Complete Mobile App Development',
      slug: 'react-native-mobile-app-development',
      description: 'Build iOS and Android apps with React Native. Learn to create beautiful, performant mobile applications.',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      level: 'INTERMEDIATE',
      price: 94.99,
      currency: 'USD',
      language: 'English',
      rating: 4.6,
      reviewsCount: 620,
      studentsCount: 5400,
      status: 'PUBLISHED',
      requirements: [
        'JavaScript fundamentals',
        'Basic React knowledge',
        'A Mac for iOS development (optional)'
      ],
      learningOutcomes: [
        'Build cross-platform mobile apps',
        'Master React Native components',
        'Implement navigation and state management',
        'Work with device APIs',
        'Publish apps to App Store and Play Store'
      ],
      tags: ['React Native', 'Mobile Development', 'iOS', 'Android', 'JavaScript'],
      duration: 2880, // 48 hours
      instructorId: instructor1.id,
      categoryId: categories[3].id,
      publishedAt: new Date('2024-03-01')
    }
  });

  const course5 = await prisma.course.create({
    data: {
      title: 'Python for Beginners - Complete Programming Course',
      slug: 'python-for-beginners',
      description: 'Start your programming journey with Python. Learn the fundamentals and build real projects.',
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
      level: 'BEGINNER',
      price: 0, // Free course
      currency: 'USD',
      language: 'English',
      rating: 4.5,
      reviewsCount: 3200,
      studentsCount: 45000,
      status: 'PUBLISHED',
      isFeatured: false,
      requirements: [
        'No programming experience needed',
        'A computer with Python installed'
      ],
      learningOutcomes: [
        'Understand Python syntax and basics',
        'Work with data structures',
        'Write functions and modules',
        'Handle files and exceptions',
        'Build simple Python projects'
      ],
      tags: ['Python', 'Programming', 'Beginner', 'Coding'],
      duration: 1440, // 24 hours
      instructorId: instructor2.id,
      categoryId: categories[0].id,
      publishedAt: new Date('2024-01-10')
    }
  });

  console.log('✅ Created courses');

  // ===================================
  // Create Sections and Chapters
  // ===================================
  
  // Course 1 Sections & Chapters
  const section1 = await prisma.section.create({
    data: {
      title: 'Introduction to Web Development',
      description: 'Get started with web development fundamentals',
      order: 1,
      courseId: course1.id
    }
  });

  await Promise.all([
    prisma.chapter.create({
      data: {
        title: 'Welcome to the Course',
        description: 'Course overview and what you will learn',
        order: 1,
        type: 'VIDEO',
        duration: 15,
        isFree: true,
        videoUrl: 'https://www.youtube.com/watch?v=demo',
        sectionId: section1.id
      }
    }),
    prisma.chapter.create({
      data: {
        title: 'Setting Up Your Development Environment',
        description: 'Install all necessary tools and software',
        order: 2,
        type: 'VIDEO',
        duration: 30,
        isFree: true,
        videoUrl: 'https://www.youtube.com/watch?v=demo',
        sectionId: section1.id
      }
    }),
    prisma.chapter.create({
      data: {
        title: 'HTML Basics Quiz',
        description: 'Test your HTML knowledge',
        order: 3,
        type: 'QUIZ',
        duration: 10,
        isFree: false,
        quizQuestions: [
          {
            id: '1',
            question: 'What does HTML stand for?',
            options: [
              'Hyper Text Markup Language',
              'High Tech Modern Language',
              'Home Tool Markup Language',
              'Hyperlinks and Text Markup Language'
            ],
            correctAnswer: 0,
            explanation: 'HTML stands for Hyper Text Markup Language'
          }
        ],
        sectionId: section1.id
      }
    })
  ]);

  const section2 = await prisma.section.create({
    data: {
      title: 'HTML & CSS Fundamentals',
      description: 'Learn HTML and CSS from scratch',
      order: 2,
      courseId: course1.id
    }
  });

  await Promise.all([
    prisma.chapter.create({
      data: {
        title: 'HTML Elements and Tags',
        description: 'Understanding HTML structure',
        order: 1,
        type: 'VIDEO',
        duration: 45,
        isFree: false,
        videoUrl: 'https://www.youtube.com/watch?v=demo',
        sectionId: section2.id
      }
    }),
    prisma.chapter.create({
      data: {
        title: 'CSS Styling Basics',
        description: 'Learn to style your web pages',
        order: 2,
        type: 'VIDEO',
        duration: 60,
        isFree: false,
        videoUrl: 'https://www.youtube.com/watch?v=demo',
        sectionId: section2.id
      }
    })
  ]);

  // Course 2 Sections & Chapters
  const section3 = await prisma.section.create({
    data: {
      title: 'Python for Machine Learning',
      description: 'Essential Python concepts for ML',
      order: 1,
      courseId: course2.id
    }
  });

  await Promise.all([
    prisma.chapter.create({
      data: {
        title: 'Python Crash Course',
        order: 1,
        type: 'VIDEO',
        duration: 90,
        isFree: true,
        videoUrl: 'https://www.youtube.com/watch?v=demo',
        sectionId: section3.id
      }
    }),
    prisma.chapter.create({
      data: {
        title: 'NumPy and Pandas',
        order: 2,
        type: 'VIDEO',
        duration: 120,
        isFree: false,
        videoUrl: 'https://www.youtube.com/watch?v=demo',
        sectionId: section3.id
      }
    })
  ]);

  console.log('✅ Created sections and chapters');

  // ===================================
  // Create Enrollments
  // ===================================
  const enrollment1 = await prisma.enrollment.create({
    data: {
      userId: students[0].id,
      courseId: course1.id,
      progressPercentage: 45,
      totalTimeSpent: 780,
      lastAccessedAt: new Date()
    }
  });

  const enrollment2 = await prisma.enrollment.create({
    data: {
      userId: students[0].id,
      courseId: course2.id,
      progressPercentage: 20,
      totalTimeSpent: 320,
      lastAccessedAt: new Date()
    }
  });

  const enrollment3 = await prisma.enrollment.create({
    data: {
      userId: students[1].id,
      courseId: course2.id,
      progressPercentage: 80,
      totalTimeSpent: 1920,
      lastAccessedAt: new Date()
    }
  });

  const enrollment4 = await prisma.enrollment.create({
    data: {
      userId: students[2].id,
      courseId: course3.id,
      progressPercentage: 100,
      totalTimeSpent: 2160,
      isCompleted: true,
      completedAt: new Date('2024-10-15'),
      lastAccessedAt: new Date('2024-10-15')
    }
  });

  await prisma.enrollment.create({
    data: {
      userId: students[1].id,
      courseId: course1.id,
      progressPercentage: 15,
      totalTimeSpent: 240,
      lastAccessedAt: new Date()
    }
  });

  console.log('✅ Created enrollments');

  // ===================================
  // Create Reviews
  // ===================================
  await Promise.all([
    prisma.courseReview.create({
      data: {
        rating: 5,
        comment: 'Excellent course! Very comprehensive and well-structured. The instructor explains everything clearly.',
        userId: students[0].id,
        courseId: course1.id,
        isApproved: true
      }
    }),
    prisma.courseReview.create({
      data: {
        rating: 4,
        comment: 'Great content, but some videos could be shorter. Overall very satisfied with my learning.',
        userId: students[1].id,
        courseId: course2.id,
        isApproved: true
      }
    }),
    prisma.courseReview.create({
      data: {
        rating: 5,
        comment: 'This course transformed my design skills! Highly recommend to anyone interested in UI/UX.',
        userId: students[2].id,
        courseId: course3.id,
        isApproved: true
      }
    }),
    prisma.courseReview.create({
      data: {
        rating: 5,
        comment: 'Best programming course I have taken. Clear explanations and great projects!',
        userId: students[3].id,
        courseId: course1.id,
        isApproved: true
      }
    })
  ]);

  console.log('✅ Created reviews');

  // ===================================
  // Create Certificates
  // ===================================
  await prisma.certificate.create({
    data: {
      certificateNumber: 'CERT-2024-001',
      userId: students[2].id,
      courseId: course3.id,
      issuedAt: new Date('2024-10-15'),
      certificateUrl: 'https://certificates.lms.com/cert-001.pdf'
    }
  });

  console.log('✅ Created certificates');

  // ===================================
  // Create Payment Methods
  // ===================================
  await Promise.all([
    prisma.paymentMethod.create({
      data: {
        type: 'CARD',
        last4: '4242',
        brand: 'Visa',
        expiryMonth: 12,
        expiryYear: 2025,
        isDefault: true,
        userId: students[0].id
      }
    }),
    prisma.paymentMethod.create({
      data: {
        type: 'CARD',
        last4: '5555',
        brand: 'Mastercard',
        expiryMonth: 6,
        expiryYear: 2026,
        isDefault: true,
        userId: students[1].id
      }
    })
  ]);

  console.log('✅ Created payment methods');

  // ===================================
  // Create Payment History
  // ===================================
  await Promise.all([
    prisma.paymentHistory.create({
      data: {
        amount: 89.99,
        currency: 'USD',
        status: 'COMPLETED',
        transactionId: 'TXN-2024-001',
        paymentMethod: 'Visa ending in 4242',
        paidAt: new Date('2024-09-01'),
        userId: students[0].id,
        courseId: course1.id
      }
    }),
    prisma.paymentHistory.create({
      data: {
        amount: 99.99,
        currency: 'USD',
        status: 'COMPLETED',
        transactionId: 'TXN-2024-002',
        paymentMethod: 'Mastercard ending in 5555',
        paidAt: new Date('2024-09-15'),
        userId: students[1].id,
        courseId: course2.id
      }
    }),
    prisma.paymentHistory.create({
      data: {
        amount: 79.99,
        currency: 'USD',
        status: 'COMPLETED',
        transactionId: 'TXN-2024-003',
        paymentMethod: 'PayPal',
        paidAt: new Date('2024-08-20'),
        userId: students[2].id,
        courseId: course3.id
      }
    })
  ]);

  console.log('✅ Created payment history');

  // ===================================
  // Create Notifications
  // ===================================
  await Promise.all([
    prisma.notification.create({
      data: {
        type: 'COURSE_ENROLLMENT',
        title: 'Welcome to the course!',
        message: 'You have successfully enrolled in Complete Web Development Bootcamp 2024',
        isRead: true,
        userId: students[0].id,
        data: { courseId: course1.id }
      }
    }),
    prisma.notification.create({
      data: {
        type: 'CERTIFICATE_EARNED',
        title: 'Congratulations! 🎉',
        message: 'You have earned a certificate for completing UI/UX Design Masterclass',
        isRead: false,
        userId: students[2].id,
        data: { courseId: course3.id, certificateId: 'CERT-2024-001' }
      }
    }),
    prisma.notification.create({
      data: {
        type: 'NEW_REVIEW',
        title: 'New review on your course',
        message: 'Someone left a 5-star review on your course',
        isRead: false,
        userId: instructor1.id,
        data: { courseId: course1.id }
      }
    })
  ]);

  console.log('✅ Created notifications');

  console.log('🎉 Seed completed successfully!');
  console.log('\n📊 Summary:');
  console.log(`- Users: ${await prisma.user.count()}`);
  console.log(`- Categories: ${await prisma.category.count()}`);
  console.log(`- Courses: ${await prisma.course.count()}`);
  console.log(`- Sections: ${await prisma.section.count()}`);
  console.log(`- Chapters: ${await prisma.chapter.count()}`);
  console.log(`- Enrollments: ${await prisma.enrollment.count()}`);
  console.log(`- Reviews: ${await prisma.courseReview.count()}`);
  console.log(`- Certificates: ${await prisma.certificate.count()}`);
  console.log(`- Payment History: ${await prisma.paymentHistory.count()}`);
  console.log(`- Notifications: ${await prisma.notification.count()}`);
  console.log('\n🔐 Test Credentials:');
  console.log('Admin: admin@lms.com / password123');
  console.log('Instructor: john.doe@instructor.com / password123');
  console.log('Student: alice@student.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });