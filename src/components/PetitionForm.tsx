import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
export function PetitionForm() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'>(
    'idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    organization: '',
    country: '',
    email: '',
    experience: '',
    interest: '',
    committee: '',
    challenges: '',
    signature: '',
    date: new Date().toISOString().split('T')[0],
    phone: ''
  });
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = {
          ...prev
        };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = {
          ...prev
        };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.organization.trim())
    newErrors.organization = 'Organization is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.experience)
    newErrors.experience = 'Please select years of experience';
    if (!formData.interest) newErrors.interest = 'Please indicate your interest';
    if (!formData.committee)
    newErrors.committee = 'Please indicate willingness to join committee';
    if (!formData.signature.trim())
    newErrors.signature = 'Signature is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      setSubmitError('');
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            // ⚠️ IMPORTANT: Replace with your Web3Forms access key
            // Get yours free at https://web3forms.com (enter tizayisithole@gmail.com as recipient)
            access_key: 'f548e39b-6bcf-440d-8681-b89baf936802',
            subject: 'New GCSAA Africa Chapter Petition of Interest',
            from_name: 'GCSAA Africa Petition',
            // Form fields
            'Full Name': formData.fullName,
            'Position / Job Title': formData.position,
            'Golf Course or Organization': formData.organization,
            Country: formData.country,
            'Email Address': formData.email,
            'Contact Phone': formData.phone,
            'Years of Experience': formData.experience,
            'Interest in Joining': formData.interest,
            'Willing to Join Founding Committee': formData.committee,
            'Key Challenges / Needs': formData.challenges || 'Not provided',
            Signature: formData.signature,
            Date: formData.date
          })
        });
        const result = await response.json();
        if (result.success) {
          setStatus('success');
        } else {
          setSubmitError(
            result.message || 'Submission failed. Please try again.'
          );
          setStatus('error');
        }
      } catch (err) {
        setSubmitError(
          'Network error. Please check your connection and try again.'
        );
        setStatus('error');
      }
    }
  };
  if (status === 'success') {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 text-center border border-sage/20">
        
        <div className="w-20 h-20 bg-forest/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-forest" />
        </div>
        <h3 className="font-heading text-3xl text-forest font-semibold mb-4">
          Thank You for Your Interest
        </h3>
        <p className="font-body text-lg text-darkText/80 max-w-md mx-auto leading-relaxed">
          Your petition of interest has been successfully submitted. We will
          keep you updated on the progress of establishing the GCSAA Africa
          Chapter.
        </p>
      </motion.div>);

  }
  const inputClasses = (name: string) => `
    w-full px-4 py-3 rounded-lg border bg-cream/50 font-body text-darkText focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors
    ${errors[name] ? 'border-red-500 bg-red-50/50' : 'border-sage/20 hover:border-sage/40'}
  `;
  const labelClasses =
  'block font-body font-semibold text-forest mb-2 text-sm uppercase tracking-wide';
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 border border-sage/20">
      
      {status === 'error' && submitError &&
      <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-red-700">
              Submission Failed
            </p>
            <p className="font-body text-sm text-red-600 mt-1">{submitError}</p>
          </div>
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClasses('fullName')}
            placeholder="John Doe" />
          
          {errors.fullName &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.fullName}
            </p>
          }
        </div>

        {/* Position */}
        <div>
          <label htmlFor="position" className={labelClasses}>
            Position / Job Title *
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={inputClasses('position')}
            placeholder="Course Superintendent" />
          
          {errors.position &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.position}
            </p>
          }
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className={labelClasses}>
            Golf Course or Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className={inputClasses('organization')}
            placeholder="Royal Golf Club" />
          
          {errors.organization &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.organization}
            </p>
          }
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className={labelClasses}>
            Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={inputClasses('country')}
            placeholder="South Africa" />
          
          {errors.country &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.country}
            </p>
          }
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses('email')}
            placeholder="john@example.com" />
          
          {errors.email &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          }
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Contact Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses('phone')}
            placeholder="+1 (555) 000-0000" />
          
        </div>

        {/* Experience */}
        <div className="md:col-span-2">
          <label htmlFor="experience" className={labelClasses}>
            Years of Experience *
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={inputClasses('experience')}>
            
            <option value="">Select years of experience</option>
            <option value="Less than 1">Less than 1 year</option>
            <option value="1-5">1-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="11-20">11-20 years</option>
            <option value="20+">20+ years</option>
          </select>
          {errors.experience &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.experience}
            </p>
          }
        </div>

        {/* Interest Radio Group */}
        <div className="md:col-span-2">
          <label className={labelClasses}>
            Interest in joining the chapter *
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {['Yes', 'No', 'Maybe'].map((option) =>
            <button
              key={`interest-${option}`}
              type="button"
              onClick={() => handleRadioChange('interest', option)}
              className={`px-6 py-3 rounded-xl border font-body font-medium transition-all duration-200 ${formData.interest === option ? 'bg-forest text-white border-forest shadow-md' : 'bg-cream/50 text-darkText/80 border-sage/20 hover:border-sage/50'}`}>
              
                {option}
              </button>
            )}
          </div>
          {errors.interest &&
          <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.interest}
            </p>
          }
        </div>

        {/* Committee Radio Group */}
        <div className="md:col-span-2">
          <label className={labelClasses}>
            Willingness to join a founding committee *
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {['Yes', 'No'].map((option) =>
            <button
              key={`committee-${option}`}
              type="button"
              onClick={() => handleRadioChange('committee', option)}
              className={`px-6 py-3 rounded-xl border font-body font-medium transition-all duration-200 ${formData.committee === option ? 'bg-gold text-forest border-gold shadow-md' : 'bg-cream/50 text-darkText/80 border-sage/20 hover:border-sage/50'}`}>
              
                {option}
              </button>
            )}
          </div>
          {errors.committee &&
          <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.committee}
            </p>
          }
        </div>

        {/* Challenges Textarea */}
        <div className="md:col-span-2">
          <label htmlFor="challenges" className={labelClasses}>
            Key challenges or needs the chapter should address
          </label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            rows={4}
            className={inputClasses('challenges')}
            placeholder="Share your thoughts on what the chapter should focus on..." />
          
        </div>

        {/* Signature */}
        <div>
          <label htmlFor="signature" className={labelClasses}>
            Signature (Type Full Name) *
          </label>
          <input
            type="text"
            id="signature"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            className={`${inputClasses('signature')} font-heading italic text-lg`}
            placeholder="Type your name to sign" />
          
          {errors.signature &&
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.signature}
            </p>
          }
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClasses}>
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputClasses('date')} />
          
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-sage/20 flex justify-end">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex items-center justify-center gap-3 bg-gold text-forest px-10 py-4 rounded-full font-body font-bold text-lg transition-all duration-300 hover:bg-forest hover:text-white hover:shadow-[0_0_30px_rgba(27,67,50,0.3)] focus:outline-none focus:ring-4 focus:ring-gold/50 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto">
          
          {status === 'submitting' ? 'Submitting...' : 'Submit Petition'}
        </button>
      </div>
    </form>);

}