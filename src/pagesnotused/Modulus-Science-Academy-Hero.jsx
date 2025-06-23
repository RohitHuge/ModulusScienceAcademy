// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Row, Col, Card, Divider, Typography, Space } from 'antd';
import {
PhoneOutlined,
EnvironmentOutlined,
MailOutlined,
FacebookOutlined,
InstagramOutlined,
WhatsAppOutlined,
MenuOutlined,
CloseOutlined
} from '@ant-design/icons';
const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const App = () => {
const [menuVisible, setMenuVisible] = useState(false);
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 50) {
setScrolled(true);
} else {
setScrolled(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
const toggleMenu = () => {
setMenuVisible(!menuVisible);
};
const mentors = [
{
name: 'PANDHARI SIR',
qualification: 'M.Sc Chem, SET, P.hD Pursuing',
expertise: 'Chemistry Expert',
experience: '12+ Years Exp.'
},
{
name: 'AMIT SIR',
qualification: 'M.Sc Physics, NET',
expertise: 'Physics Expert',
experience: '8+ Years Exp.'
},
{
name: 'SANDIP SIR',
qualification: 'M.Sc Maths, SET, B.Ed',
expertise: 'Mathematics Expert',
experience: '8+ Years Exp.'
},
{
name: 'RAM SIR',
qualification: 'M.Sc Microbiology',
expertise: 'Biology Expert',
experience: '5+ Years Exp.'
}
];
return (
<Layout className="min-h-screen">
{/* Header */}
<Header
className={`px-6 py-0 flex items-center justify-between fixed w-full z-50 transition-all duration-300 ${
scrolled ? 'bg-white shadow-md' : 'bg-white'
}`}
style={{ height: '80px' }}
>
<div className="flex items-center">
<div className="flex items-center">
<div className="w-16 h-16 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-800 rounded-md flex items-center justify-center">
<div className="text-white font-bold text-xl">MSA</div>
</div>
</div>
</div>
</div>
{/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
<a href="#" className="text-blue-800 hover:text-yellow-500 font-medium">Home</a>
<a href="https://readdy.ai/home/4be2492c-3f8d-40b5-91b2-0911cb3edc95/d742060a-0ad3-4cc2-a797-c1be111a6ca8" data-readdy="true" className="text-blue-800 hover:text-yellow-500 font-medium">About</a>
<a href="#" className="text-blue-800 hover:text-yellow-500 font-medium">Courses</a>
<a href="#" className="text-blue-800 hover:text-yellow-500 font-medium">Mentors</a>
<a href="#" className="text-blue-800 hover:text-yellow-500 font-medium">Results</a>
<a href="#" className="text-blue-800 hover:text-yellow-500 font-medium">Contact</a>
</div>
<div className="hidden md:block">
<Button
type="primary"
size="large"
className="!rounded-button whitespace-nowrap cursor-pointer flex items-center"
style={{ backgroundColor: '#FFD700', borderColor: '#FFD700' }}
>
<PhoneOutlined className="mr-2" /> Apply Now
</Button>
</div>
{/* Mobile Menu Button */}
<div className="md:hidden flex items-center">
<Button
type="text"
onClick={toggleMenu}
className="!rounded-button whitespace-nowrap cursor-pointer"
icon={menuVisible ? <CloseOutlined /> : <MenuOutlined />}
size="large"
/>
</div>
</Header>
{/* Mobile Navigation Menu */}
{menuVisible && (
<div className="fixed top-20 left-0 w-full bg-white shadow-lg z-40 md:hidden">
<div className="flex flex-col p-4">
<a href="#" className="py-3 px-4 text-blue-800 hover:bg-blue-50 rounded-md">Home</a>
<a href="https://readdy.ai/home/4be2492c-3f8d-40b5-91b2-0911cb3edc95/d742060a-0ad3-4cc2-a797-c1be111a6ca8" data-readdy="true" className="py-3 px-4 text-blue-800 hover:bg-blue-50 rounded-md">About</a>
<a href="#" className="py-3 px-4 text-blue-800 hover:bg-blue-50 rounded-md">Courses</a>
<a href="#" className="py-3 px-4 text-blue-800 hover:bg-blue-50 rounded-md">Mentors</a>
<a href="#" className="py-3 px-4 text-blue-800 hover:bg-blue-50 rounded-md">Results</a>
<a href="#" className="py-3 px-4 text-blue-800 hover:bg-blue-50 rounded-md">Contact</a>
<Button
type="primary"
size="large"
className="mt-4 !rounded-button whitespace-nowrap cursor-pointer"
style={{ backgroundColor: '#FFD700', borderColor: '#FFD700' }}
>
<PhoneOutlined className="mr-2" /> Apply Now
</Button>
</div>
</div>
)}
<Content className="pt-20">
{/* Hero Section */}
<div className="relative overflow-hidden" style={{ minHeight: '600px' }}>
<div
className="absolute inset-0 z-0"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20educational%20background%20with%20subtle%20science%20elements%20like%20molecules%2C%20formulas%2C%20and%20books%20in%20blue%20and%20yellow%20gradient%2C%20professional%20modern%20design%20for%20education%20website&width=1440&height=600&seq=1&orientation=landscape')`,
backgroundSize: 'cover',
backgroundPosition: 'center'
}}
></div>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 z-10"></div>
<div className="container mx-auto px-6 py-16 relative z-20">
<div className="flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
MODULUS SCIENCE ACADEMY
</h1>
<p className="text-xl md:text-2xl text-yellow-400 font-medium mb-6">
"By The Students, For The Students"
</p>
<p className="text-white text-lg mb-8 max-w-lg">
Empowering students to excel in science subjects with expert mentors and proven teaching methodologies. Join us to transform your academic journey.
</p>
<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
<Button
type="primary"
size="large"
className="!rounded-button whitespace-nowrap cursor-pointer"
style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#004AAD', fontWeight: 'bold' }}
>
Get Admission Info
</Button>
<div className="flex items-center text-white text-lg">
<PhoneOutlined className="mr-2" />
<span>8999930804 / 7798902221</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-full max-w-md">
<div className="absolute -inset-1 rounded-full bg-yellow-400 blur-md"></div>
<div className="relative rounded-full overflow-hidden border-4 border-yellow-400">
<img
src="https://readdy.ai/api/search-image?query=high%20quality%20professional%20image%20of%20a%20student%20studying%20science%20with%20books%20and%20lab%20equipment%2C%20focused%20expression%2C%20educational%20setting%2C%20bright%20lighting%2C%20inspirational%20academic%20environment&width=500&height=500&seq=2&orientation=squarish"
alt="Student studying"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Mentors Section */}
<div className="bg-gray-50 py-16">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-blue-900 mb-4">OUR MENTORS</h2>
<p className="text-xl text-yellow-600 font-medium">
"Every Topper Has a Teacher — Meet Yours!"
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{mentors.map((mentor, index) => (
<Card
key={index}
className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
bordered={false}
>
<div className="h-2 bg-yellow-400 -mx-6 -mt-6 mb-6"></div>
<div className="text-center">
<div className="w-20 h-20 mx-auto bg-blue-900 rounded-full flex items-center justify-center mb-4">
<span className="text-white text-2xl font-bold">
{mentor.name.split(' ')[0].charAt(0)}
</span>
</div>
<h3 className="text-xl font-bold text-blue-900 mb-2">{mentor.name}</h3>
<p className="text-gray-600 mb-2">{mentor.qualification}</p>
<p className="text-blue-700 font-medium mb-1">{mentor.expertise}</p>
<p className="text-yellow-600 font-medium">{mentor.experience}</p>
</div>
</Card>
))}
</div>
</div>
</div>
{/* Why Choose Us Section */}
<div className="py-16 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-blue-900 mb-4">WHY CHOOSE US</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">
At Modulus Science Academy, we combine expert mentorship with innovative teaching methods to ensure academic excellence.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="fas fa-user-graduate text-blue-900 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-blue-900 mb-3 text-center">Expert Faculty</h3>
<p className="text-gray-600 text-center">
Learn from highly qualified mentors with years of teaching experience and proven results.
</p>
</div>
<div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="fas fa-book-open text-blue-900 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-blue-900 mb-3 text-center">Comprehensive Curriculum</h3>
<p className="text-gray-600 text-center">
Our courses cover all aspects of the syllabus with additional focus on competitive exams.
</p>
</div>
<div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
<i className="fas fa-chart-line text-blue-900 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-blue-900 mb-3 text-center">Track Record of Success</h3>
<p className="text-gray-600 text-center">
Our students consistently achieve top ranks in various competitive examinations.
</p>
</div>
</div>
</div>
</div>
{/* Contact Banner */}
<div className="bg-blue-900 py-12">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="mb-6 md:mb-0 text-center md:text-left">
<h3 className="text-2xl font-bold text-white mb-2">Ready to Excel in Science?</h3>
<p className="text-yellow-400">Contact us today to schedule a consultation with our expert mentors.</p>
</div>
<Button
type="primary"
size="large"
className="!rounded-button whitespace-nowrap cursor-pointer"
style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#004AAD', fontWeight: 'bold' }}
>
<PhoneOutlined className="mr-2" /> Contact Us Now
</Button>
</div>
</div>
</div>
</Content>
{/* Footer */}
<Footer className="bg-blue-900 text-white p-0">
<div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h3>
<div className="flex items-start mb-3">
<EnvironmentOutlined className="mt-1 mr-3 text-yellow-400" />
<p>Saraswati Park, Vinayak Nagar, Mayur Nagari Road, Katepuram Chowk, New Sangvi</p>
</div>
<div className="flex items-center mb-3">
<PhoneOutlined className="mr-3 text-yellow-400" />
<p>8999930804 / 7798902221</p>
</div>
<div className="flex items-center mb-3">
<MailOutlined className="mr-3 text-yellow-400" />
<p>info@modulusscienceacademy.com</p>
</div>
</div>
<div>
<h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
<ul className="space-y-2">
<li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
<li><a href="https://readdy.ai/home/4be2492c-3f8d-40b5-91b2-0911cb3edc95/d742060a-0ad3-4cc2-a797-c1be111a6ca8" data-readdy="true" className="hover:text-yellow-400 transition-colors">About Us</a></li>
<li><a href="#" className="hover:text-yellow-400 transition-colors">Courses</a></li>
<li><a href="#" className="hover:text-yellow-400 transition-colors">Mentors</a></li>
<li><a href="#" className="hover:text-yellow-400 transition-colors">Results</a></li>
<li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-4 text-yellow-400">Connect With Us</h3>
<p className="mb-4">Follow us on social media to stay updated with latest news and events.</p>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
<FacebookOutlined className="text-white text-lg" />
</a>
<a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
<InstagramOutlined className="text-white text-lg" />
</a>
<a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
<WhatsAppOutlined className="text-white text-lg" />
</a>
</div>
</div>
</div>
<Divider className="border-blue-800 my-8" />
<div className="text-center text-blue-200">
<p>&copy; {new Date().getFullYear()} Modulus Science Academy. All Rights Reserved.</p>
<p className="text-sm mt-2">Designed with ❤️ for student success</p>
</div>
</div>
</Footer>
</Layout>
);
};
export default App