import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logobg from '../assets/logobg.png';

export default function Hero({ onApplyClick }) {
  const navigate = useNavigate();
  const handleAdmissionInfo = () => {
    navigate('/contact');
  };
  return (
    // <div className="relative overflow-hidden overflow-x-hidden min-h-screen w-full flex items-center justify-center" style={{ minHeight: '100vh' }}>
    <div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden flex-1">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20educational%20background%20with%20subtle%20science%20elements%20like%20molecules%2C%20formulas%2C%20and%20books%20in%20blue%20and%20yellow%20gradient%2C%20professional%20modern%20design%20for%20education%20website&width=1440&height=600&seq=1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 z-10"></div>
      <div className="relative z-20 w-full flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 py-16 gap-6 md:gap-10 overflow-x-hidden">
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
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
                onClick={handleAdmissionInfo}
              >
                Get Admission Info
              </Button>
              <div className="flex items-center text-white text-lg">
                <PhoneOutlined className="mr-2" />
                <span>8999930804 / 7798902221</span>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute -inset-1 rounded-full bg-yellow-400 blur-md"></div>
              {/* <div className="absolute w-5/6 h-5/6 bg-white rounded-full z-10"></div> */}
              <div className="relative rounded-full overflow-hidden border-4 border-yellow-400 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex items-center justify-center">
                <img
                  src={logobg}
                  alt="Modulus Academy Logo"
                  className="w-4/5 h-4/5 object-contain relative z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}