export const appointmentContent = {
  title: 'Book an Appointment',
  subtitle: 'Schedule Your Visit With Us',
  description: 'Book your appointment easily through phone, online portal, or walk-in registration. We strive to accommodate your schedule and provide timely care.',
  contactInfo: {
    phone: '+1 (555) 123-4567',
    email: 'appointments@healthcareplus.com',
    emergencyPhone: '+1 (555) 911-HELP',
  },
  timings: {
    weekdays: {
      label: 'Monday - Friday',
      opd: '8:00 AM - 8:00 PM',
      emergency: '24/7',
    },
    saturday: {
      label: 'Saturday',
      opd: '9:00 AM - 5:00 PM',
      emergency: '24/7',
    },
    sunday: {
      label: 'Sunday',
      opd: '10:00 AM - 2:00 PM (Emergency Only)',
      emergency: '24/7',
    },
  },
  procedures: [
    {
      id: 1,
      icon: '📞',
      title: 'Call Us',
      description: 'Call our appointment desk and speak with our staff to schedule your visit.',
    },
    {
      id: 2,
      icon: '💻',
      title: 'Online Booking',
      description: 'Use our online portal to book appointments at your convenience.',
    },
    {
      id: 3,
      icon: '🚶',
      title: 'Walk-In',
      description: 'Visit our registration desk for immediate appointment scheduling.',
    },
  ],
  departments: [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'General Medicine',
    'Gynecology',
    'Dermatology',
    'Oncology',
    'Ophthalmology',
    'ENT',
    'Dentistry',
    'Psychiatry',
  ],
  note: 'Please bring your insurance card and valid ID for your appointment. Arrive 15 minutes early for registration.',
};
