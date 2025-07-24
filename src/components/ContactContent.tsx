import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faUser,
  faSpinner,
  faCheckCircle,
  faExclamationTriangle,
  faCalendarAlt,
  faGlobe,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

function ContactContent() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.errors.nameMinLength');
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = t('contact.form.errors.subjectMinLength');
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.errors.messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('submitting');
    
    try {
      // Simulate API call - Replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll simulate success
      // In real implementation, integrate with services like:
      // - EmailJS
      // - Formspree
      // - Netlify Forms
      // - Your own backend API
      
      setSubmitStatus('success');
      setSubmitMessage(t('contact.form.success'));
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t('contact.form.error'));
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: t('contact.info.email'),
      value: 'ese.osagie19@gmail.com',
      href: 'mailto:ese.osagie19@gmail.com',
      color: 'text-teal-500'
    },
    {
      icon: faPhone,
      label: t('contact.info.phone'),
      value: '+49 123 456 7890',
      href: 'tel:+491234567890',
      color: 'text-blue-500'
    },
    {
      icon: faMapMarkerAlt,
      label: t('contact.info.location'),
      value: 'Berlin, Germany',
      href: 'https://maps.google.com/?q=Berlin,Germany',
      color: 'text-amber-500'
    },
    {
      icon: faGlobe,
      label: t('contact.info.website'),
      value: 'eseosagie.dev',
      href: 'https://eseosagie.dev',
      color: 'text-purple-500'
    }
  ];

  const socialLinks = [
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eseosagie/',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: faGithub,
      label: 'GitHub',
      href: 'https://github.com/Ese-tech',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-900/20'
    },
    {
      icon: faTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/eseosagie',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20'
    },
    {
      icon: faWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/491234567890',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/20'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 transition-colors py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl shadow-lg mb-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-teal-500 mr-4" />
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {t('contact.form.title')}
                </h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon 
                        icon={faUser} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" 
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 ${
                          errors.name 
                            ? 'border-red-300 dark:border-red-500' 
                            : 'border-slate-300 dark:border-slate-600'
                        }`}
                        placeholder={t('contact.form.placeholders.name')}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" 
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 ${
                          errors.email 
                            ? 'border-red-300 dark:border-red-500' 
                            : 'border-slate-300 dark:border-slate-600'
                        }`}
                        placeholder={t('contact.form.placeholders.email')}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 ${
                      errors.subject 
                        ? 'border-red-300 dark:border-red-500' 
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                    placeholder={t('contact.form.placeholders.subject')}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 resize-none ${
                      errors.message 
                        ? 'border-red-300 dark:border-red-500' 
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                    placeholder={t('contact.form.placeholders.message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                      submitStatus === 'submitting'
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {submitStatus === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin" />
                        {t('contact.form.sending')}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        {t('contact.form.send')}
                      </span>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg flex items-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700'
                  }`}>
                    <FontAwesomeIcon 
                      icon={submitStatus === 'success' ? faCheckCircle : faExclamationTriangle} 
                      className="mr-2" 
                    />
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-amber-500" />
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <FontAwesomeIcon icon={item.icon} className={`${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.label}</p>
                      <p className="font-medium text-slate-800 dark:text-slate-200">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                <FontAwesomeIcon icon={faGlobe} className="mr-3 text-teal-500" />
                {t('contact.social.title')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-lg border border-slate-200 dark:border-slate-600 ${social.bgColor} ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group`}
                  >
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className="text-2xl mb-2 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform duration-200" 
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-3 text-green-500" />
                {t('contact.availability.title')}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {t('contact.availability.status')}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-blue-500" />
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    {t('contact.availability.responseTime')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Optional: Simple Map Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
              {t('contact.location.title')}
            </h3>
            
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-600 flex items-center justify-center">
              {/* Simple placeholder for map - replace with actual map integration */}
              <div className="text-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-slate-400 dark:text-slate-500 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Berlin, Germany
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">
                  {t('contact.location.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactContent;