export type Language = 'vi' | 'en'

export interface Translations {
  common: {
    appName: string
    loading: string
    greeting: string
    logout: string
    switchToEnglish: string
    switchToVietnamese: string
  }
  login: {
    title: string
    infoBadge: string
    infoMessage: string
    usernameLabel: string
    usernamePlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    submitButton: string
    registerPrompt: string
    registerLink: string
    errors: {
      required: string
    }
  }
  register: {
    title: string
    infoBadge: string
    infoMessage: string
    usernameLabel: string
    usernamePlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    confirmPasswordLabel: string
    confirmPasswordPlaceholder: string
    submitButton: string
    loginPrompt: string
    loginLink: string
    successMessage: string
    errors: {
      required: string
      shortUsername: string
      shortPassword: string
      mismatch: string
    }
  }
  header: {
    welcome: string
  }
  sidebar: {
    dashboard: string
    classScheduling: string
    courseSection: string
    userManagement: string
    subjectManagement: string
    classroomManagement: string
    semesterManagement: string
    sendNotifications: string
  }
  pages: {
    dashboard: {
      title: string
      totalStudents: string
      totalTeachers: string
      totalSubjects: string
      totalClassrooms: string
    }
    classScheduling: {
      title: string
      description: string
    }
    courseSection: {
      title: string
      description: string
    }
    userManagement: {
      title: string
      description: string
    }
    subjectManagement: {
      title: string
      description: string
    }
    classroomManagement: {
      title: string
      description: string
    }
    semesterManagement: {
      title: string
      description: string
    }
    sendNotifications: {
      title: string
      description: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  vi: {
    common: {
      appName: 'Web Admin Portal',
      loading: 'Đang tải...',
      greeting: 'Xin chào',
      logout: 'Đăng xuất',
      switchToEnglish: 'Chuyển sang tiếng Anh',
      switchToVietnamese: 'Chuyển sang tiếng Việt',
    },
    login: {
      title: 'Đăng nhập',
      infoBadge: 'Test Mode:',
      infoMessage: 'Nhập bất kỳ tên đăng nhập và mật khẩu nào để đăng nhập',
      usernameLabel: 'Tên đăng nhập',
      usernamePlaceholder: 'Nhập tên đăng nhập của bạn',
      passwordLabel: 'Mật khẩu',
      passwordPlaceholder: 'Nhập mật khẩu của bạn',
      submitButton: 'Đăng nhập',
      registerPrompt: 'Chưa có tài khoản?',
      registerLink: 'Đăng ký ngay',
      errors: {
        required: 'Vui lòng nhập đầy đủ thông tin',
      },
    },
    register: {
      title: 'Đăng ký tài khoản',
      infoBadge: 'Test Mode:',
      infoMessage: 'Đăng ký tài khoản mới để sử dụng hệ thống',
      usernameLabel: 'Tên đăng nhập',
      usernamePlaceholder: 'Nhập tên đăng nhập (tối thiểu 3 ký tự)',
      passwordLabel: 'Mật khẩu',
      passwordPlaceholder: 'Nhập mật khẩu (tối thiểu 6 ký tự)',
      confirmPasswordLabel: 'Xác nhận mật khẩu',
      confirmPasswordPlaceholder: 'Nhập lại mật khẩu',
      submitButton: 'Đăng ký',
      loginPrompt: 'Đã có tài khoản?',
      loginLink: 'Đăng nhập ngay',
      successMessage: 'Đăng ký thành công! Đang chuyển đến trang đăng nhập...',
      errors: {
        required: 'Vui lòng nhập đầy đủ thông tin',
        shortUsername: 'Tên đăng nhập phải có ít nhất 3 ký tự',
        shortPassword: 'Mật khẩu phải có ít nhất 6 ký tự',
        mismatch: 'Mật khẩu xác nhận không khớp',
      },
    },
    header: {
      welcome: 'Xin chào',
    },
    sidebar: {
      dashboard: 'Bảng điều khiển',
      classScheduling: 'Quản lý lịch học',
      courseSection: 'Quản lý lớp học phần',
      userManagement: 'Quản lý người dùng',
      subjectManagement: 'Quản lý môn học',
      classroomManagement: 'Quản lý phòng học',
      semesterManagement: 'Quản lý học kỳ',
      sendNotifications: 'Gửi thông báo',
    },
    pages: {
      dashboard: {
        title: 'Bảng điều khiển',
        totalStudents: 'Tổng số Sinh viên',
        totalTeachers: 'Tổng số Giảng viên',
        totalSubjects: 'Tổng số Môn học',
        totalClassrooms: 'Tổng số Phòng học',
      },
      classScheduling: {
        title: 'Quản lý lịch học',
        description: 'Trang quản lý lịch học sẽ được hiển thị ở đây.',
      },
      courseSection: {
        title: 'Quản lý lớp học phần',
        description: 'Trang quản lý lớp học phần sẽ được hiển thị ở đây.',
      },
      userManagement: {
        title: 'Quản lý người dùng',
        description: 'Trang quản lý người dùng sẽ được hiển thị ở đây.',
      },
      subjectManagement: {
        title: 'Quản lý môn học',
        description: 'Trang quản lý môn học sẽ được hiển thị ở đây.',
      },
      classroomManagement: {
        title: 'Quản lý phòng học',
        description: 'Trang quản lý phòng học sẽ được hiển thị ở đây.',
      },
      semesterManagement: {
        title: 'Quản lý học kỳ',
        description: 'Trang quản lý học kỳ sẽ được hiển thị ở đây.',
      },
      sendNotifications: {
        title: 'Gửi thông báo',
        description: 'Trang gửi thông báo sẽ được hiển thị ở đây.',
      },
    },
  },
  en: {
    common: {
      appName: 'Web Admin Portal',
      loading: 'Loading...',
      greeting: 'Hello',
      logout: 'Log out',
      switchToEnglish: 'Switch to English',
      switchToVietnamese: 'Switch to Vietnamese',
    },
    login: {
      title: 'Log In',
      infoBadge: 'Test Mode:',
      infoMessage: 'Enter any username and password to sign in',
      usernameLabel: 'Username',
      usernamePlaceholder: 'Enter your username',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      submitButton: 'Log In',
      registerPrompt: "Don't have an account?",
      registerLink: 'Register now',
      errors: {
        required: 'Please fill in all fields',
      },
    },
    register: {
      title: 'Create an account',
      infoBadge: 'Test Mode:',
      infoMessage: 'Register a new account to use the system',
      usernameLabel: 'Username',
      usernamePlaceholder: 'Enter a username (at least 3 characters)',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter a password (at least 6 characters)',
      confirmPasswordLabel: 'Confirm password',
      confirmPasswordPlaceholder: 'Re-enter the password',
      submitButton: 'Register',
      loginPrompt: 'Already have an account?',
      loginLink: 'Sign in now',
      successMessage: 'Registration successful! Redirecting to login...',
      errors: {
        required: 'Please fill in all fields',
        shortUsername: 'Username must be at least 3 characters',
        shortPassword: 'Password must be at least 6 characters',
        mismatch: 'Confirmation password does not match',
      },
    },
    header: {
      welcome: 'Hello',
    },
    sidebar: {
      dashboard: 'Dashboard',
      classScheduling: 'Class Scheduling',
      courseSection: 'Course Section Management',
      userManagement: 'User Management',
      subjectManagement: 'Subject Management',
      classroomManagement: 'Classroom Management',
      semesterManagement: 'Semester Management',
      sendNotifications: 'Send Notifications',
    },
    pages: {
      dashboard: {
        title: 'Dashboard',
        totalStudents: 'Total Students',
        totalTeachers: 'Total Lecturers',
        totalSubjects: 'Total Subjects',
        totalClassrooms: 'Total Classrooms',
      },
      classScheduling: {
        title: 'Class Scheduling',
        description: 'The class scheduling management page will appear here.',
      },
      courseSection: {
        title: 'Course Section Management',
        description: 'The course section management page will appear here.',
      },
      userManagement: {
        title: 'User Management',
        description: 'The user management page will appear here.',
      },
      subjectManagement: {
        title: 'Subject Management',
        description: 'The subject management page will appear here.',
      },
      classroomManagement: {
        title: 'Classroom Management',
        description: 'The classroom management page will appear here.',
      },
      semesterManagement: {
        title: 'Semester Management',
        description: 'The semester management page will appear here.',
      },
      sendNotifications: {
        title: 'Send Notifications',
        description: 'The notification page will appear here.',
      },
    },
  },
}
